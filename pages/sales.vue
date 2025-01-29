<template>
    <div>
        <main>
            
            <nuxt-link to="/about"></nuxt-link>

            <div class="container">

                <div v-if="user">
                    <h1 class="main-title bold cl-red">{{ $t("Global.welcome") }} &nbsp; {{ user.name }}</h1>
                    <h3 class="main-title normal main-cl">{{ user.email }}</h3>
                </div>
                
                <div v-else>
                    <h1 class="main-title bold cl-red"> Home page</h1>
                </div>

                <div class="row">
                
                    <div class="col-12 col-md-6 mb-4 info-box">
                        <div class="info-box-item info-box-item align-items-end store-clients gap-3 flex-wrap">
                            <div class="d-flex gap-3">
                                <img src="@/assets/images/Sell_products.svg" alt="Store Icon">
                                <div class="info-content">
                                    <span class="main-cl bold mb-2">معدل بيع منتجات للمتجر</span>
                                    <h2>26.86 %</h2>
                                </div>
                            </div>
                            <h4 class="hint-card">نسبة بيع المنتج الواحد من الكمية الكلية المتوفرة ترجمة الرقم: أنه اذا كانت الكمية الكلية للمنتج هي 100 اذن تم بيع 27 تقريبا</h4>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-4 info-box">
                        <NuxtLink to="/salesDetails" class="info-box-item cart-clients gap-3 flex-wrap">
                            <div class="d-flex align-items-center gap-3">
                                <img src="@/assets/images/cart.svg" alt="User Icon">
                                <div class="info-content">
                                    <span>متوسط عملاء السوق</span>
                                    <h2>3.95 ألف</h2>
                                </div>

                            </div>
                            <font-awesome-icon class="fa-2x" :icon="['fas', 'angle-left']" />
                        </NuxtLink>
                    </div>


                    <div class="col-12 mb-5">
                        <div class="layout-form chart_layout">
                        <h3 class="main-title bold lg text-center mb-4">{{ $t("Global.sales") }}</h3>
                        <ChartsGradientArea
                            :initialMonths="months"
                            :initialAllMonths="allMonths"
                            :initialOption="chartOptions"
                            :initialMonthlyData="manualMonthlyData"
                            @rental-type-change="handleRentalTypeChange"
                            :initialSeriesData="seriesData"
                        />
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <div class="layout-form">
                            <ChartsBar :source-data="sourceData" />
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <div class="layout-form chart_layout">
                            <ChartsTimeLimit />
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <div class="layout-form chart_layout">
                            <ChartsOrders 
                            :data-ready="dataReady"
                            :months="months"
                            :all-months="allMonths"
                            :manual-data="manualMonthlyDataOrder"
                            :initial-data="initialData"/>
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <div class="layout-form chart_layout">
                            <h3 class="main-title bold text-center mb-3">{{ $t("Global.commercial_Products") }}</h3>
                            <h3 class="main-title sm text-center mb-0">{{ $t("Global.highest_Sales") }}</h3>
                            <ChartsProducts 
                              :data-ready="dataReady"
                              :products-data="productsData"
                            />
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="layout-form chart_layout">
                            <ChartsVisitors />
                        </div>
                    </div>

                    <!-- متوسط حجم سلة الشراء -->

                    <div class="col-12 mb-5">
                        <div class="layout-form chart_layout">
                        <h3 class="main-title bold lg text-center mb-4">متوسط حجم سلة الشراء</h3>
                        <ChartsGradientArea
                            :initialMonths="months"
                            :initialAllMonths="allMonths"
                            :initialMonthlyData="manualMonthlyData"
                            :initialSeriesData="SalesseriesData"
                            :loading="loading"
                            @rental_change="handleMonthChange"
                        />
                        </div>
                    </div>

                </div>
            </div>
    
        </main>
    </div>
</template>

<!-- <script setup>

definePageMeta({
    name: "Titles.home",
});

const store = useAuthStore();




</script> -->

<script setup>

import { useI18n } from 'vue-i18n';

definePageMeta({
    name: "Titles.sales",
});

const { t } = useI18n();

// **************** Data ******************//

const { response } = responseApi();
const { successToast, errorToast } = toastMsg();
const axios = useApi();

const salesData = ref([]);
// config
const config = computed(()=> {
    return { headers: { Authorization: `Bearer ${token.value}` } }
});


import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// Register ECharts modules
echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]);

const store = useAuthStore();

const { token, user } = storeToRefs(store);

// custom setup for gradient area chart
const seriesData = ref([
  [40, 50, 60, 70, 65, 75, 85, 80, 90, 95, 110, 115], // Series 0 data
  [30, 40, 55, 50, 55, 60, 75, 72, 78, 82, 90, 95],  // Series 1 data
]);

const months = ref([
  { name: 'عرض الكل', id: 0 },
  { name: 'يناير', id: 1, days: 31 },
  { name: 'فبراير', id: 2, days: 28 },
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

const allMonths = ref(['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']);

// Data readiness flag
const dataReady = ref(false);

// Initial data for Orders chart
const initialData = ref({
  xAxis: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  series: null
});

// Manual monthly data
const manualMonthlyDataOrder = {
    1: { 
        store: [10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160]
    },
    2: { 
        store: [30, 25, 20, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160]
    },
    3: { 
        store: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90]
    },
    4: { 
        store: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    },
    5: { 
        store: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110]
    },
    6: { 
        store: [70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120]
    },
    7: { 
        store: [80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130]
    },
    8: { 
        store: [90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140]
    },
    9: { 
        store: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150]
    },
    10: { 
        store: [110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160]
    },
    11: { 
        store: [120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170]
    },
    12: { 
        store: [130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180]
    },
};

const loading = ref(true);
const backendData = ref(null);
const SalesseriesData = ref([[], []]);
const manualMonthlyData = ref({});

// data for chart bar (Bar chart)

const sourceData = ref([
  ['label 1', 43.3, 85.8],
  ['label 2', 83.1, 73.4],
  ['label 3', 86.4, 65.2],
  ['label 4', 72.4, 53.9],
  ['label 5', 43.3, 85.8],
  ['Ramadan', 83.1, 73.4],
]);

const productsData = ref({
  labels: [
    { id: 1303, text: 'منتج 1', image: "https://dashboard.awamer-store.4hoste.com/public/storage/images/products_files/1731314993_9381.png" },
    { id: 1304, text: 'منتج 2', image: "https://dashboard.awamer-store.4hoste.com/public/storage/images/products_files/1731314993_2573.jpg" },
    { id: 1305, text: 'منتج 3', image: "https://dashboard.awamer-store.4hoste.com/public/storage/images/products_files/1731314993_9843.png" },
    { id: 1306, text: 'منتج 4', image: "https://dashboard.awamer-store.4hoste.com/public/storage/images/products_files/1731314993_6201.png" },
  ],
  series: [12.32, 11.7, 10.38, 9.32],
  colors: {
    bar: '#f75c5c',
    text: '#ffffff'
  }
});

// ******************** method ********************//

// const getSalesData = async () => {
//     await axios.get(`AverageShoppingCartSize`, config.value).then(res => {
//     if (response(res) == "success") {
//         salesData.value = res.data.data;
//         console.log(salesData.value, "salesData");
//     }   
//     }).catch(err => {
//         console.error(err);
//     });
// }

// get sales chart Data 

// تحميل البيانات من API
const getData = async (monthId = 0) => {
  loading.value = true;
  try {
    console.log(`Fetching data for monthId: ${monthId}`);
    const res = await axios.get(`AverageShoppingCartSize?type=0&filterByMonth=${monthId}`, config.value);
    if (response(res) === "success") {
      const data = res.data.data;
      if (monthId === 0) {
        SalesseriesData.value = [
          data.marketData.map(item => item.value),
          data.storeDataData.map(item => item.value)
        ];
      } else {
        const dailyData = {
          market: data.marketData.map(item => item.value),
          store: data.storeDataData.map(item => item.value)
        };
        manualMonthlyData.value[monthId] = dailyData;
        console.log("Updated manualMonthlyData:", manualMonthlyData.value);
      }
      backendData.value = data;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  } finally {
    loading.value = false;
  }
};

const handleMonthChange = async (monthId) => {
  console.log(`Handling month change for monthId: ${monthId}`);
  await getData(monthId);
  console.log("manualMonthlyData.value after update:", manualMonthlyData.value);
};


onMounted(async () => {
  await getData(0);
});

// onMounted( async () => {
//     await getSalesData();
// });

onBeforeMount(() => {
  dataReady.value = true;
  // Initialize the chart data for the Orders chart
  initialData.value = {
    xAxis: allMonths.value,
    series: [40, 50, 60, 70, 65, 75, 85, 80, 90, 95, 110, 115]
  };
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


.radio-container input[type="radio"]:checked ~ .marker {
  transition: left 0.3s ease-in-out;
}

.radio-container input[type="radio"]:nth-of-type(1):checked ~ .marker {
  left: calc(100% - 40px);
}

.radio-container input[type="radio"]:nth-of-type(2):checked ~ .marker {
  left: 50%;
}

.radio-container input[type="radio"]:nth-of-type(3):checked ~ .marker {
  left: calc(10% - 10px);
}

/* تغيير لون النص عند التحديد */
.radio-container input[type="radio"]:checked + label {
  color: white !important;
}

</style>
