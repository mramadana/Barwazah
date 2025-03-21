<template>
  <div>
    <div class="skeleton-chart" v-if="loading">
      <div class="skeleton-bars">
        <div class="d-flex align-items-center gap-3 justify-content-end">
          <Skeleton width="5rem" height=".5rem"></Skeleton>
          <div class="skeleton-bar" style="width: 80%;"></div>
        </div>
        <div class="d-flex align-items-center gap-3 justify-content-end">
          <Skeleton width="5rem" height=".5rem"></Skeleton>
          <div class="skeleton-bar" style="width: 60%;"></div>
        </div>
        <div class="d-flex align-items-center gap-3 justify-content-end">
          <Skeleton width="5rem" height=".5rem"></Skeleton>
          <div class="skeleton-bar" style="width: 40%;"></div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <div v-if="dataReady && !loading" class="w-100">
        <VChart ref="chart" :option="option" style="height: 300px; width: 100%; display: block" />
      </div>
    </ClientOnly>
  </div>
</template>
  
<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GraphicComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
  GraphicComponent
]);

const props = defineProps({
  dataReady: Boolean,
  productsData: {
    type: Object,
    required: true,
    default: () => ({
      labels: [],
      series: [],
      colors: {
        bar: '#f75c5c',
        text: '#ffffff'
      }
    })
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const chart = ref(null);
const localDataReady = ref(false);

const getRichAndLabels = () => {
  const rich = {};
  const yAxisLabels = props.productsData.labels.map((item) => {
    const key = `img_${item.id}`;
    if (item.image) {
      rich[key] = {
        height: 20,
        width: 20,
        backgroundColor: {
          image: item.image,
        },
        align: 'center',
        textAlign: 'center',
        padding: [0, 10, 0, 0],
      };
    }
    return item.text;
  });
  return { rich, yAxisLabels };
};

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter: (params) => {
      const value = params[0]?.value || 0;
      return `${value}%`;
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '20%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    show: false,
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
  },
  yAxis: {
    type: 'category',
    data: [],
    position: 'right',
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      fontSize: 14,
      color: '#333',
      padding: [0, 15, 0, 0],
      formatter: (value, index) => {
        const item = props.productsData.labels[index];
        return item?.image ? `{img_${item.id}|} ${value}` : value;
      },
      rich: {},
    },
  },
  series: [
    {
      type: 'bar',
      data: [],
      barWidth: '80%',
      itemStyle: {
        borderRadius: [10, 0, 0, 10],
        color: props.productsData.colors.bar,
      },
      label: {
        show: true,
        position: 'insideLeft',
        formatter: '{c}%',
        offset: [10, 5],
        textStyle: {
          fontSize: 14,
          color: props.productsData.colors.text,
        },
      },
    },
  ],
});

const updateChartData = async () => {
  if (!props.productsData?.labels?.length) return;

  const { rich, yAxisLabels } = getRichAndLabels();
  option.value.yAxis.data = yAxisLabels;
  option.value.yAxis.axisLabel.rich = rich;
  option.value.series[0].data = props.productsData.series;

  await nextTick();
  if (chart.value?.chart) {
    chart.value.chart.clear();
    chart.value.chart.setOption(option.value, true);
  }
};

watch(() => props.productsData, async () => {
  if (props.dataReady && !props.loading) {
    await updateChartData();
  }
}, { deep: true, immediate: true });

watch(() => props.dataReady, async (newVal) => {
  if (newVal && !props.loading) {
    await updateChartData();
  }
});

onMounted(async () => {
  if (props.dataReady && !props.loading) {
    await updateChartData();
  }
});
</script>

<style scoped>
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
  background-color: #f75c5c;
  border-radius: 4px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>