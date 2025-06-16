<template>
  <div v-if="dataReady" class="w-100">
    <VChart ref="chart" :option="option" style="height: 300px; width: 100%; display: block" />
  </div>
</template>

<script setup>
import * as echarts from 'echarts/core';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, TooltipComponent, BarChart, CanvasRenderer]);

const dataReady = ref(false);
const chart = ref(null);
const { token } = storeToRefs(useAuthStore());
const axios = useApi();
const { response } = responseApi();
const visitorsData = ref({
  data: []
});

const config = computed(() => ({
  headers: { Authorization: `Bearer ${token.value}` }
}));

const option = computed(() => ({
  grid: {
    left: '5%',
    right: '5%',
    top: '10%',
    bottom: '10%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: visitorsData.value.data?.map(item => item.name) || [],
    axisLabel: {
      interval: 0,
      rotate: -45,
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} %',
    },
    // hidden y axis
    show: false,
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}%',
  },
  series: [
    {
      data: visitorsData.value.data?.map(item => item.value) || [],
      type: 'bar',
      barWidth: '50%',
      showBackground: true, // أضف هذه الخاصية لعرض خلفية الأعمدة
      backgroundStyle: {
        color: '#EEF6FE', // لون الخلفية
        borderRadius: [5, 5, 0, 0],
      },
      
      itemStyle: {
        color: '#E5254A',
        borderRadius: [5, 5, 0, 0],
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
        fontSize: 12,
        color: '#000',
      },
    },
  ],
}));

const getVisitors = async () => {
  try {
    const res = await axios.get('VisitorMovement', config.value);
    if (response(res) === "success") {
      visitorsData.value = res.data;
      console.log(visitorsData.value, "visitorsData");
      if (chart.value?.chart) {
        chart.value.chart.setOption(option.value);
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    dataReady.value = true;
  }
};

onMounted(getVisitors);
</script>
