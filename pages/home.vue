<template>
    <div>
        <main>

            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3 mb-4">
                        <div class="info-box">
                            <div class="info-box-item market-size">
                                <div class="info-content">
                                    <span>حجم السوق</span>
                                    <div class="d-flex align-items-baseline gap-2">
                                        <h2 v-if="!HomeData?.length && !loading">{{ HomeData?.marketSize }}</h2>
                                        <Skeleton class="mt-2" v-if="HomeData?.length || loading" width="5rem" height=".5rem"></Skeleton>
                                    </div>
                                </div>
                                <img src="@/assets/images/attach_money.svg" alt="Dollar Icon">
                            </div>
                            <div class="info-box-item store-clients">
                                <div class="info-content">
                                    <span>عملاء المتجر</span>
                                    <div class="d-flex align-items-baseline gap-2">
                                        <h2 v-if="!StoreCustomers?.length && !loading">{{ StoreCustomers }}</h2>
                                        <Skeleton class="mt-2" v-if="StoreCustomers?.length || loading" width="5rem" height=".5rem"></Skeleton>
                                    </div>
                                </div>
                                <img src="@/assets/images/Store.svg" alt="Store Icon">
                            </div>
                            <div class="info-box-item market-clients">
                                <div class="info-content">
                                    <span>متوسط عملاء السوق</span>
                                    <div class="d-flex align-items-baseline gap-2">
                                        <h2 v-if="!HomeData?.length && !loading">{{ HomeData?.marketClientAverage }}</h2>
                                        <Skeleton class="mt-2" v-if="HomeData?.length || loading" width="5rem" height=".5rem"></Skeleton>
                                    </div>
                                </div>
                                <img src="@/assets/images/Customer.svg" alt="User Icon">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-9 mb-4">
                        <div class="layout-form chart_layout">
                            <h3 class="main-title bold text-center mb-4">متوسط زيارات السوق</h3>
                            <ChartsYearLimit />
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-4">
                        <div class="layout-form chart_layout">
                            <h3 class="main-title bold text-center mb-3">{{ $t("Global.distribution") }}</h3>
                            <h3 class="main-title sm text-center mb-0">{{ $t("Global.distribution_channels") }}</h3>
                            <ChartsVisitors />
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mb-4">
                        <div class="layout-form chart_layout">
                            <h3 class="main-title bold text-center mb-3">المنافسون</h3>
                            <h3 class="desc text-center mb-0">معدل أستحواذ منافسيك على حركة الزيارات من إجمالي حركة زيارات السوق</h3>
                            <ChartsProducts 
                              :data-ready="dataReady"
                              :products-data="productsData"
                              :loading="loading"
                            />
                        </div>
                    </div>

                </div>
            </div>
    
        </main>
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'auth'
});

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// **************** Data ******************//

const loading = ref(true);
const { token, user, isLoggedIn } = storeToRefs(useAuthStore());
const { response } = responseApi();
const { successToast, errorToast } = toastMsg();
const axios = useApi();

const HomeData = ref(null);
const StoreCustomers = ref(null);
// config
const config = computed(()=> {
    return { headers: { Authorization: `Bearer ${token.value}` } }
});
// custom setup for ChartsProducts chart

const dataReady = ref(false);

const productsData = computed(() => {
  if (!HomeData.value?.competitors) return {
    labels: [],
    series: [],
    colors: {
      bar: '#f75c5c',
      text: '#ffffff'
    }
  };

  return {
    labels: HomeData.value.competitors.map(competitor => ({
      id: competitor.id,
      text: competitor.competitorName,
      image: competitor.logo
    })),
    series: HomeData.value.competitors.map(competitor => competitor.totalMarketVisitors),
    colors: {
      bar: '#f75c5c',
      text: '#ffffff'
    }
  };
});

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

// فى حالة ان الداتا هترجع من الـ Home

// const chartOptions = ref({
//     legend: {
//       top: '5%',
//       show: false,
//       selected: {
//           [t('Global.females')]: true,
//           [t('Global.males')]: true,  
//         },
//     },
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
//   },
//   grid: {
//     left: '3%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true,
    
//   },
//   xAxis: {
//     type: 'category',
//     boundaryGap: false,
//     data: [],
//   },
//   yAxis: {
//     type: 'value',
//     show: false,
//   },
//   series: [
//     {
//     name: t('Global.females'),
//       type: 'line',
//       smooth: true,
//       symbol: 'square',
//       symbolSize: 7,
//       showSymbol: true,
//       lineStyle: { width: 2, color: '#4681f4' },
//       itemStyle: { color: '#013660' },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           { offset: 0, color: 'rgba(70, 129, 244, 0.6)' },
//           { offset: 1, color: 'rgba(70, 129, 244, 0.2)' },
//         ]),
//       },
//       data: [],
//     },
//     {
//     name: t('Global.males'),
//       type: 'line',
//       smooth: true,
//       symbol: 'square',
//       symbolSize: 7,
//       showSymbol: true,
//       lineStyle: { width: 2, color: '#f75c5c' },
//       itemStyle: { color: '#e5254a' },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           { offset: 0, color: 'rgba(247, 92, 92, 0.6)' },
//           { offset: 1, color: 'rgba(247, 92, 92, 0.2)' },
//         ]),
//       },
//       data: [],
//     },
//   ],
// });

const manualMonthlyData = {
    1: { 
        store: [10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160], 
        market: [12, 18, 20, 22, 28, 32, 36, 38, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128] 
    }, // بيانات شهر يناير
    2: { 
        store: [30, 25, 20, 35, 40, 45, 50, 55, 60, 65, 70, 10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, ], 
        market: [28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, ] 
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

// data for chart bar (Bar chart)

const sourceData = ref([
  ['label 1', 43.3, 85.8],
  ['label 2', 83.1, 73.4],
  ['label 3', 86.4, 65.2],
  ['label 4', 72.4, 53.9],
  ['label 5', 43.3, 85.8],
  ['Ramadan', 83.1, 73.4],
]);

// Function to handle rental type changes فى حالة ان الداتا هترجع من الـ Home

// const handleRentalTypeChange = (rentalType) => {
//     console.log('Rental Type Changed to:', rentalType);
//     if (rentalType === 0) {
//         chartOptions.value.legend.selected[t('Global.females')] = true;
//         chartOptions.value.legend.selected[t('Global.males')] = true;
//     } else if (rentalType === 1) {
//         chartOptions.value.legend.selected[t('Global.females')] = false;
//         chartOptions.value.legend.selected[t('Global.males')] = true;
//     } else if (rentalType === 2) {
//         chartOptions.value.legend.selected[t('Global.females')] = true;
//         chartOptions.value.legend.selected[t('Global.males')] = false;
//     }
// }

// ****************  method ************

const getHome = async () => {
    loading.value = true;
    await axios.get(`GetHomeStaticData`, config.value).then(res => {
    if (response(res) == "success") {
        HomeData.value = res.data.data;
        console.log(HomeData.value, "HomeData");
    }   
    loading.value = false;
    }).catch(err => {
        console.error(err);
    });
}

const GetStoreCustomers = async () => {
    loading.value = true;
    await axios.get(`GetStoreCustomers`, config.value).then(res => {
    if (response(res) == "success") {
        StoreCustomers.value = res.data.data;
    }   
    loading.value = false;
    }).catch(err => {
        console.error(err);
    });
}

onBeforeMount( async () => {
    await getHome();
    await GetStoreCustomers();
    dataReady.value = true;
});
</script>
