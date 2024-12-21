<template>

    <div v-if="dataReady" class="w-100">
  
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
  
      <VChart ref="chart" :option="option" style="height: 300px; width: 100%; display: block" />
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
  const selectedMonth = ref(0); 
  
  const Allmonths = ref(['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'أبريل', 'مارس', 'فبراير', 'يناير']);
  
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
        data: [], // Dynamically updated
      },
    ],
  });
  
  const manualMonthlyData = {
    1: { 
      store: [10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160], 
      market: [12, 18, 20, 22, 28, 32, 36, 38, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128] 
    }, // بيانات شهر يناير
    2: { 
      store: [30, 25, 20, 35, 40, 45, 50, 55, 60, 65, 70], 
      market: [28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 50] 
    }, // بيانات شهر فبراير
    3: { 
      store: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], 
      market: [38, 42, 48, 52, 58, 62, 66, 70, 74, 78, 82] 
    }, // بيانات شهر مارس
    4: { 
      store: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 
      market: [48, 52, 58, 62, 68, 72, 76, 80, 84, 88, 92] 
    }, // بيانات شهر أبريل
    5: { 
      store: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110], 
      market: [58, 62, 68, 72, 78, 82, 86, 90, 94, 98, 102] 
    }, // بيانات شهر مايو
    6: { 
      store: [70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120], 
      market: [68, 72, 78, 82, 88, 92, 96, 100, 104, 108, 112] 
    }, // بيانات شهر يونيو
    7: { 
      store: [80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130], 
      market: [78, 82, 88, 92, 98, 102, 106, 110, 114, 118, 122] 
    }, // بيانات شهر يوليو
    8: { 
      store: [90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140], 
      market: [88, 92, 98, 102, 108, 112, 116, 120, 124, 128, 132] 
    }, // بيانات شهر أغسطس
    9: { 
      store: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150], 
      market: [98, 102, 108, 112, 118, 122, 126, 130, 134, 138, 142] 
    }, // بيانات شهر سبتمبر
    10: { 
      store: [110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160], 
      market: [108, 112, 118, 122, 128, 132, 136, 140, 144, 148, 152] 
    }, // بيانات شهر أكتوبر
    11: { 
      store: [120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170], 
      market: [118, 122, 128, 132, 138, 142, 146, 150, 154, 158, 162] 
    }, // بيانات شهر نوفمبر
    12: { 
      store: [130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180], 
      market: [128, 132, 138, 142, 148, 152, 156, 160, 164, 168, 172] 
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
      option.value.xAxis.data = Allmonths.value;
      option.value.series[0].data = [40, 50, 60, 70, 65, 75, 85, 80, 90, 95, 110, 115];
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
        option.value.series[0].data = customData.store; // بيانات الإناث
        console.log("Custom Data:", customData.store, customData.market);
      } else {
        // في حالة عدم وجود بيانات يدوية، يتم إنشاء بيانات عشوائية
        option.value.series[0].data = generateDailyData(days); // الإناث
      }

    }
  
    // تحديث المخطط
    if (chart.value && chart.value.chart) {
      chart.value.chart.setOption(option.value, true);
    } else {
      console.error("Chart instance is not ready.");
    }
    
  };
  
  
  
  onBeforeMount(() => {
    option.value.xAxis.data = Allmonths.value;
    option.value.series[0].data = [40, 50, 60, 70, 65, 75, 85, 80, 90, 95, 110, 115];
  })
  
  </script>
  