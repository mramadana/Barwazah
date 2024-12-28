<template>
  <div v-if="dataReady" class="w-100">
    <div class="radio-container">
      <input type="radio" id="radio1" name="slider" value="1" @change="handleRentalTypeChange">
      <label for="radio1" class="main-cl">للمتجر</label>

      <input type="radio" id="radio2" name="slider" value="0" @change="handleRentalTypeChange" checked>
      <label for="radio2">الكل</label>

      <input type="radio" id="radio3" name="slider" value="2" @change="handleRentalTypeChange">
      <label for="radio3" class="cl-red">للسوق</label>

      <div class="marker"></div>
    </div>

    <div class="d-flex align-items-center justify-content-center gap-4">
      <label class="label mb-0">اختر الشهر</label>
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

    <VChart ref="chart" :option="option" style="height: 250px; width: 100%; display: block" />
  </div>
</template>

<script setup>

import { useI18n } from 'vue-i18n';
const echarts = await import('echarts/core');

const props = defineProps({
  initialMonths: { type: Array, required: true },
  initialAllMonths: { type: Array, required: true },
  initialOption: { type: Object, required: true },
  initialMonthlyData: { type: Object, required: true },
  // first data render
  initialSeriesData: { type: Array, required: true },
});

const emit = defineEmits(['rental-type-change']);

const { t } = useI18n();

// State
const dataReady = ref(false);
const selectedMonth = ref({ id: 0 });
const months = ref(props.initialMonths);
const Allmonths = ref(props.initialAllMonths);
// const option = ref(props.initialOption);
const manualMonthlyData = ref(props.initialMonthlyData);

// Ref for the chart instance
const chart = ref(null);

const handleMonthChange = () => {
  // Validate selected month
  if (!selectedMonth.value || typeof selectedMonth.value.id === "undefined") {
    console.error("Invalid selected month: ", selectedMonth.value);
    return;
  }

  const monthId = selectedMonth.value.id;

  if (monthId === 0) {
    // Handle "عرض كل البيانات" (Show All Data)
    option.value.xAxis.data = Allmonths.value;
    option.value.series[0].data = props.initialSeriesData[0] || [];
    option.value.series[1].data = props.initialSeriesData[1] || [];
  } else {
    // Retrieve the selected month data
    const selectedMonthData = months.value.find((month) => month.id === monthId);

    if (!selectedMonthData) {
      console.error("Invalid month ID: ", monthId);
      return;
    }

    const days = selectedMonthData.days;
    const dailyLabels = Array.from({ length: days }, (_, i) => `اليوم ${i + 1}`);

    // Update xAxis configuration
    option.value.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: dailyLabels,
      axisLabel: {
        interval: 0, // Show all days
        rotate: 45,  // Rotate labels for better readability
      },
    };

    // Check for manual data for the month
    const customData = manualMonthlyData.value[monthId];
    if (customData) {
      
      // Use manual data if available
      option.value.series[0].data = customData.store; // Females data
      option.value.series[1].data = customData.market; // Males data
      console.log("Custom Data:", customData.store, customData.market);
    } else {
      // Generate random data if manual data is unavailable
      option.value.series[0].data = generateDailyData(days); // Females
      option.value.series[1].data = generateDailyData(days); // Males
    }
  }

  // Update the chart instance with the new options
  if (chart.value?.chart) {
    chart.value.chart.setOption(option.value, true);
  } else {
    console.error("Chart instance is not ready.");
  }
};

const option = ref({
    legend: {
      top: '5%',
      show: false,
      selected: {
          [t('Global.females')]: true,
          [t('Global.males')]: true,  
        },
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
    data: [],
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
      data: [],
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
      data: [],
    },
  ],
})

// فى حالة ان method ها تتعمل ف الـ parent ، شغل دى 

// const handleRentalTypeChange = (event) => {
//   const rentalType = Number(event.target.value); // Get the selected value
//   console.log('Rental Type Change in Child:', rentalType); // Debugging output

//   // Emit the event to the parent
//   emit('rental-type-change', rentalType);
// };

// Initialize data

// فى حالة ان method ها تتعمل ف الـ child ، شغل دى
const handleRentalTypeChange = (event) => {
    console.log('Rental Type Change:', event.target.value); // Check value
    const selectedRental = { id: Number(event.target.value) };
  
    if (selectedRental) {
      const chartInstance = chart.value?.chart;
      if (!chartInstance) return;
  
      switch (selectedRental.id) {
        case 0: // Show All (both males and females)
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



onBeforeMount(() => {
  dataReady.value = true;
  option.value.xAxis.data = Allmonths.value;
  // Use series data from props
  option.value.series[0].data = props.initialSeriesData[0] || [];
  option.value.series[1].data = props.initialSeriesData[1] || [];
});


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
  margin: 0 auto 35px;
  max-width: 100%;
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