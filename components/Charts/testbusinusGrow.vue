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

    <!-- Chart Component -->
    <div class="chart-container">
      <VChart 
        ref="chart" 
        class="custom-chart" 
        :option="option" 
        style="height: 300px; width: 100%; display: block" 
      />
      
      <!-- Year Labels -->
      <div class="year-labels">
        <div 
          v-for="year in displayedYears" 
          :key="year"
          class="year-label"
          :class="{ 'active': selectedYearName === year }"
          @click="handleYearLabelClick(year)"
        >
          {{ year }}
        </div>
      </div>
    </div>

    <!-- Dialog for Year Data -->
    <Dialog v-model:visible="dialogVisible" modal>
      <div class="dialog-content">
        <h3>مؤشرات سنة {{ selectedYearName }}</h3>
        <ul>
          <li>مبيعات السنة: <span class="value">{{ yearData.sales }} ريال</span></li>
          <li>الحصة السوقية للمتجر: <span class="value">{{ yearData.market }}%</span></li>
          <li>نسبة تكرار الشراء: <span class="value">{{ yearData.repeatRate || 'غير متوفرة' }}%</span></li>
        </ul>
        <button @click="closeDialog">إغلاق النافذة</button>
      </div>
    </Dialog>
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
const selectedYear = ref(null);

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
    market: 90,
    repeatRate: 10
  },
  2021: {
    sales: 91,
    market: 110,
    repeatRate: 15
  },
  2022: {
    sales: 102,
    market: 140,
    repeatRate: 5
  },
  2023: {
    sales: 108,
    market: 105,
    repeatRate: 20
  },
  2024: {
    sales: 115,
    market: 150,
    repeatRate: 18
  }
};

// Dialog visibility and selected year data
const dialogVisible = ref(false);
const selectedYearName = ref('');
const yearData = ref({});

// Close Dialog function
const closeDialog = () => {
  dialogVisible.value = false;
};

// Handle chart click event
const handleChartClick = (params) => {
  if (params.componentType === 'xAxis') {
    const year = parseInt(params.value, 10);
    if (yearlyData[year]) {
      selectedYearName.value = year;
      yearData.value = yearlyData[year];
      dialogVisible.value = true;
    }
  } else if (params && params.name) {
    const year = parseInt(params.name, 10);
    if (yearlyData[year]) {
      selectedYearName.value = year;
      yearData.value = yearlyData[year];
      dialogVisible.value = true;
    }
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
      fontSize: 12,
      show: true,
      clickable: true,
      rich: {
        a: {
          color: '#2B3674',
          fontFamily: 'Cairo',
          fontSize: 12,
          cursor: 'pointer',
          textDecoration: 'underline'
        }
      },
      formatter: function(value) {
        return '{a|' + value + '}';
      }
    }
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

// Track displayed years
const displayedYears = computed(() => {
  if (!selectedYear.value || selectedYear.value.id === 0) {
    return Object.keys(yearlyData);
  }
  const yearId = selectedYear.value.id;
  const allYears = Object.keys(yearlyData).map(Number);
  const latestYear = Math.max(...allYears);
  const years = [];
  for (let year = yearId; year <= latestYear; year++) {
    if (yearlyData[year]) {
      years.push(year.toString());
    }
  }
  return years;
});

// Handle year label click
const handleYearLabelClick = (year) => {
  const yearNum = parseInt(year, 10);
  if (yearlyData[yearNum]) {
    selectedYearName.value = yearNum;
    yearData.value = yearlyData[yearNum];
    dialogVisible.value = true;
  }
};

// Update chart based on the selected year
const handleYearChange = () => {
  if (!selectedYear.value) return;
  
  const yearId = selectedYear.value.id;

  if (yearId === 0) {
    const years = Object.keys(yearlyData);
    option.value.xAxis.data = years;
    option.value.series[0].data = years.map(year => yearlyData[year].sales);
    option.value.series[1].data = years.map(year => yearlyData[year].market);
  } else {
    const allYears = Object.keys(yearlyData).map(Number);
    const latestYear = Math.max(...allYears);
    const selectedYears = [];
    
    for (let year = yearId; year <= latestYear; year++) {
      if (yearlyData[year]) {
        selectedYears.push(year);
      }
    }

    option.value.xAxis.data = selectedYears.map(year => year.toString());
    option.value.series[0].data = selectedYears.map(year => yearlyData[year].sales);
    option.value.series[1].data = selectedYears.map(year => yearlyData[year].market);
  }

  if (chart.value && chart.value.chart) {
    chart.value.chart.setOption(option.value, true);
  }
};

onMounted(() => {
  dataReady.value = true;
  selectedYear.value = years.value[0];
  handleYearChange();

  if (chart.value && chart.value.chart) {
    chart.value.chart.on('click', handleChartClick);
  }
});

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

.dialog-content {
  text-align: center;
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 10px;
    }
    .value {
      font-weight: bold;
    }
  }
}

.chart-container {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
}

.year-labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  margin-top: 1rem;
  border-top: 2px solid #E2E8F0;
}

.year-label {
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: #2B3674;
  font-family: 'Cairo';
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 4px;
  
  &:hover {
    background-color: #f8f9fa;
    color: #FF647C;
  }
  
  &.active {
    color: #FF647C;
    font-weight: bold;
  }
}
</style>
