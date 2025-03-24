<template>
    <div>
        <main>
          
            <div class="container">

                <div class="row">
                
                    <div class="col-12 col-lg-6 mb-3 info-box">
                        <div class="info-box-item info-box-item align-items-center store-clients gap-3 flex-column-sm">
                            <div class="d-flex">
                                <img src="@/assets/images/Sell_products.svg" alt="Store Icon">
                                <div class="info-content">
                                    <span class="main-cl main-title bold mb-2">معدل بيع المنتجات للمتجر</span>
                                    <h2 v-if="!HomeSalesData?.length && !loading" class="d-flex align-items-end">{{ HomeSalesData?.storeSalesPercent }} <div class="hint-present">%</div></h2>
                                    <Skeleton class="mt-3" v-if="HomeSalesData?.length || loading" width="5rem" height=".5rem"></Skeleton>
                                </div>
                            </div>
                            <h4 class="hint-card">نسبة بيع المنتج الواحد من الكمية الكلية المتوفرة ترجمة الرقم: أنه اذا كانت الكمية الكلية للمنتج هي 100 اذن تم بيع {{ HomeSalesData?.storeSalesPercent }} تقريبا</h4>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mb-3 info-box">
                        <NuxtLink to="/salesDetails" class="info-box-item cart-clients gap-3 flex-wrap justify-content-between">
                            <div class="d-flex align-items-center gap-3">
                                <img src="@/assets/images/cart.svg" alt="User Icon">
                                <div class="info-content">
                                    <span>متوسط السلات المتروكة للمتجر</span>
                                    <h2 class="d-flex align-items-end" v-if="!HomeSalesData?.length && !loading">{{ HomeSalesData?.abondendCartAverage }} <div class="hint-span">سلة</div> </h2>
                                    <Skeleton class="mt-2" v-if="HomeSalesData?.length || loading" width="5rem" height=".5rem"></Skeleton>
                                </div>

                            </div>
                            <font-awesome-icon class="fa-2x" :icon="['fas', 'angle-left']" />
                        </NuxtLink>
                    </div>

                    <div class="col-12 mb-3">
                        <div class="layout-form chart_layout">
                        <h3 class="main-title text-center fw-normal mb-4">{{ $t("Global.sales") }}</h3>
                        <ChartsGradientArea
                            :initialMonths="months"
                            :initialAllMonths="allMonths"
                            :initialMonthlyData="manualMonthlyData_2"
                            :initialSeriesData="SalesseriesData_2"
                            @rental_change="handleSalesMonthChange"
                            :loading="loading"
                            :showAllOption="true"
                        />
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mb-3">
                        <div class="layout-form chart_layout">
                            <h3 class="main-title text-center fw-normal mb-3">{{ $t("Global.commercial_Products") }}</h3>
                            <h3 class="desc text-center mb-0">{{ $t("Global.highest_Sales") }}</h3>
                            <ChartsProducts 
                              :data-ready="dataReady"
                              :products-data="productsData"
                            />
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mb-3">
                        <div class="layout-form chart_layout">
                          <h3 class="main-title text-center fw-normal mb-4">وقت الذروة</h3>
                            <ChartsTimeLimit apiEndpoint="GetPeakTime" />
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mb-3">
                        <div class="layout-form chart_layout">
                          <h3 class="main-title fw-normal text-center mb-3">معدل الطلبات</h3>
                            <ChartsGetOrders apiEndpoint="GetRequestRateChartData"/>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mb-3">
                        <div class="layout-form">
                          <h3 class="main-title text-center fw-normal mb-4">التحليل الديموغرافي</h3>
                            <ChartsBar :rental-names="rentalNames" :placeholder-text="placeholderText" :source-data="sourceData" />
                        </div>
                    </div>

                    <!-- متوسط حجم سلة الشراء -->

                    <div class="col-12 mb-5">
                        <div class="layout-form chart_layout">
                        <h3 class="main-title fw-normal text-center mb-4">متوسط حجم سلة الشراء</h3>
                        <ChartsGradientArea
                            :initialMonths="months"
                            :initialAllMonths="allMonths"
                            :initialMonthlyData="manualMonthlyData"
                            :initialSeriesData="SalesseriesData"
                            :loading="loading"
                            @rental_change="handleMonthChange"
                            :showAllOption="false"
                        />
                        </div>
                    </div>

                </div>
            </div>
    
        </main>
    </div>
</template>

<script setup>

import { useI18n } from 'vue-i18n';

definePageMeta({
    name: "Titles.sales",
    middleware: 'auth'
});

const { t } = useI18n();

// **************** Data ******************//

const { response } = responseApi();
const axios = useApi();
const placeholderText = ref('تحديد الجنس');
const rentalNames = ref({
    showAll: 'الكل',
    males: 'الذكور',
    females: 'الإناث'
});
const HomeSalesData = ref([]);

const CommonProducts = ref([]);
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
const SalesseriesData_2 = ref([[], []]);
const manualMonthlyData = ref({});
const manualMonthlyData_2 = ref({});
// data for chart bar (Bar chart)

const sourceData = ref([]);

// ******************** method ********************//

// Get Home Sales Data

const productsData = computed(() => {
  if (!CommonProducts.value) return {
    labels: [],
    series: [],
    colors: {
      bar: '#f75c5c',
      text: '#ffffff'
    }
  };

  return {
    labels: CommonProducts.value.map(commonProduct => ({
      id: commonProduct.id,
      text: commonProduct.name,
      image: commonProduct.logo
    })),
    series: CommonProducts.value.map(commonProduct => Number(commonProduct.saleRate.toFixed(2))),
    colors: {
      bar: '#f75c5c',
      text: '#ffffff'
    }
  };
});


const getHomeSales = async () => {
    loading.value = true;
    await axios.get(`GetSalesHomeStaticData`, config.value).then(res => {
    if (response(res) == "success") {
        HomeSalesData.value = res.data.data;
    }   
    loading.value = false;
    }).catch(err => {
        console.error(err);
    });
}

const GetCommonProducts = async () => {
    loading.value = true;
    await axios.get(`GetSalesCommonProductsData`, config.value).then(res => {
    if (response(res) == "success") {
        // CommonProducts.value = res.data.data;
        CommonProducts.value = res.data.data.slice(0, 4).reverse();
        console.log(CommonProducts.value, "HomeData");
    }   
    loading.value = false;
    }).catch(err => {
        console.error(err);
    });
}

// get sales chart Data (شارت المبيعات)

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

// get sales chart Data (شارت متوسط حجم شراء السلة)
const getSalesData = async (monthId = 0) => {
  loading.value = true;
  try {
    console.log(`Fetching data for monthId: ${monthId}`);
    const res = await axios.get(`GetSalesChartData?type=0&filterByMonth=${monthId}`, config.value);
    if (response(res) === "success") {
      const data = res.data.data;
      if (monthId === 0) {
        SalesseriesData_2.value = [
          data.marketData.map(item => item.value),
          data.storeDataData.map(item => item.value)
        ];
      } else {
        const dailyData = {
          market: data.marketData.map(item => item.value),
          store: data.storeDataData.map(item => item.value)
        };
        manualMonthlyData_2.value[monthId] = dailyData;
        console.log("Updated manualMonthlyData:", manualMonthlyData_2.value);
      }
      backendData.value = data;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  } finally {
    loading.value = false;
  }
};

// get demographic data (تشارت التحليل الديموغرافي)
const getDemographicData = async () => {
  loading.value = true;
  try {
    const res = await axios.get(`DemographicDataChartData?GenderType=0`, config.value);
    if (response(res) === "success") {
      const demographicData = res.data.data;
      if (Array.isArray(demographicData)) {
        sourceData.value = demographicData;
        console.log("Updated Source Data:", sourceData.value);
      } else {
        console.error("demographicData is not an array:", demographicData);
      }
    }
  } catch (err) {
    console.error("Error fetching demographic data:", err);
  } finally {
    loading.value = false;
  }
};

const handleMonthChange = async (monthId) => {
  console.log(`Handling month change for monthId: ${monthId}`);
  await getData(monthId);
  console.log("manualMonthlyData.value after update:", manualMonthlyData.value);
};

const handleSalesMonthChange = async (monthId) => {
  console.log(`Handling month change for monthId: ${monthId}`);
  await getSalesData(monthId);
  console.log("manualMonthlyData.value after update:", manualMonthlyData.value);
};


onMounted(async () => {
  await getData(0);
  await getSalesData(0);
  await getDemographicData();
  await getHomeSales();
  await GetCommonProducts();
});

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
.hint-present {
  font-size: 16px;
  transform: translateY(-5px);
  margin-inline-start: 5px;
}

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
  font-weight: normal;
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

<style lang="scss" scoped>
  .info-box {
    margin-inline-end: 0;
  }
  .info-box-item {
    padding: 22px 33px 22px 18px;
    @media (max-width: 550px) {
      padding: 15px;
    }
  }
  .info-box-item img {
    height: 65px;
  }
  .info-box-item.cart-clients {
    color: #fff;
    span {
      color: #ff7c95;
    }
    .hint-span {
      color: #fff;
      font-size: 12px;
      transform: translateY(-50%);
      margin-inline-start: 5px;
    }

  } 
  .flex-column-sm {
    @media (max-width: 550px) {
      flex-direction: column !important;
    }
  }
</style>