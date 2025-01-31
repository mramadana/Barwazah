<template>
    <div>
        <div class="info-box-item cart-clients gap-5 flex-wrap mb-4">
            <div class="d-flex gap-3 justify-content-center flex-grow-1 align-items-center">
                <img src="@/assets/images/cart.svg" alt="User Icon">
                <div class="info-content">
                    <span>إجمالي قيمة السلات المتروكة للمتجر:</span>
                    <h2>99000 ريال</h2>
                </div>
    
            </div>
        </div>

        <div class="layout-form chart_layout">
            <h1 class="main-title bold text-center mb-5">متوسط حجم السلات المتروكة</h1>
            <!-- <ChartsOrders 
            :data-ready="dataReady"
            :months="months"
            :all-months="allMonths"
            :manual-data="manualMonthlyData"
            :initial-data="initialData"/> -->

            <ChartsOrders apiEndpoint="AverageAbandonedCartSize" />
        </div>

        <div class="layout-form chart_layout">
            <ChartsProducts 
                :data-ready="dataReady"
                :products-data="productsData"
            />
        </div>

        <div class="layout-form">
            <h2 class="main-title bold text-center mb-5">التحليل الديموغرافي</h2>
            <ChartsBar :source-data="sourceData" />
        </div>

    </div>
</template>

<script setup>
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
            bar: '#013660',
            text: '#ffffff'
            }
        };
    });


    const sourceData = ref([]);

    // ***************************** method ***************************** //

    const GetCommonProducts = async () => {
        loading.value = true;
        await axios.get(`DropoutRate`, config.value).then(res => {
        if (response(res) == "success") {
            CommonProducts.value = res.data.data;
            console.log(CommonProducts.value, "HomeData");
        }   
        loading.value = false;
        }).catch(err => {
            console.error(err);
        });
    }

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