<template>
  <div>
    <ChartsGradient_test
      :initialMonths="months"
      :initialAllMonths="allMonths"
      :initialMonthlyData="manualMonthlyData"
      :initialSeriesData="seriesData"
      :initialOption="chartOptions"
      :loading="loading"
      @rental_change="handleMonthChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { storeToRefs } from 'pinia';

// Register ECharts components
echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]);

const allMonths = ref(['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']);
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

const loading = ref(true);
const backendData = ref(null);
const seriesData = ref([[], []]);
const manualMonthlyData = ref({});
const axios = useApi();
const { response } = responseApi();
const { token } = storeToRefs(useAuthStore());

const config = computed(() => ({
  headers: { Authorization: `Bearer ${token.value}` }
}));

// تحميل البيانات من API
const getData = async (monthId = 0) => {
  loading.value = true;
  try {
    console.log(`Fetching data for monthId: ${monthId}`);
    const res = await axios.get(`AverageShoppingCartSize?type=0&filterByMonth=${monthId}`, config.value);
    if (response(res) === "success") {
      const data = res.data.data;
      if (monthId === 0) {
        seriesData.value = [
          data.marketData.map(item => item.value),
          data.storeDataData.map(item => item.value)
        ];
      } else {
        const dailyData = {
          market: data.marketData.map(item => item.value),
          store: data.storeDataData.map(item => item.value)
        };
        manualMonthlyData.value[monthId] = dailyData;
        console.log("Updated manualMonthlyData:", manualMonthlyData.value);
      }
      backendData.value = data;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  } finally {
    loading.value = false;
  }
};

const handleMonthChange = async (monthId) => {
  console.log(`Handling month change for monthId: ${monthId}`);
  await getData(monthId);
  console.log("manualMonthlyData.value after update:", manualMonthlyData.value);
};


onMounted(async () => {
  await getData(0);
});
</script>
