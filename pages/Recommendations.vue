<template>
    <div class="container">
        
        <div v-if="user" class="mb-4">
            <h1 class="main-title bold cl-red">{{ $t("Global.welcome") }} &nbsp; {{ user.name }}</h1>
            <h3 class="main-title normal main-cl">{{ user.email }}</h3>
        </div>

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
                    <ChartsProducts />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        name: "Sidebar.recommendations",
    });

    const store = useAuthStore();

    const { user } = storeToRefs(store);
</script>