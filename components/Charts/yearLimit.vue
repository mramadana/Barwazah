<template>
  <div v-if="dataReady" class="w-100">
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

    <VChart ref="chart" class="custom-chart" :option="option" style="height: 300px; width: 100%; display: block" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const axios = useApi();
const { response } = responseApi();

const { t } = useI18n();
const echarts = await import('echarts/core');
import { LineChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]);

const dataReady = ref(false);
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
const config = computed(()=> {
    return { headers: { Authorization: `Bearer ${token.value}` } }
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
  console.log(config.value, "res");
  try {
    const res = await axios.get(`AverageMarketVisits?year=${year}`, config.value);
    if (response(res) == "success") {
      const monthlyData = res.data.data;
      option.value.xAxis.data = Allmonths.value;
      // Map the values from the API response
      option.value.series[0].data = monthlyData.map(item => Number(item.value));
      console.log(monthlyData, "monthlyData");
      if (chart.value && chart.value.chart) {
        chart.value.chart.setOption(option.value, true);
      } else {
        console.error('Chart instance is not ready.');
      }
    }
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  dataReady.value = true;
  // Get current year
  const currentYear = new Date().getFullYear();
  // Find and set the current year in the dropdown
  selectedYear.value = years.value.find(year => year.id === currentYear);
  // Load data for current year
  getData(currentYear);
});
</script>

<style lang="scss">
.custom-chart {
  width: 550px;
  max-width: 100%;
}
</style>