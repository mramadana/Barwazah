<template>
    <div>
        <div class="bar-chart position-relative">
            <NExample
              id="bar"
              title="Bar Chart"
              desc="SSR + client-side lazy loading"
              style="height: 300px; width: 100%; display: block"
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
  const echarts = await import('echarts/core');
  import { LegendComponent, TooltipComponent, GridComponent, DatasetComponent } from 'echarts/components';
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  
  echarts.use([
    LegendComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
  ]);
  
    // Define props
  const props = defineProps({
    sourceData: { type: Array, required: true }, // Source data passed from the parent
  });
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
      top: '92%',
      itemGap: 50,
      selected: {
        [t('Global.females')]: true,
        [t('Global.males')]: true,  
      },
    },
    tooltip: {},
    dataset: {
      source: props.sourceData
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
        showBackground: true,
        color: '#a9dfd8',
        
      },
      {
        name: t('Global.males'),
        type: 'bar',
        barGap: '0%',
        barWidth: 20,
        itemStyle: { color: '#e5254a' },
        showBackground: true,
        color: '#a9dfd8',
        
        // backgroundStyle: {
        //     color: 'rgba(43, 43, 54, 1)',
        // },
      },
      
    ],
    itemStyle: { borderRadius: [5, 5, 0, 0] },
  });
  

  function toggleFemalesVisibility() {
    const chartInstance = chart.value?.chart; 
    if (!chartInstance) return;
  
    const legendSelected = option.value.legend.selected[t('Global.females')];
    option.value.legend.selected[t('Global.females')] = false;
    option.value.legend.selected[t('Global.males')] = true;
  
    chartInstance.setOption(option.value, true); 
  }
  
  function toggleMalesVisibility() {
    const chartInstance = chart.value?.chart; 
    if (!chartInstance) return;
  
    const legendSelected = option.value.legend.selected[t('Global.males')];
    option.value.legend.selected[t('Global.males')] = false;
    option.value.legend.selected[t('Global.females')] = true;
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
  