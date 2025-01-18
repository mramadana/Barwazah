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
  
  // Chart instance and data
  const chart = ref(null);
  
  // Sample data for years
  const yearlyData = {
    2020: {
      sales: 85,
      market: 90
    },
    2021: {
      sales: 91,
      market: 110
    },
    2022: {
      sales: 102,
      market: 140
    },
    2023: {
      sales: 108,
      market: 105
    },
    2024: {
      sales: 115,
      market: 150
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
      boundaryGap: true,
      data: [], // Will be dynamically updated
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
      }
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
      // Show all years data
      const years = Object.keys(yearlyData);
      option.value.xAxis.data = years;
      option.value.series[0].data = years.map(year => yearlyData[year].sales);
      option.value.series[1].data = years.map(year => yearlyData[year].market);
    } else {
      // Show selected year and previous year data
      const selectedYearStr = yearId.toString();
      const prevYearStr = (yearId - 1).toString();
      
      if (yearlyData[prevYearStr] && yearlyData[selectedYearStr]) {
        option.value.xAxis.data = [prevYearStr, selectedYearStr];
        option.value.series[0].data = [yearlyData[prevYearStr].sales, yearlyData[selectedYearStr].sales];
        option.value.series[1].data = [yearlyData[prevYearStr].market, yearlyData[selectedYearStr].market];
      }
    }
  
    if (chart.value && chart.value.chart) {
      chart.value.chart.setOption(option.value, true);
    }
  };
  
  onMounted(() => {
    dataReady.value = true;
    handleYearChange();
  });

  // Watch for year changes
  watch(() => selectedYear.value, handleYearChange);
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