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
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  const echarts = await import('echarts/core');
  import { LineChart } from 'echarts/charts';
  import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  
  echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]);
  
  // Data readiness flag
  const dataReady = ref(false);
  
  // Dropdown selections
  const selectedYear = ref(0);
  
  const years = ref([
    { name: 'عرض الكل', id: 0 },
    { name: '2020', id: 2020 },
    { name: '2021', id: 2021 },
    { name: '2022', id: 2022 },
    { name: '2023', id: 2023 },
  ]);
  
  const Allmonths = ref(['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']);

  // Chart instance and data
  const chart = ref(null);
  
  // Chart configuration
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
      data: [], // Dynamically updated
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
        data: [], // Dynamically updated
      },
    ],
  });
  
  // Sample data for years
  const yearlyData = {
    2020: [100, 120, 110, 130, 140, 150, 160, 170, 180, 190, 200, 210],
    2021: [110, 130, 120, 140, 150, 160, 170, 180, 190, 200, 210, 220],
    2022: [120, 140, 130, 150, 160, 170, 180, 190, 200, 210, 220, 230],
    2023: [130, 150, 140, 160, 170, 180, 190, 200, 210, 220, 230, 240],
  };
  
  // Update chart based on the selected year
  const handleYearChange = () => {
    const yearId = selectedYear.value.id;
  
    if (yearId === 0) {
      // Show all data
      option.value.xAxis.data = Object.keys(yearlyData);
      option.value.series[0].data = Object.values(yearlyData).flat();
    } else {
      // Show data for the selected year
      const data = yearlyData[yearId];
      if (data) {
        option.value.xAxis.data = Array.from({ length: data.length }, (_, i) => ` ${Allmonths.value[i]}`);
        option.value.series[0].data = data;
      }
    }
  
    if (chart.value && chart.value.chart) {
      chart.value.chart.setOption(option.value, true);
    } else {
      console.error('Chart instance is not ready.');
    }
  };
  

// get the data from api
const getData = async () => {
    try {
        const res = await axios.get('GetYearLimit'); 
        if (response(res) === "success") {
            yearlyData.value = res.data.data;
        }
    } catch (err) {
        console.error(err);
    }
};



  onMounted(() => {
    dataReady.value = true;
    option.value.xAxis.data = Object.keys(yearlyData);
    option.value.series[0].data = Object.values(yearlyData).flat();
  });
  </script>
  
  <style lang="scss">
  .custom-chart {
    width: 550px;
    max-width: 100%;
  }
  </style>
  