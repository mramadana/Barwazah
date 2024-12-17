<template>
    <div v-if="dataReady" style="width: 100%; height: 400px;">
      <div class="d-flex align-items-center justify-content-center gap-4">
        <label class="label mb-0">
          {{$t('Global.gender')}}
        </label>
        <div class="with_cun_select custom-select">
          <div class="flex justify-content-center dropdown_card">
            <Dropdown 
              v-model="rentalType" 
              @change="handleRentalTypeChange" 
              :options="rentals" 
              optionLabel="name" 
              :placeholder="$t('Global.show_all')" 
              class="w-full md:w-14rem custum-dropdown" 
            />
          </div>
        </div>
      </div>
      <VChart ref="chart" :option="option" style="height: 100%; width: 100%;" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
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
  const rentalType = ref(null);
  const rentals = ref([
    { name: t('Global.show_all'), id: 0 },
    { name: t('Global.males'), id: 1 },
    { name: t('Global.females'), id: 2 },
  ]);
  
  // Chart instance and data
  const chart = ref(null);
  setTimeout(() => {
    dataReady.value = true;
  }, 10);
  
  const option = ref({
    legend: {
      top: '5%',
      selected: {
        'المجموعة 1': true, // Females
        'المجموعة 2': true, // Males
      },

      show: false,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
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
      data: ['مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر', 'يناير', 'فبراير', 'مارس'],
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        name: 'المجموعة 1',
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
        data: [40, 50, 60, 70, 65, 75, 85, 80, 90, 95, 110],
      },
      {
        name: 'المجموعة 2',
        type: 'line',
        smooth: true,
        symbol: 'square',
        symbolSize: 7,
        showSymbol: true,
        lineStyle: { width: 2, color: '#f75c5c' },
        itemStyle: { color: '#e5254a' },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(247, 92, 92, 0.6)' },
            { offset: 1, color: 'rgba(247, 92, 92, 0.2)' },
          ]),
        },
        data: [30, 40, 55, 50, 55, 60, 75, 72, 78, 82, 90],
      },
    ],
  });
  
  // Function to toggle series visibility
  const handleRentalTypeChange = (event) => {
    const selectedRental = event.value;
  
    if (selectedRental) {
      const chartInstance = chart.value?.chart;
      if (!chartInstance) return;
  
      switch (selectedRental.id) {
        case 0: // Show All
          option.value.legend.selected['المجموعة 1'] = true;
          option.value.legend.selected['المجموعة 2'] = true;
          break;
        case 1: // Males Only
          option.value.legend.selected['المجموعة 1'] = false;
          option.value.legend.selected['المجموعة 2'] = true;
          break;
        case 2: // Females Only
          option.value.legend.selected['المجموعة 1'] = true;
          option.value.legend.selected['المجموعة 2'] = false;
          break;
      }
      chartInstance.setOption(option.value, true);
    }
  };
  </script>
  