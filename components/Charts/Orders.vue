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
        </div>

        <VChart ref="chart" class="custom-chart" :option="option" style="height: 300px; width: 100%; display: block" />
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
  apiEndpoint: { type: String, required: true }
});
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
    axisPointer: { type: 'none', label: { backgroundColor: '#6a7985' } },
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
      lineStyle: { width: 2, color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(247, 92, 92, 0.6)' },
        { offset: 1, color: 'rgba(247, 92, 92, 0.2)' },
      ]), },
      itemStyle: { color: '#E5254A' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(247, 92, 92, 0.6)' },
          { offset: 1, color: 'rgba(247, 92, 92, 0.2)' },
        ]),
      },
      data: []
    }
  ]
});

// دالة جلب البيانات من API
const getPeakTimeData = async (monthId = 0) => {
  loading.value = true;
  try {
    const res = await axios.get(`${props.apiEndpoint}${monthId ? `?filterByMonth=${monthId}` : ''}`, config.value);
    console.log('API Response:', res.data); // طباعة البيانات المرجعة

    if (response(res) === "success") {
      // التحقق من وجود البيانات
      if (!res.data?.data) {
        console.log('No data found in response');
        option.value.xAxis.data = [];
        option.value.series[0].data = [];
        return;
      }

      const data = res.data.data;
      console.log('Chart Data 222:', data); // طباعة بيانات الرسم البياني
      chartData.value = data;

      try {
        // تحديث البيانات في الرسم البياني
        if (monthId === 0) {
          // عرض البيانات الشهرية
          option.value.xAxis.data = data.map(item => item.month);
          option.value.series[0].data = data.map(item => item.value);
        } else {
          // عرض البيانات اليومية للشهر المحدد
          option.value.xAxis.data = data.map(item => `اليوم ${item.month}`);
          option.value.series[0].data = data.map(item => item.value);
        }

        // تحديث الرسم البياني
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
    // تصفير البيانات في حالة الخطأ
    option.value.xAxis.data = [];
    option.value.series[0].data = [];
  } finally {
    loading.value = false;
  }
};

// معالج تغيير الشهر
const handleMonthChange = async (event) => {
  const monthId = event.value?.id;
  if (monthId !== undefined) {
    await getPeakTimeData(monthId);
  }
};

// تحميل البيانات الأولية عند تحميل المكون
onMounted(async () => {
  selectedMonth.value = months.value[0];
  await getPeakTimeData();
});

// مراقبة التغييرات في البيانات
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