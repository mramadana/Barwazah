<template>
  <div>
    <div class="skeleton-chart" v-if="loading">
      <div class="skeleton-bars">
        <div class="d-flex align-items-center gap-3 justify-content-end">
          <Skeleton width="5rem" height=".5rem"></Skeleton>
          <div class="skeleton-bar" style="width: 80%;"></div>
        </div>
      </div>
    </div>

    <ClientOnly>
      <div v-if="!loading" class="w-100">
        <div class="d-flex align-items-center justify-content-center gap-4">
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
          <!-- <div class="with_cun_select custom-select">
            <div class="flex justify-content-center dropdown_card">
              <Dropdown 
                v-model="selectedYear" 
                @change="handleYearChange" 
                :options="years" 
                optionLabel="name" 
                placeholder="اختر السنة"
              />
            </div>
          </div> -->
        </div>

        <VChart ref="chart" class="custom-chart" :option="option" style="height: 265px; width: 100%; display: block" />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted, watch } from 'vue';
const axios = useApi();
const { response } = responseApi();
const { token } = storeToRefs(useAuthStore());
const { t } = useI18n();

const props = defineProps({
  apiEndpoint: { type: String, required: true },
  initialYears: {
        type: Array,
        default: () => [
            { name: '2024', id: 2024 },
            { name: '2025', id: 2025 }
        ]
    }
});

const years = ref(props.initialYears);
const selectedYear = ref(years.value[1]);

const handleFilterChange = async () => {
  const monthId = selectedMonth.value?.id || 0;
  const yearId = selectedYear.value?.id || 0;
  await getPeakTimeData(monthId, yearId);
};


const handleMonthChange = async (event) => {
  selectedMonth.value = event.value;
  await handleFilterChange();
};


const handleYearChange = async (event) => {
  selectedYear.value = event.value;
  await handleFilterChange();
};

const echarts = await import('echarts/core');
import { LineChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]);

const config = computed(() => ({
  headers: { Authorization: `Bearer ${token.value}` }
}));

const loading = ref(false);
const selectedMonth = ref(null);
const chart = ref(null);
const chartData = ref([]);

const months = ref([
  { name: 'عرض الكل', id: 0 },
  { name: 'يناير', id: 1, days: 31 },
  { name: 'فبراير', id: 2, days: 28 },
  { name: 'مارس', id: 3, days: 31 },
  { name: 'أبريل', id: 4, days: 30 },
  { name: 'مايو', id: 5, days: 31 },
  { name: 'يونيو', id: 6, days: 30 },
  { name: 'يوليو', id: 7, days: 31 },
  { name: 'أغسطس', id: 8, days: 31 },
  { name: 'سبتمبر', id: 9, days: 30 },
  { name: 'أكتوبر', id: 10, days: 31 },
  { name: 'نوفمبر', id: 11, days: 30 },
  { name: 'ديسمبر', id: 12, days: 31 },
]);

const option = ref({
  tooltip: {
    trigger: 'axis',

    axisPointer: { 
      type: 'cross',
       label: { backgroundColor: '#6a7985' },
       type: 'none'

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
    axisLabel: {
      interval: 0,
      rotate: 45
    }
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [
    {
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
      data: []
    }
  ]
});

const getPeakTimeData = async (monthId = 0 , yearId = 0) => {
  loading.value = true;
  try {
    // const res = await axios.get(`${props.apiEndpoint}${monthId ? `?filterByMonth=${monthId}` : ''}${yearId ? `&year=${yearId}` : ''}`, config.value);
    let apiUrl = props.apiEndpoint;
    const params = [];
    
    if (monthId > 0) params.push(`filterByMonth=${monthId}`);
    if (yearId > 0) params.push(`year=${yearId}`);
    
    if (params.length > 0) {
      apiUrl += `?${params.join('&')}`;
    }

    const res = await axios.get(apiUrl, config.value);

    if (response(res) === "success") {

      if (!res.data?.data?.peakTimeData) {
        option.value.xAxis.data = [];
        option.value.series[0].data = [];
        return;
      }

      const data = res.data.data.peakTimeData;
      chartData.value = data;
      
      try {
        if (monthId === 0) {
          option.value.xAxis.data = data.map(item => item.month);
          option.value.series[0].data = data.map(item => item.value);
        } else {
          option.value.xAxis.data = data.map(item => `اليوم ${item.day}`);
          option.value.series[0].data = data.map(item => item.value);
        }

        if (chart.value?.chart) {
          chart.value.chart.setOption(option.value, true);
        }
      } catch (mapError) {
        console.error('Error mapping data:', mapError);
        console.log('Data structure:', data);
        // في حالة حدوث خطأ، تصفير البيانات
        option.value.xAxis.data = [];
        option.value.series[0].data = [];
      }
    }
  } catch (error) {
    console.error("Error fetching peak time data:", error);

    option.value.xAxis.data = [];
    option.value.series[0].data = [];
  } finally {
    loading.value = false;
  }
};


// const handleMonthChange = async (event) => {
//   const monthId = event.value?.id;
//   if (monthId !== undefined) {
//     await getPeakTimeData(monthId);
//   }
// };


onMounted(async () => {
  // selectedMonth.value = months.value[0];
  await getPeakTimeData();
});


watch(chartData, () => {
  if (chart.value?.chart) {
    chart.value.chart.setOption(option.value, true);
  }
}, { deep: true });
</script>


<style lang="scss">
.custom-chart {
  width: 550px;
  max-width: 100%;
}

.skeleton-chart {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

.skeleton-bars {
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
}

.skeleton-bar {
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 4px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>