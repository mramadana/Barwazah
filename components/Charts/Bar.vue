<template>
    <div>
        <div class="bar-chart position-relative">
            <NExample
              id="bar"
              title="Bar Chart"
              desc="SSR + client-side lazy loading"
              style="height: 500px; width: 100%; display: block"
            >
            <div class="custom-btns">
                <button ref="toggleVisibility">Toggle Females Visibility</button>
                <button ref="otherToggleVisibility">Toggle Males Visibility</button>
            </div>
              <VChart ref="chart" :option="option" />
            </NExample>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { LegendComponent, TooltipComponent, GridComponent, DatasetComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  
  echarts.use([
    BarChart,
    LegendComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    CanvasRenderer,
  ]);
  
  const chart = ref(null);
  const toggleVisibility = ref(null);
  const otherToggleVisibility = ref(null);
  
 
  const option = ref({
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    legend: {
      top: '95%',
      itemGap: 50,
      selected: {
        [t('Global.females')]: true,
        [t('Global.males')]: true,  
      },
    },
    tooltip: {},
    dataset: {
      source: [
        ['label 1', 43.3, 85.8],
        ['label 2', 83.1, 73.4],
        ['label 3', 86.4, 65.2],
        ['label 4', 72.4, 53.9],
        ['label 5', 43.3, 85.8],
        ['Ramadan', 83.1, 73.4],
      ],
    },
    xAxis: { type: 'category' },
    yAxis: { show: false },
    series: [
      {
        name: t('Global.females'),
        type: 'bar',
        barGap: '0%',
        barWidth: 20,
        itemStyle: { color: '#013660' },
      },
      {
        name: t('Global.males'),
        type: 'bar',
        barGap: '0%',
        barWidth: 20,
        itemStyle: { color: '#e5254a' },
      },
    ],
    itemStyle: { borderRadius: 5 },
  });
  

  function toggleFemalesVisibility() {
    const chartInstance = chart.value?.chart; 
    if (!chartInstance) return;
  
    const legendSelected = option.value.legend.selected[t('Global.females')];
    option.value.legend.selected[t('Global.females')] = !legendSelected;
  
    chartInstance.setOption(option.value, true); 
  }
  
  // تبديل رؤية الذكور
  function toggleMalesVisibility() {
    const chartInstance = chart.value?.chart; 
    if (!chartInstance) return;
  
    const legendSelected = option.value.legend.selected[t('Global.males')];
    option.value.legend.selected[t('Global.males')] = !legendSelected;
  
    chartInstance.setOption(option.value, true); 
  }
  
  
  onMounted(async () => {

    await nextTick();
  
    if (toggleVisibility.value) {
      toggleVisibility.value.addEventListener('click', toggleFemalesVisibility);
    }
  
    if (otherToggleVisibility.value) {
      otherToggleVisibility.value.addEventListener('click', toggleMalesVisibility);
    }
  });
  </script>
  