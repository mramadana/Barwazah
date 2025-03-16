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
    <!-- select -->
    <div class="d-flex align-items-center justify-content-center gap-4">
        <div class="with_cun_select custom-select" v-if="showSelect">
            <div class="flex justify-content-center dropdown_card">
                <Dropdown 
                    v-model="rentalType" 
                    @change="handleRentalTypeChange(rentalType)" 
                    :options="rentals" 
                    optionLabel="name" 
                    :placeholder="placeholderText" 
                    class="custum-dropdown" 
                />
            </div>
        </div>
    </div>
    <ClientOnly>
      <div v-show="dataReady && !loading" class="w-100 d-flex justify-content-center">
        <VChart ref="chart" :option="option" style="height: 300px; width: 100%; display: block" :style="{ height: chartHeight }" />
      </div>
    </ClientOnly>
    <div v-if="showSelect" class="text-end">
      <button 
        @click="showAll = !showAll" class="toggle-button">
        {{ showAll ? 'عرض أقل' : 'عرض المزيد' }}
        <i class="fas fa-chevron-down icon" :class="{ active: showAll }"></i>
      </button>
    </div>
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

const showAll = ref(false);

const displayedLabels = computed(() => {
  return props.showSelect && !showAll.value 
    ? props.productsData.labels.slice(0, 4) 
    : props.productsData.labels;
});

const displayedSeries = computed(() => {
  return props.showSelect && !showAll.value 
    ? props.productsData.series.slice(0, 4) 
    : props.productsData.series;
});
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
  rentalNames: {
        type: Object,
        required: true
    },
    placeholderText: {
        type: String,
        // default: 'اختر'
    },

    showSelect: {
      type: Boolean,
      default: false
    },

    chartHeight: {
      type: String,
      default: '300px'
    }
});

const emit = defineEmits(['filter-change']);

const handleRentalTypeChange = (selected) => {
  const filterValue = selected.id;
  emit('filter-change', filterValue);
};
const rentalType = ref(null);
  
const rentals = computed(() => [
    { name: props?.rentalNames?.males, id: 1 },
    { name: props?.rentalNames?.females, id: 2 },
]);

const chart = ref(null);
const localDataReady = ref(false);

const getRichAndLabels = () => {
  const rich = {};
  const yAxisLabels = displayedLabels.value.map((item) => {
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
      color: '#013660',
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
      barMaxWidth: 32,
      // barCategoryGap: '30%',
      itemStyle: {
        borderRadius: [10, 0, 0, 10],
        color: props.productsData.colors.bar,
      },
      label: {
        show: true,
        position: 'insideLeft',
        formatter: '{c}%',
        offset: [10, 3],
        textStyle: {
          fontSize: 14,
          color: props.productsData.colors.text,
        },
      },
    },
  ],
});

// const updateChartData = async () => {
//   if (!props.productsData?.labels?.length) return;

//   const { rich, yAxisLabels } = getRichAndLabels();
//   option.value.yAxis.data = yAxisLabels;
//   option.value.yAxis.axisLabel.rich = rich;
//   option.value.series[0].data = props.productsData.series;

//   await nextTick();
//   if (chart.value?.chart) {
//     chart.value.chart.clear();
//     chart.value.chart.setOption(option.value, true);
//   }
// };

const updateChartData = async () => {
  if (!displayedLabels.value?.length) return;

  const { rich, yAxisLabels } = getRichAndLabels();
  option.value.yAxis.data = yAxisLabels;
  option.value.yAxis.axisLabel.rich = rich;
  option.value.series[0].data = displayedSeries.value; // استخدام displayedSeries

  await nextTick();
  if (chart.value?.chart) {
    chart.value.chart.clear();
    chart.value.chart.setOption(option.value, true);
    resizeChart();
    console.log('chart resized');
  }
};

watch([() => props.productsData, () => showAll.value], async () => {
  if (props.dataReady && !props.loading) {
    if (option.value && option.value.series[0] && props.productsData?.colors) {
      option.value.series[0].itemStyle.color = props.productsData.colors.bar;
    }
    await updateChartData();
  }
}, { deep: true, immediate: true });

// watch(() => props.productsData, async () => {
//   if (props.dataReady && !props.loading) {
//     if (option.value && option.value.series[0] && props.productsData?.colors && props.showSelect) {
//       option.value.series[0].itemStyle.color = props.productsData.colors.bar;
//     }
//     await updateChartData();
//   }
// }, { deep: true, immediate: true });

watch(() => props.dataReady, async (newVal) => {
  if (newVal && !props.loading) {
    await updateChartData();
  }
});

// عشان اظبط الارتفاع

watch(() => props.chartHeight, () => {
  resizeChart();
});

const resizeChart = () => {
  if (chart.value?.chart) {
    setTimeout(() => {
      chart.value.chart.resize();
    }, 100);
  }
};

import { useRoute } from 'vue-router';
const route = useRoute();

watch(() => route.path, () => {
  nextTick(() => {
    resizeChart();
  });
});


onMounted(async () => {
  if (props.dataReady && !props.loading) {
    await updateChartData();
    resizeChart();
  }
});
</script>

<style lang="scss" scoped>
.toggle-button {
  background: #E5254A;
  color: white;
  border: none;
  padding: 8px 5px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  margin-top: 15px;
  width: 140px;
  .icon {
    font-size: 12px;
    margin-inline-start: 10px;
    transition: all 0.3s ease;
    &.active {
      transform: rotate(180deg);
    }
  }
}

.echarts-bar {
  transition: all 0.3s ease;
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