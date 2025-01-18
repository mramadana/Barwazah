<template>
  <div v-if="dataReady" class="w-100">
    <div class="d-flex align-items-center justify-content-center gap-4">
      <label class="label mb-0">اختر الشهر</label>
      <div class="with_cun_select custom-select">
        <div class="flex justify-content-center dropdown_card">
          <Dropdown 
            v-model="selectedMonth" 
            @change="handleMonthChange" 
            :options="months" 
            optionLabel="name" 
            :placeholder="'اختر الشهر'" 
            class="w-full md:w-14rem custum-dropdown" 
          />
        </div>
      </div>
    </div>

    <VChart ref="chart" :option="option" style="height: 300px; width: 100%; display: block" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// Props from parent
const props = defineProps({
  dataReady: Boolean,
  months: Array,
  allMonths: Array,
  manualData: Object,
  initialData: Object,
});
const echarts = await import('echarts/core');

// إعدادات الرسم البياني
const chart = ref(null);
const option = ref({
  legend: {
    top: '5%',
    show: false,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: props.initialData?.xAxis || [], // Use props.initialData
    axisLabel: {
      interval: 0,
      rotate: 45,
    },
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [
    {
      name: t('Global.males'),
      type: 'line',
      smooth: true,
      symbol: 'square',
      symbolSize: 7,
      showSymbol: true,
      lineStyle: { width: 2, color: '#f75c5c' },
      itemStyle: { color: '#e5254a' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(247, 92, 92, 0.6)' },
          { offset: 1, color: 'rgba(247, 92, 92, 0.2)' },
        ]),
      },
      data: props.initialData?.series || [], // Use props.initialData
    },
  ],
});
// Watch for changes in initialData
watch(() => props.initialData, (newData) => {
  if (newData) {
    option.value.xAxis.data = newData.xAxis;
    option.value.series[0].data = newData.series;
  }
}, { deep: true });

// الشهر المحدد
const selectedMonth = ref(0);

// تحديث البيانات بناءً على الشهر المحدد
const handleMonthChange = () => {
  if (selectedMonth.value.id === 0) {
    option.value.xAxis.data = props.allMonths;
    option.value.series[0].data = props.initialData?.series || [];
  } else {
    const days = props.months.find((m) => m.id === selectedMonth.value.id)?.days || 30;
    const dailyLabels = Array.from({ length: days }, (_, i) => `اليوم ${i + 1}`);
    option.value.xAxis.data = dailyLabels;

    if (props.manualData[selectedMonth.value.id]) {
      option.value.series[0].data = props.manualData[selectedMonth.value.id].store;
    } else {
      option.value.series[0].data = Array.from({ length: days }, () => Math.floor(Math.random() * 100) + 10);
    }
  }

  if (chart.value?.chart) {
    chart.value.chart.setOption(option.value, true);
  }
};
</script>
