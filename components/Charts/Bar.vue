<template>
    <div>
        <div class="bar-chart position-relative">
            <NExample
              id="bar"
              title="Bar Chart"
              desc="SSR + client-side lazy loading"
              style="height: 400px; width: 100%; display: block"
            >

            <div class="d-flex align-items-center justify-content-center gap-4">
                <label class="label mb-0">
                    {{$t('Global.gender')}}
                </label>
                <div class="with_cun_select custom-select">
                    <div class="flex justify-content-center dropdown_card">
                        <Dropdown v-model="rentalType" @change="handleRentalTypeChange" :options="rentals" optionLabel="name" :placeholder="$t('Global.show_all')" class="w-full md:w-14rem custum-dropdown" />
                    </div>
                </div>
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
  const rentalType = ref(null);
  
  const rentals = ref([
    { name: t('Global.show_all'), id: 0 },
    { name: t('Global.males'), id: 1 },
    { name: t('Global.females'), id: 2 },
  ])
 
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
  
  const showAllData = () => {
    option.value.legend.selected[t('Global.females')] = true;
    option.value.legend.selected[t('Global.males')] = true;
  };

  const handleRentalTypeChange = (event) => {
  const selectedRental = event.value;

  if (selectedRental) {
    switch (selectedRental.id) {
      case 0:
        showAllData();
        break;
      case 1:
        toggleMalesVisibility();
        break;
      case 2:
        toggleFemalesVisibility();
        break;
    }
  }
};
  
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
  