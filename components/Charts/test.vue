<!-- <template>

  
    <div v-if="dataReady" style="width: 100%; height: 350px;">

      <div class="radio-container mb-4">
      <input type="radio" id="radio1" name="slider" value="1" @change="handleRentalTypeChange">
      <label for="radio1" class="main-cl">للسوق</label>
      
      <input type="radio" id="radio2" name="slider" value="0" @change="handleRentalTypeChange" checked>
      <label for="radio2">الكل</label>
      
      <input type="radio" id="radio3" name="slider" value="2" @change="handleRentalTypeChange">
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
  // const handleRentalTypeChange = (event) => {
  //   const selectedRental = event.value;
  
  //   if (selectedRental) {
  //     const chartInstance = chart.value?.chart;
  //     if (!chartInstance) return;
  
  //     switch (selectedRental.id) {
  //       case 0: // Show All
  //         option.value.legend.selected[t('Global.females')] = true;
  //         option.value.legend.selected[t('Global.males')] = true;
  //         break;
  //       case 1: // Males Only
  //         option.value.legend.selected[t('Global.females')] = false;
  //         option.value.legend.selected[t('Global.males')] = true;
  //         break;
  //       case 2: // Females Only
  //         option.value.legend.selected[t('Global.females')] = true;
  //         option.value.legend.selected[t('Global.males')] = false;
  //         break;
  //     }
  //     chartInstance.setOption(option.value, true);
  //   }
  // };

  const handleRentalTypeChange = (event) => {
  const selectedRental = { id: Number(event.target.value) };

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

</style> -->
  

<template>
    <div v-if="dataReady" style="width: 100%; height: 350px;">
      <div class="radio-container mb-4">
        <input type="radio" id="radio1" name="slider" value="1" @change="handleRentalTypeChange">
        <label for="radio1" class="main-cl">للسوق</label>
  
        <input type="radio" id="radio2" name="slider" value="0" @change="handleRentalTypeChange" checked>
        <label for="radio2">الكل</label>
  
        <input type="radio" id="radio3" name="slider" value="2" @change="handleRentalTypeChange">
        <label for="radio3" class="cl-red">للمتجر</label>
  
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
  
      <VChart ref="chart" :option="option" style="height: 100%; width: 100%;" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const echarts = await import('echarts/core');
  import { LineChart } from 'echarts/charts';
  import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  
  echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]);
  
  // Data readiness flag
  const dataReady = ref(false);
  
  // Dropdown selections
  const selectedMonth = ref(0); // Default: "الكل"
  const months = ref([
    { name: 'عرض الكل', id: 0 },
    { name: 'يناير', id: 1, days: 31 },
    { name: 'فبراير', id: 2, days: 28 }, // افتراضياً فبراير 28 يوماً
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
  
  // Chart instance and data
  const chart = ref(null);
  setTimeout(() => {
    dataReady.value = true;
  }, 10);
  
  // Data for the chart
  const option = ref({
    legend: {
      top: '5%',
      show: true,
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
      data: [], // Dynamically updated
      axisLabel: {
        interval: 0, // Show all days
        rotate: 45, // Rotate labels to avoid overlap
      },
    },
    yAxis: {
      type: 'value',
      show: true,
    },
    series: [
      {
        name: 'الإناث',
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
        data: [], // Dynamically updated
      },
      {
        name: 'الذكور',
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
        data: [], // Dynamically updated
      },
    ],
  });
  
  // Generate random data for demonstration purposes
  const generateDailyData = (days) => Array.from({ length: days }, () => Math.floor(Math.random() * 100) + 10);
  
  // Function to update chart based on selected month
  const handleMonthChange = () => {
    if (!selectedMonth.value || typeof selectedMonth.value.id === "undefined") {
      console.error("Invalid selected month: ", selectedMonth.value);
      return;
    }
  
    const monthId = selectedMonth.value.id;
  
    if (monthId === 0) {
      // Show all data (example: months data)
      option.value.xAxis.data = ['مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر', 'يناير', 'فبراير', 'مارس'];
      option.value.series[0].data = [40, 50, 60, 70, 65, 75, 85, 80, 90, 95, 110];
      option.value.series[1].data = [30, 40, 55, 50, 55, 60, 75, 72, 78, 82, 90];
    } else {
      const selectedMonthData = months.value.find((month) => month.id === monthId);
      if (!selectedMonthData) {
        console.error("Invalid month ID: ", monthId);
        return;
      }
  
      const days = selectedMonthData.days;
      const dailyLabels = Array.from({ length: days }, (_, i) => `اليوم ${i + 1}`);
      option.value.xAxis = {
        type: 'category',
        boundaryGap: false,
        data: dailyLabels,
        axisLabel: {
          interval: 0, // Display all days
          rotate: 45, // Rotate text for better visibility
        },
      };
      option.value.series[0].data = generateDailyData(days); // الإناث
      option.value.series[1].data = generateDailyData(days); // الذكور
    }
  
    // Update chart
    if (chart.value && chart.value.chart) {
      chart.value.chart.setOption(option.value, true);
    } else {
      console.error("Chart instance is not ready.");
    }
  };


  </script>
  





































































































  <!-- اخر سكريبت شغال -->

  <!-- <script setup>
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
const selectedMonth = ref(0); // Default: "الكل"
const months = ref([
  { name: 'عرض الكل', id: 0 },
  { name: 'يناير', id: 1, days: 31 },
  { name: 'فبراير', id: 2, days: 28 }, // افتراضياً فبراير 28 يوماً
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

// Chart instance and data
const chart = ref(null);

setTimeout(() => {
  dataReady.value = true;
}, 10);

// Data for the chart
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
    data: [], // Dynamically updated
    axisLabel: {
      interval: 0, // Show all days
      rotate: 45, // Rotate labels to avoid overlap
    },
  },
  yAxis: {
    type: 'value',
    show: true,
  },
  series: [
    {
      name: 'الإناث',
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
      data: [], // Dynamically updated
    },
    {
      name: 'الذكور',
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
      data: [], // Dynamically updated
    },
  ],
});

const manualMonthlyData = {
  1: { 
    female: [10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160], 
    male: [12, 18, 20, 22, 28, 32, 36, 38, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128] 
  }, // بيانات شهر يناير
  2: { 
    female: [30, 25, 20, 35, 40, 45, 50, 55, 60, 65, 70], 
    male: [28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 50] 
  }, // بيانات شهر فبراير
  3: { 
    female: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], 
    male: [38, 42, 48, 52, 58, 62, 66, 70, 74, 78, 82] 
  }, // بيانات شهر مارس
  4: { 
    female: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 
    male: [48, 52, 58, 62, 68, 72, 76, 80, 84, 88, 92] 
  }, // بيانات شهر أبريل
  5: { 
    female: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110], 
    male: [58, 62, 68, 72, 78, 82, 86, 90, 94, 98, 102] 
  }, // بيانات شهر مايو
  6: { 
    female: [70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120], 
    male: [68, 72, 78, 82, 88, 92, 96, 100, 104, 108, 112] 
  }, // بيانات شهر يونيو
  7: { 
    female: [80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130], 
    male: [78, 82, 88, 92, 98, 102, 106, 110, 114, 118, 122] 
  }, // بيانات شهر يوليو
  8: { 
    female: [90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140], 
    male: [88, 92, 98, 102, 108, 112, 116, 120, 124, 128, 132] 
  }, // بيانات شهر أغسطس
  9: { 
    female: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150], 
    male: [98, 102, 108, 112, 118, 122, 126, 130, 134, 138, 142] 
  }, // بيانات شهر سبتمبر
  10: { 
    female: [110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160], 
    male: [108, 112, 118, 122, 128, 132, 136, 140, 144, 148, 152] 
  }, // بيانات شهر أكتوبر
  11: { 
    female: [120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170], 
    male: [118, 122, 128, 132, 138, 142, 146, 150, 154, 158, 162] 
  }, // بيانات شهر نوفمبر
  12: { 
    female: [130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180], 
    male: [128, 132, 138, 142, 148, 152, 156, 160, 164, 168, 172] 
  }, // بيانات شهر ديسمبر
};



// Generate random data for demonstration purposes
const generateDailyData = (days) => Array.from({ length: days }, () => Math.floor(Math.random() * 100) + 10);

// Function to update chart based on selected month

const handleMonthChange = () => {
  if (!selectedMonth.value || typeof selectedMonth.value.id === "undefined") {
    console.error("Invalid selected month: ", selectedMonth.value);
    return;
  }

  const monthId = selectedMonth.value.id;

  if (monthId === 0) {
    // عرض كل البيانات
    option.value.xAxis.data = ['مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر', 'يناير', 'فبراير', 'مارس'];
    option.value.series[0].data = [40, 50, 60, 70, 65, 75, 85, 80, 90, 95, 110];
    option.value.series[1].data = [30, 40, 55, 50, 55, 60, 75, 72, 78, 82, 90];
  } else {
    // البحث عن بيانات الشهر
    const selectedMonthData = months.value.find((month) => month.id === monthId);

    if (!selectedMonthData) {
      console.error("Invalid month ID: ", monthId);
      return;
    }

    const days = selectedMonthData.days;
    const dailyLabels = Array.from({ length: days }, (_, i) => `اليوم ${i + 1}`);
    option.value.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: dailyLabels,
      axisLabel: {
        interval: 0, // عرض جميع الأيام
        rotate: 45,  // تدوير النص لتحسين الرؤية
      },
    };

    // التحقق من وجود بيانات يدوية
    const customData = manualMonthlyData[monthId];
    if (customData) {
      // استخدام البيانات اليدوية
      option.value.series[0].data = customData.female; // بيانات الإناث
      option.value.series[1].data = customData.male;   // بيانات الذكور
      console.log("Custom Data:", customData.female, customData.male);
    } else {
      // في حالة عدم وجود بيانات يدوية، يتم إنشاء بيانات عشوائية
      option.value.series[0].data = generateDailyData(days); // الإناث
      option.value.series[1].data = generateDailyData(days); // الذكور
    }

    // طباعة البيانات لعرضها
    // console.log("Selected Month Data:", selectedMonthData); // بيانات الشهر
    // console.log("Daily Labels:", dailyLabels);             // تسميات الأيام
    // console.log("Female Data:", option.value.series[0].data); // بيانات الإناث
    // console.log("Male Data:", option.value.series[1].data);   // بيانات الذكور
  }

  // تحديث المخطط
  if (chart.value && chart.value.chart) {
    chart.value.chart.setOption(option.value, true);
  } else {
    console.error("Chart instance is not ready.");
  }
  
};






</script> -->
