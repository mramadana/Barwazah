<template>
    <div class="container">
        <div class="info-box-item cart-clients gap-5 flex-wrap mb-4">
            <div class="d-flex gap-3 justify-content-center flex-grow-1 align-items-center">
                <img src="@/assets/images/cart-2.svg" alt="User Icon">
                <div class="info-content">
                    <span>إجمالي قيمة السلات المتروكة للمتجر:</span>
                    <h2>99000 ريال</h2>
                </div>
    
            </div>

            <nuxt-link to="/sales">
                <i class="fas fa-chevron-right sales-icon"></i>
            </nuxt-link>
        </div>

        <div class="layout-form chart_layout mb-3">
            <h1 class="main-title fw-normal text-center mb-5">متوسط حجم السلات المتروكة</h1>
            <ChartsOrders apiEndpoint="AverageAbandonedCartSize" />
        </div>

        <div class="layout-form chart_layout mb-3">
            <ChartsProducts 
                :data-ready="dataReady"
                :products-data="productsData"
                :rental-names="rentalNames_2" 
                :placeholder-text="placeholderText_2"
                :show-select="true"
                @filter-change="handleFilterChange"
            />
        </div>

        <div class="layout-form chart_layout mb-3">
            <h1 class="main-title fw-normal text-center mb-4">التحليل الديموغرافي</h1>
            <ChartsBar :rental-names="rentalNames" :placeholder-text="placeholderText" :source-data="sourceData" />
        </div>

    </div>
</template>

<script setup>

    definePageMeta({
        middleware: 'auth'
    });

    import * as echarts from 'echarts/core';
    import { LineChart } from 'echarts/charts';
    echarts.use([LineChart]);
    const { response } = responseApi();
    const axios = useApi();
    const CommonProducts = ref([]);
    const { token } = storeToRefs(useAuthStore());
    const loading = ref(false);

    // Flag to indicate if data is ready to be displayed
    const dataReady = ref(false);

    // config
    const config = computed(()=> {
        return { headers: { Authorization: `Bearer ${token.value}` } }
    });

    const placeholderText = ref('تحديد الجنس');
    
    const rentalNames = ref({
        showAll: 'الكل',
        males: 'الذكور',
        females: 'الإناث'
    });

    const placeholderText_2 = ref('معدل الترك');
    
    const rentalNames_2 = ref({
        males: 'الأقسام',
        females: 'المنتجات'
    });

    // Data for the products chart
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
            series: CommonProducts.value.map(commonProduct => Number(commonProduct.precentage.toFixed(2))),
            colors: {
            // bar: '#013660',
            // bar: CommonProducts.value.map(product => product.id == 2 ? '#000' : '#013660'),
            text: '#ffffff'
            }
        };
    });


    const sourceData = ref([]);

    const handleFilterChange = (filterValue) => {
        GetCommonProducts(filterValue);
    };

    // ***************************** method ***************************** //

    const GetCommonProducts = async (filter = 1) => { 
        loading.value = true;
        await axios.get(`DropoutRate?filter=${filter}`, config.value).then(res => {
            if (response(res) == "success") {
                CommonProducts.value = res.data.data;
                productsData.value.colors.bar = filter === 2 ? '#e5254a' : '#013660';
            }   
            loading.value = false;
        }).catch(err => {
            console.error(err);
            loading.value = false;
        });
    };

    const getDemographicData = async () => {
        loading.value = true;
        try {
            const res = await axios.get(`AbandonedCartRateForGender?GenderType=0`, config.value);
            if (response(res) === "success") {
            const demographicData = res.data.data;
            if (Array.isArray(demographicData)) {
                sourceData.value = demographicData;
                console.log("Updated Source Data:", sourceData.value);
                // نستخدم البيانات مباشرة كما هي من الـ API
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


    onMounted( async() => {
        await getDemographicData();
        await GetCommonProducts();
    });

    onBeforeMount(() => {
        dataReady.value = true;
    });
</script>

<style lang="scss" scoped>
    .sales-icon {
        font-size: 30px;
        margin-inline-end: 20px;
        color: #fff;
    }

    .info-box-item.cart-clients span {
        color: #ff7c95;
    }

    .info-box-item.cart-clients {
        color: #fff;
    }
</style>