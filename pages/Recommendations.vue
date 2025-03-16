<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-12 col-lg-8 mb-4 p-0">
                <GlobalFAQ 
                    :loading="loading" 
                    :Recommendations="RecommendationsHome?.data || []" 
                    :successfulcampaigns="RecommendationsHome?.successfulcampaigns || []"
                />
            </div>

            <div class="col-12 col-lg-4 col-md-6 mb-4">
                <div class="layout-form chart_layout">
                    <h3 class="main-title main-cl fw-normal text-center mb-3">تحسين محركات البحث</h3>
                    <ChartsProducts :data-ready="dataReady" :products-data="productsData" :chart-height="'190px'"/>
                </div>
            </div>

            <div class="col-12 col-lg-4 col-md-6 mb-5">
                <div class="layout-form chart_layout">

                    <div class="d-flex align-items-center align-items-center mb-3 gap-3">
                        <img src="@/assets/images/Calendar.svg" alt="">
                        <h3 class="main-title bold text-center red-cl">طلب استشارة مع خبير</h3>
                    </div>

                    <p class="desc text-center mb-4">احجز إستشارة مجانية مع خبراء التسويق لدينا لمساعدتـــك على تطوير خطة إستراتيجية ناجحة معتمدة على تحليل بياناتك الحالية</p>
                    <nuxt-link to="https://calendly.com/barwazah-info/30min" target="_blank" class="custom-btn red-bg sm w-100">احجز مكالمتك الان</nuxt-link>
                </div>
            </div>

        </div>

        <!-- <div class="row">
            
            <div class="col-12 col-md-4">
                <div class="layout-form chart_layout">

                    <div class="d-flex align-items-center align-items-center mb-3 gap-3">
                        <img src="@/assets/images/Calendar.svg" alt="">
                        <h3 class="main-title bold text-center red-cl">طلب استشارة مع خبير</h3>
                    </div>

                    <p class="desc text-center mb-4">احجز إستشارة مجانية مع خبراء التسويق لدينا لمساعدتـــك على تطوير خطة إستراتيجية ناجحة معتمدة على تحليل بياناتك الحالية</p>
                    <nuxt-link to="https://calendly.com/barwazah-info/30min" target="_blank" class="custom-btn red-bg sm w-100">احجز مكالمتك الان</nuxt-link>
                </div>
            </div>

            <div class="col-12 col-md-8 mb-4">
                <div class="layout-form chart_layout">
                    <h3 class="main-title fw-normal text-center mb-3">تحسين محركات البحث</h3>
                    <h3 class="desc text-center mb-0">{{ $t("Global.highest_Sales") }}</h3>
                    <ChartsProducts :data-ready="dataReady" :products-data="productsData" :chart-height="'200px'"/>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
    definePageMeta({
        name: "Sidebar.recommendations",
    });

    
    const axios = useApi();
    const { token } = storeToRefs(useAuthStore());
    // config
    const config = computed(()=> {
        return { headers: { Authorization: `Bearer ${token.value}` } }
    });
    const { response } = responseApi();
    
    const loading = ref(true);
    const RecommendationsHome = ref([]);
    const dataReady = ref(false);

    // const productsData = ref({
    //     labels: [
    //         { id: 1303, text: 'شباب 3333' },
    //         { id: 1304, text: 'حريمي' },
    //         { id: 1305, text: 'أطفال' },
    //         { id: 1306, text: 'رجالي' },
    //     ],
    //     series: [12.32, 11.7, 10.38, 9.32],
    //     colors: {
    //         bar: '#f75c5c',
    //         text: '#ffffff'
    //     }
    // });

    const productsData = computed(() => {
        if (!RecommendationsHome.value?.keywords) return {
            labels: [],
            series: [],
            colors: {
            bar: '#f75c5c',
            text: '#ffffff'
            }
        };

        return {
            labels: RecommendationsHome.value.keywords.map(competitor => ({
            id: competitor.id,
            text: competitor.keyword,
            image: competitor.logo
            })),
            series: RecommendationsHome.value.keywords.map(competitor => {
                // Remove 'k' suffix and convert to number
                return parseFloat(competitor.precentage.replace('k', ''));
            }),
            colors: {
            bar: '#f75c5c',
            text: '#ffffff'
            }
        };
    });

    const getRecommendations = async () => {
        loading.value = true;
        await axios.get(`RecommendationsHome`, config.value).then(res => {
        if (response(res) == "success") {
            RecommendationsHome.value = res.data.data;
            console.log(RecommendationsHome.value, "RecommendationsHome");
        }   
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            loading.value = false;
        });
    }

    onMounted( async() => {
        await getRecommendations();
    });

    onBeforeMount(() => {
        dataReady.value = true;
    });
</script>