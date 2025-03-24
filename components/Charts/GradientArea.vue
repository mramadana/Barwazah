<template>
  <div v-if="dataReady" class="w-100">

    <div class="radio-container">
      <input type="radio" :id="`radio1-${uniqueId}`" :name="`slider-${uniqueId}`" value="1" @change="handleRentalTypeChange">
      <label :for="`radio1-${uniqueId}`" class="cl-red">للمتجر</label>

      <input type="radio" :id="`radio2-${uniqueId}`" :name="`slider-${uniqueId}`" value="0" @change="handleRentalTypeChange" checked>
      <label :for="`radio2-${uniqueId}`">الكل</label>

      <input type="radio" :id="`radio3-${uniqueId}`" :name="`slider-${uniqueId}`" value="2" @change="handleRentalTypeChange">
      <label :for="`radio3-${uniqueId}`" class="main-cl">للسوق</label>

      <div class="marker"></div>
    </div>

    <div class="d-flex align-items-center justify-content-center gap-4">
      <!-- <label class="label mb-0">اختر الشهر</label> -->
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

    <VChart ref="chart" :option="option" style="height: 250px; width: 100%; display: block" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const echarts = await import('echarts/core');

const props = defineProps({
  initialMonths: { type: Array, required: true },
  initialAllMonths: { type: Array, required: true },
  initialOption: { type: Object, required: true },
  initialMonthlyData: { type: Object, required: true },
  initialSeriesData: { type: Array, required: true },
});

const emit = defineEmits(['rental_change']);
const uniqueId = ref(Math.random().toString(36).substr(2, 9));
const { t } = useI18n();

const dataReady = ref(false);
const selectedMonth = ref({ id: 0 });
const months = ref(props.initialMonths);
const Allmonths = ref(props.initialAllMonths);
const manualMonthlyData = ref(props.initialMonthlyData);

const chart = ref(null);

const generateDailyData = (days) => {
  return Array.from({ length: days }, () => 0);
};

const handleMonthChange = () => {
  console.log("handleMonthChange triggered", selectedMonth.value);
  if (!selectedMonth.value || typeof selectedMonth.value.id === "undefined") {
    console.error("Invalid selected month: ", selectedMonth.value);
    return;
  }
  emit('rental_change', selectedMonth.value.id);
  console.log("Emitted rental_change with ID:", selectedMonth.value.id);

  const monthId = selectedMonth.value.id;

  if (monthId === 0) {
    option.value.xAxis.data = Allmonths.value;
    option.value.series[0].data = props.initialSeriesData[0] || [];
    option.value.series[1].data = props.initialSeriesData[1] || [];
  } else {
    const selectedMonthData = months.value.find((month) => month.id === monthId);

    if (!selectedMonthData) {
      console.error("Invalid month ID: ", monthId);
      return;
    }

    const days = selectedMonthData.days;
    const dailyLabels = Array.from({ length: days }, (_, i) => `اليوم ${i + 1}`);

    option.value.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: dailyLabels,
      axisLabel: {
        interval: 0,
        rotate: 45,
      },
    };

    const customData = manualMonthlyData.value[monthId];
    if (customData) {
      option.value.series[0].data = customData.store || [];
      option.value.series[1].data = customData.market || [];
    } else {
      option.value.series[0].data = generateDailyData(days);
      option.value.series[1].data = generateDailyData(days);
    }
  }

  if (chart.value?.chart) {
    chart.value.chart.setOption(option.value, true);
  } else {
    console.error("Chart instance is not ready.");
  }
};

const option = ref({
  legend: {
    top: '5%',
    show: false,
    selected: {
      [t('Global.marketData')]: true,
      [t('Global.storeDataData')]: true,
    },
  },
  tooltip: {
    trigger: 'axis',
    padding: [10, 20],
    textStyle: {
      fontSize: 13,            // تكبير حجم الخط
      color: '#333',           // لون النص
      fontFamily: 'Arial',     // نوع الخط
    },
    borderWidth: 2,
    axisPointer: { type: 'cross', 
    type: 'none',
    label: { backgroundColor: '#6a7985'}
  },
    formatter: function(params) {
      let content = '<div style="text-align: right; direction: rtl;">'; // تنسيق عربي
      params.forEach((item) => {
        content += `
          <div style="
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 8px 0;
          ">
            <span style="
              display: inline-block;
              width: 12px;
              height: 12px;
              background: ${item.color};
              border-radius: 2px;
            "></span>
            <strong>${item.seriesName}:</strong>
            <span>${item.value}</span>
          </div>
        `;
      });
      content += '</div>';
      return content;
    },
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
    data: [],
    axisPointer: { type: 'none' },
  },
  yAxis: {
    type: 'value',
    show: false,
    axisPointer: { type: 'none' },
  },
  series: [
    {
      name: t('Global.marketData'),
      type: 'line',
      smooth: true,
      symbol: 'square',
      symbolSize: 7,
      showSymbol: true,
      lineStyle: { width: 2, color: '#4681f4' },
      itemStyle: { color: '#013660' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(70, 129, 244, 0.6)' },
          { offset: 1, color: 'rgba(70, 129, 244, 0.2)' },
        ]),
      },
      data: [],
    },
    {
      name: t('Global.storeDataData'),
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
      data: [],
    },
  ],
});

const handleRentalTypeChange = (event) => {
  const selectedRental = { id: Number(event.target.value) };

  if (selectedRental) {
    const chartInstance = chart.value?.chart;
    if (!chartInstance) return;

    switch (selectedRental.id) {
      case 0:
        option.value.legend.selected[t('Global.marketData')] = true;
        option.value.legend.selected[t('Global.storeDataData')] = true;
        break;
      case 1:
        option.value.legend.selected[t('Global.marketData')] = false;
        option.value.legend.selected[t('Global.storeDataData')] = true;
        break;
      case 2:
        option.value.legend.selected[t('Global.marketData')] = true;
        option.value.legend.selected[t('Global.storeDataData')] = false;
        break;
    }
    chartInstance.setOption(option.value, true);
  }
};

watch(() => props.initialMonthlyData, (newData) => {
  if (selectedMonth.value && selectedMonth.value.id !== 0) {
    const monthId = selectedMonth.value.id;
    const monthData = newData[monthId];
    if (monthData) {
      option.value.series[0].data = monthData.store || [];
      option.value.series[1].data = monthData.market || [];
      if (chart.value?.chart) {
        chart.value.chart.setOption(option.value, true);
      }
    }
  }
}, { deep: true });

// مراقبة التغييرات في البيانات الأولية
watch(() => props.initialSeriesData, (newValue) => {
  if (newValue && Array.isArray(newValue) && newValue.length > 0) {
    option.value.series[0].data = newValue[0] || [];
    option.value.series[1].data = newValue[1] || [];
    if (chart.value?.chart) {
      chart.value.chart.setOption(option.value, true);
    }
  }
}, { deep: true, immediate: true });

onBeforeMount(() => {
  dataReady.value = true;
  option.value.xAxis.data = Allmonths.value;
  
  // Set initial data
  if (Array.isArray(props.initialSeriesData) && props.initialSeriesData.length >= 2) {
    option.value.series[0].data = props.initialSeriesData[0] || [];
    option.value.series[1].data = props.initialSeriesData[1] || [];
  }
});

onMounted(() => {
  if (chart.value?.chart) {
    chart.value.chart.setOption(option.value, true);
  }
});
</script>

<style>
.radio-container {
  position: relative;
  width: 500px;
  background-color: #f4f9fd;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 auto 35px;
  max-width: 100%;
}

.radio-container label {
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #e63950, #1e1a3c);
}
</style>
