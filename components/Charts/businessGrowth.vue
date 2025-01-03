<template>
    <div v-if="dataReady" class="w-100">
      <div class="d-flex align-items-center justify-content-center gap-4 mb-4">
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
    { name: '2024', id: 2024 },
  ]);
  
  const Allmonths = ref(['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']);
  
  // Chart instance and data
  const chart = ref(null);
  
  // Sample data for years - adjusted to match the image pattern
  const yearlyData = {
    2020: {
      sales: [85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90],  // Steady growth
      market: [90, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 96]  // Slightly above sales
    },
    2021: {
      sales: [91, 91, 92, 92, 93, 93, 94, 94, 95, 95, 96, 96],  // Continuing steady growth
      market: [97, 100, 102, 104, 106, 107, 108, 109, 110, 110, 110, 110]  // Starting to rise faster
    },
    2022: {
      sales: [97, 97, 98, 98, 99, 99, 100, 100, 101, 101, 102, 102],  // Maintaining steady growth
      market: [115, 120, 125, 130, 135, 137, 139, 140, 140, 140, 140, 140]  // Peak year
    },
    2023: {
      sales: [102, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108],  // Consistent growth
      market: [135, 130, 125, 120, 115, 110, 108, 106, 105, 105, 105, 105]  // Sharp decline
    },
    2024: {
      sales: [108, 109, 109, 110, 110, 111, 111, 112, 112, 113, 114, 115],  // Still growing steadily
      market: [110, 115, 120, 125, 130, 135, 140, 142, 145, 147, 149, 150]  // Strong recovery
    }
  };

  // Chart configuration
  const option = ref({
    legend: {
      bottom: '5%',
      show: true,
      left: 'center',
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 25,
      textStyle: {
        color: '#2B3674',
        fontSize: 12,
        fontFamily: 'Cairo'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { 
        type: 'line',
        lineStyle: {
          color: '#E2E8F0',
          width: 1
        }
      },
      backgroundColor: '#fff',
      borderColor: '#E2E8F0',
      borderWidth: 1,
      textStyle: {
        color: '#2B3674',
        fontFamily: 'Cairo'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [], // Dynamically updated
      axisLine: {
        lineStyle: {
          color: '#E2E8F0'
        }
      },
      axisLabel: {
        interval: 0,
        color: '#2B3674',
        fontFamily: 'Cairo',
        fontSize: 12
      },
    },
    yAxis: {
      type: 'value',
      show: true,
      splitLine: {
        lineStyle: {
          color: '#E2E8F0',
          type: 'dashed'
        }
      },
      axisLabel: {
        color: '#2B3674',
        fontFamily: 'Cairo',
        fontSize: 12
      },
      show: false
    },
    series: [
      {
        name: 'اجمالي المبيعات للمتجر خلال السنة',
        type: 'line',
        smooth: 0.5,
        symbol: 'circle',
        symbolSize: 6,
        showSymbol: true,
        lineStyle: { 
          width: 2,
          color: '#2B3674'
        },
        itemStyle: { 
          color: '#2B3674',
          borderWidth: 2
        },
        areaStyle: {
          opacity: 0.3,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(43, 54, 116, 0.3)' },
            { offset: 1, color: 'rgba(43, 54, 116, 0.05)' }
          ])
        },
        data: []
      },
      {
        name: 'الحصة السوقية للمتجر من السوق',
        type: 'line',
        smooth: 0.5,
        symbol: 'circle',
        symbolSize: 6,
        showSymbol: true,
        lineStyle: { 
          width: 2,
          color: '#FF647C'
        },
        itemStyle: { 
          color: '#FF647C',
          borderWidth: 2
        },
        areaStyle: {
          opacity: 0.3,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255, 100, 124, 0.3)' },
            { offset: 1, color: 'rgba(255, 100, 124, 0.05)' }
          ])
        },
        data: []
      }
    ]
  });
  
  // Update chart based on the selected year
  const handleYearChange = () => {
    const yearId = selectedYear.value.id;
  
    if (yearId === 0) {
      // Show all data
      option.value.xAxis.data = Object.keys(yearlyData);
      option.value.series[0].data = Object.keys(yearlyData).map(year => yearlyData[year].sales[11]); // December values
      option.value.series[1].data = Object.keys(yearlyData).map(year => yearlyData[year].market[11]); // December values
    } else {
      // Show data for the selected year
      const data = yearlyData[yearId];
      if (data) {
        option.value.xAxis.data = Array.from({ length: 12 }, (_, i) => `${Allmonths.value[i]}`);
        option.value.series[0].data = data.sales;
        option.value.series[1].data = data.market;
      }
    }
  
    if (chart.value && chart.value.chart) {
      chart.value.chart.setOption(option.value, true);
    }
  };
  
  onMounted(() => {
    dataReady.value = true;
    // Initialize with all years data
    option.value.xAxis.data = Object.keys(yearlyData);
    option.value.series[0].data = Object.keys(yearlyData).map(year => yearlyData[year].sales[11]);
    option.value.series[1].data = Object.keys(yearlyData).map(year => yearlyData[year].market[11]);
  });
  </script>
  
  <style lang="scss">
  .custom-chart {
    width: 100%;
    height: 300px !important;
  }
  
  :deep(.echarts) {
    width: 100% !important;
    height: 100% !important;
  }
  </style>