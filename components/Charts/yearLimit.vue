<template>
  <div v-if="dataReady && chartDataLoaded" class="w-100" style="height: 400px;">
    <div class="d-flex align-items-center justify-content-center gap-4">
      <label class="label mb-0">اختر السنة</label>
      <div class="with_cun_select custom-select">
        <div class="flex justify-content-center dropdown_card">
          <Dropdown 
            v-model="selectedYear" 
            @change="handleYearChange" 
            :options="years" 
            optionLabel="name" 
            :placeholder="'اختر السنة'" 
            class="w-full md:w-14rem custum-dropdown" 
          />
        </div>
      </div>
    </div>

    <VChart ref="chart" class="custom-chart" :option="option" style="height: 100%; width: 100%; display: block" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth'; // تأكد من المسار الصحيح; // تأكد من المسار الصحيح

const axios = useApi();
const { response } = responseApi();

const { t } = useI18n();
const echarts = await import('echarts/core');
import { LineChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]);

const dataReady = ref(false);
const chartDataLoaded = ref(false); // متحكم في تحميل البيانات
const selectedYear = ref(null);
const years = ref([
  { name: '2020', id: 2020 },
  { name: '2021', id: 2021 },
  { name: '2022', id: 2022 },
  { name: '2023', id: 2023 },
  { name: '2024', id: 2024 },
  { name: '2025', id: 2025 },
]);

const Allmonths = ref(['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']);

const chart = ref(null);

const { token } = storeToRefs(useAuthStore());

// config
const config = computed(() => {
  return { headers: { Authorization: `Bearer ${token.value}` } };
});

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
    data: [],
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
      name: t('Global.females'),
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
  ],
});

const handleYearChange = async () => {
  if (selectedYear.value) {
    await getData(selectedYear.value.id);
  }
};

const getData = async (year) => {
  try {
    const res = await axios.get(`AverageMarketVisits?year=${year}`, config.value);
    if (response(res) == "success") {
      const monthlyData = res.data.data;
      option.value.xAxis.data = Allmonths.value;
      option.value.series[0].data = monthlyData.map(item => Number(item.value));

      await nextTick(); // الانتظار حتى يتم تحديث DOM
      if (chart.value && chart.value.chart) {
        chart.value.chart.resize(); // إعادة ضبط حجم الـ chart
      }
      chartDataLoaded.value = true; // تم تحميل البيانات
    }
  } catch (err) {
    console.error(err);
  }
};

onMounted(async () => {
  dataReady.value = true;
  const currentYear = new Date().getFullYear();
  selectedYear.value = years.value.find(year => year.id === currentYear);

  await nextTick(); // الانتظار حتى يتم تحديث DOM
  getData(currentYear);
});
</script>

<style lang="scss">
.custom-chart {
  width: 550px;
  max-width: 100%;
}
</style>