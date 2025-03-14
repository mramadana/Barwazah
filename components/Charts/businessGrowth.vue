<template>
  <div v-if="dataReady" class="w-100">
    <div class="d-flex align-items-center justify-content-center gap-4 mb-4">
      <!-- <label class="label mb-0">اختر السنة</label> -->
      <div class="with_cun_select custom-select">
        <div class="flex justify-content-center dropdown_card">
          <Dropdown 
            v-model="selectedYear"
            :options="years" 
            optionLabel="name" 
            @change="handleYearChange($event.value)"
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
      <div class="year-text">
        <h3 class="main-title bold main-cl mb-3">تقرير نمو</h3>
        <h5>{{ YearText }}</h5>
      </div>
    </div>

    <!-- Dialog for Year Data (Business Growth) -->
    <Dialog v-model:visible="dialogVisible" class="auth-daialog custum_dialog_width" modal>
      <div class="dialog-content">
        <h3 class="main-title bold text-center mb-3">مؤشرات سنة {{ selectedYearName }}</h3>
        <ul>
          <li class="mb-2 d-flex gap-2 justify-content-center mb-3">مبيعات السنة: <span class="value">{{ DialogyearData?.salesYear }}</span></li>
          <li class="mb-2 d-flex gap-2 justify-content-center mb-3">الحصة السوقية للمتجر: <span class="value">{{ DialogyearData?.storeMarketShare }}</span></li>
          <li class="mb-2 d-flex gap-2 justify-content-center mb-3">نسبة تكرار الشراء: <span class="value">{{ DialogyearData?.repeatPurchaseRate }}</span></li>
        </ul>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const axios = useApi();
const { response } = responseApi();
const { token } = storeToRefs(useAuthStore());
const config = computed(() => ({
  headers: { Authorization: `Bearer ${token.value}` }
}));

const echarts = await import('echarts/core');
import { LineChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]);

// Data readiness flag
const dataReady = ref(false);
const loading = ref(false);

// Chart data from API
const chartData = ref({
  marketData: [],
  storeDataData: []
});

// Chart instance
const chart = ref(null);
const DialogyearData = ref({});
// Dropdown selections
const selectedYear = ref(null);
const years = ref([
  { name: 'عرض الكل', id: 0 },
  { name: '2018', id: 2018 },
  { name: '2019', id: 2019 },
  { name: '2020', id: 2020 },
  { name: '2021', id: 2021 },
  { name: '2022', id: 2022 },
  { name: '2023', id: 2023 },
  { name: '2024', id: 2024 },
  { name: '2025', id: 2025 }
]);

// Fetch chart data from API
const fetchChartData = async (year = 0) => {
  try {
    loading.value = true;
    const res = await axios.get(`BusinessGrowthChart?year=${year}`, config.value);
    if (response(res) === "success") {
      chartData.value = res.data.data;
      updateChartData();
    }
  } catch (error) {
    console.error('Error fetching chart data:', error);
  } finally {
    loading.value = false;
  }
};

// Update chart with new data
const updateChartData = () => {
  const years = chartData.value.marketData.map(item => item.year);
  option.value.xAxis.data = years;
  option.value.series[0].data = chartData.value.marketData.map(item => item.value);
  option.value.series[1].data = chartData.value.storeDataData.map(item => item.value);

  if (chart.value && chart.value.chart) {
    chart.value.chart.setOption(option.value, true);
  }
};

// Handle year change from dropdown
const handleYearChange = async (newYear) => {
  if (!newYear) return;
  selectedYear.value = newYear;
  await fetchChartData(newYear.id);
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
const handleChartClick = async (params) => {
  if (params.componentType === 'xAxis') {
    const year = parseInt(params.value, 10);
    selectedYearName.value = year;
    
    try {
      const res = await axios.get(`YearIndicators?year=${year}`, config.value);
      if (response(res) === "success") {
        DialogyearData.value = res.data.data;
        dialogVisible.value = true;
      }
    } catch (error) {
      console.error('Error fetching year indicators:', error);
    }
  } else if (params && params.name) {
    const year = parseInt(params.name, 10);
    selectedYearName.value = year;
    
    try {
      const res = await axios.get(`YearIndicators?year=${year}`, config.value);
      if (response(res) === "success") {
        DialogyearData.value = res.data.data;
        dialogVisible.value = true;
      }
    } catch (error) {
      console.error('Error fetching year indicators:', error);
    }
  }
};

// Handle year label click
const handleYearLabelClick = async (year) => {
  const yearNum = parseInt(year, 10);
  selectedYearName.value = yearNum;
  
  try {
    const res = await axios.get(`YearIndicators?year=${yearNum}`, config.value);
    if (response(res) === "success") {
      DialogyearData.value = res.data.data;
      dialogVisible.value = true;
    }
  } catch (error) {
    console.error('Error fetching year indicators:', error);
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
    show: false,
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

// Keep the existing yearlyData for dialog
const yearlyData = {
  2018: {
    sales: 85,
    market: 90,
    repeatRate: 10
  },
  2019: {
    sales: 91,
    market: 110,
    repeatRate: 15
  },
  2020: {
    sales: 91,
    market: 110,
    repeatRate: 15
  },
  2023: {
    sales: 102,
    market: 140,
    repeatRate: 5
  },
  2024: {
    sales: 108,
    market: 105,
    repeatRate: 20
  },
  2025: {
    sales: 115,
    market: 150,
    repeatRate: 18
  }
};

// Year text from API
const YearText = ref('');

// Fetch year text from API
const fetchGrowthReport = async () => {
  try {
    const res = await axios.get('GetGrowthReport', config.value);
    if (response(res) === "success") {
      YearText.value = res.data.data;
    }
  } catch (error) {
    console.error('Error fetching growth report:', error);
  }
};

onMounted(async () => {
  const initialYear = years.value[0];
  selectedYear.value = initialYear;
  await fetchChartData(initialYear.id);
  await fetchGrowthReport(); // Fetch the report text
  dataReady.value = true;

  if (chart.value && chart.value.chart) {
    chart.value.chart.on('click', handleChartClick);
  }
});
</script>

<style lang="scss" scoped>
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

.year-text {
  margin-inline-start: 20px;
  margin-top: 30px;
  h5 {
    color: #666;
    font-size: 1rem;
    line-height: 1.5;
  }
}
</style>
