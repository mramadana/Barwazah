<template>
    <div>
        <main>

            <div class="container">
                <div class="home-section mb-3">

                    <div class="info-box">
                        <div class="info-box-item market-size">
                            <img src="@/assets/images/attach_money.svg" alt="Dollar Icon">
                            <div class="info-content">
                                <span>حجم السوق</span>
                                <div class="d-flex align-items-baseline gap-2">
                                    <h2 v-if="!HomeData?.length && !loading">{{ HomeData?.marketSize }}</h2>
                                    <Skeleton class="mt-2" v-if="HomeData?.length || loading" width="5rem" height=".5rem"></Skeleton>
                                </div>
                            </div>
                        </div>
                        <div class="info-box-item store-clients">
                            <img src="@/assets/images/Store.svg" alt="Store Icon">
                            <div class="info-content">
                                <span>عملاء المتجر</span>
                                <div class="d-flex align-items-baseline gap-2">
                                    <h2 v-if="!StoreCustomers?.length && !loading">{{ StoreCustomers }}</h2>
                                    <Skeleton class="mt-2" v-if="StoreCustomers?.length || loading" width="5rem" height=".5rem"></Skeleton>
                                </div>
                            </div>
                        </div>
                        <div class="info-box-item market-clients">
                            <img src="@/assets/images/Customer.svg" alt="User Icon">
                            <div class="info-content">
                                <span>متوسط عملاء السوق</span>
                                <div class="d-flex align-items-baseline gap-2">
                                    <h2 v-if="!HomeData?.length && !loading">{{ HomeData?.marketClientAverage }}</h2>
                                    <Skeleton class="mt-2" v-if="HomeData?.length || loading" width="5rem" height=".5rem"></Skeleton>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="w-100">
                        <div class="layout-form chart_layout">
                            <h3 class="main-title fw-normal text-center mb-3 main-cl">متوسط زيارات السوق</h3>
                            <ChartsYearLimit />
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-12 col-lg-6 mb-4">
                        <div class="layout-form chart_layout">
                            <h3 class="main-title fw-normal text-center mb-3 main-cl">{{ $t("Global.distribution") }}</h3>
                            <h3 class="desc text-center mb-0">{{ $t("Global.distribution_channels") }}</h3>
                            <ChartsVisitors />
                            <div class="chart-text">
                                <span class="hint">الكلمات التي يبحث عنها عملاءك</span>
                                <div class="key-words">
                                    <div class="text" v-for="(item, index) in HomeData?.keyWords" :key="index">{{ item.word }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mb-4">
                        <div class="layout-form chart_layout">
                            <h3 class="main-title fw-normal text-center mb-3 main-cl">المنافسون</h3>
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

<style lang="scss" scoped>
    .chart-text {
        display: flex;
        align-items: center;
        padding: 10px 18px;
        background-color: #eef6fe;
        border-radius: 24px;
        .hint {
            color: #013660;
            font-size: 14px;
            font-weight: 400;
            width: 120px;
            line-height: 1.9;
            margin-inline-end: 8px;
            flex-shrink: 0;
            margin-bottom: 7px;
        }
        .key-words {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
        .text {
            padding: 5px 15px;
            border-radius: 4px;
            background-color: #013660;
            color: #ffffff;
            font-size: 14px;
            font-weight: 300;
            margin-bottom: 7px;
            &:not(:last-child) {
                margin-inline-end: 7px;
            }
        }
    }
</style>