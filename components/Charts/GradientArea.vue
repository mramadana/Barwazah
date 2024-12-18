<template>
    <div v-if="dataReady" style="width: 100%; height: 350px;">
      <div class="diamond"></div>

      <div class="radio-container">

        <input type="radio" id="radio1" name="slider">
        <label for="radio1" class="main-cl" >للسوق</label>
        
        <input type="radio" id="radio2" name="slider" checked>
        <label for="radio2">الكل</label> 
        
        <input type="radio" id="radio3" name="slider">
        <label for="radio3" class="cl-red">للمتجر</label>

        <div class="marker"></div>
      </div>
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
        [t('Global.females')]: true,
        [t('Global.males')]: true,  
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
        name: t('Global.females'),
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
        name: t('Global.males'),
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
          option.value.legend.selected[t('Global.females')] = true;
          option.value.legend.selected[t('Global.males')] = true;
          break;
        case 1: // Males Only
          option.value.legend.selected[t('Global.females')] = false;
          option.value.legend.selected[t('Global.males')] = true;
          break;
        case 2: // Females Only
          option.value.legend.selected[t('Global.females')] = true;
          option.value.legend.selected[t('Global.males')] = false;
          break;
      }
      chartInstance.setOption(option.value, true);
    }
  };
  </script>
  
  <style>


.radio-container {
  position: relative;
  width: 500px;
  background-color: #f4f9fd;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.radio-container label {
  position: relative;
  z-index: 2;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
}

.marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  border-radius: 15px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #e63950, #1e1a3c); 
  transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1); 
}

.radio-container input[type="radio"] {
  display: none; 
}


#radio1:checked ~ .marker {
  left: calc(100% - 40px);
}

#radio2:checked ~ .marker {
  left: 50%; 
}

#radio3:checked ~ .marker {
  left: calc(10% - 10px); /* تحريك إلى اليمين */
}

/* تغيير لون النص عند التحديد */
.radio-container input[type="radio"]:checked + label {
  color: white !important;
}

</style>