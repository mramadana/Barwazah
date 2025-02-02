<template>
    <div class="container">

        <GlobalFAQ />

        <div class="row">
            
            <div class="col-12 col-md-4">
                <div class="layout-form chart_layout">

                    <div class="d-flex align-items-center align-items-center mb-3 gap-3">
                        <img src="@/assets/images/Calendar.svg" alt="">
                        <h3 class="main-title bold text-center red-cl">طلب استشارة مع خبير</h3>
                    </div>

                    <p class="desc text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis velit fugit, nesciunt voluptas repellat</p>
                    <nuxt-link to="#" class="custom-btn red-bg sm w-100">احجز مكالمتك الان</nuxt-link>
                </div>
            </div>

            <div class="col-12 col-md-8 mb-4">
                <div class="layout-form chart_layout">
                    <h3 class="main-title bold text-center mb-3">{{ $t("Global.commercial_Products") }}</h3>
                    <h3 class="main-title sm text-center mb-0">{{ $t("Global.highest_Sales") }}</h3>
                    <ChartsProducts :data-ready="dataReady" :products-data="productsData"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        name: "Sidebar.recommendations",
    });

    const dataReady = ref(false);

    const productsData = ref({
        labels: [
            { id: 1303, text: 'شباب' },
            { id: 1304, text: 'حريمي' },
            { id: 1305, text: 'أطفال' },
            { id: 1306, text: 'رجالي' },
        ],
        series: [12.32, 11.7, 10.38, 9.32],
        colors: {
            bar: '#f75c5c',
            text: '#ffffff'
        }
    });

    onBeforeMount(() => {
        dataReady.value = true;
    });
</script>