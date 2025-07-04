<template>
    <div class="defaultLayout" v-if="isHomePage">

        <div class="container">
            <header class="header" :class="headerClass">
                <div class="nav-header">
                    <div class="inner">
                        <nuxtLink to="/" class="logo btn-login">
                            <img
                                src="@/assets/images/logo.svg"
                                alt="logo"
                            />
                        </nuxtLink>
                        <ul
                            class="nav-links"
                            :class="{ active: navLinksActive }"
                        >
                            <li>
                                <NuxtLink to="/#banner" class="link">
                                    {{ $t("Titles.home") }}
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/#assistant" class="link">
                                    المساعد التسويقي
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/#Features" class="link">
                                    المميزات
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/#Services" class="link">
                                    الخدمات
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/#packages" class="link">
                                    الباقات
                                </NuxtLink>
                            </li>
                        </ul>

                        <div class="left">
                            
                            <NuxtLink to="/home" class="btn-login auth-user" v-if="token">
                                <img :src="user?.storeImage" alt="user-img" class="user-img with-radios">
                            </NuxtLink>

                            <div class="dropdown drop-lang cursor-pointer" :class="{ 'color-lang': colorLang }" v-if="!token">
                                <div class="btn-login dropdown-toggle" data-bs-toggle="dropdown">
                                    <img src="@/assets/images/user-img.svg" alt="user-img" class="user-img">
                                </div>

                                <ul class="dropdown-menu">
                                <NuxtLink to="/Auth/login" class="dropdown-item">تسجيل الدخول</NuxtLink>
                                <button type="button" @click="signUp_dialog = true" class="dropdown-item">تسجيل حساب جديد</button>
                                </ul>
                            </div>
                            <button
                                class="nav-btn"
                                @click="handleClick"
                                :class="{ active: navBtnActive }"
                            >
                                <span></span><span></span><span></span>
                            </button>
                            <div
                                class="nav-overlay"
                                @click="handleOverlayClick"
                                :class="{ show: navOverlayShow }"
                            ></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

        <!-- dialog for check if it Salla or zid -->

        <Dialog v-model:visible="signUp_dialog" modal class="custum_dialog_width auth-daialog"
            :draggable="false">
            <div class="text-center">
                <h5 class="main-title sm blue mb-4"> اختر المنصة التي ترغب في ربط متجرك بها عبر تطبيق بروزه من خلال سوق تطبيقات سلة وزد.</h5>
                <div class="section-btns mt-4 mb-4">
                  
                    <button @click="() => { navigateToUrl('https://apps.salla.sa/ar/app/853407611'); signUp_dialog = false; }" class="typeSection salla">
                        <img src="@/assets/images/salla.svg" alt="">
                    </button>

                    <button @click="() => { navigateToUrl('https://apps.zid.sa/application/4359'); signUp_dialog = false; }" class="typeSection zid">
                        <img src="@/assets/images/zid.svg" alt="">
                    </button>
                </div>
            </div>
        </Dialog>

    </div>
</template>

<script setup>

    import { useRoute } from 'vue-router';

    const { user, token } = storeToRefs(useAuthStore());

    const router = useRouter();


    const signUp_dialog = ref(false);
    const navBtnActive = ref(false);
    const navLinksActive = ref(false);
    const navOverlayShow = ref(false);

    const handleClick = () => {
        navBtnActive.value = true;
        navLinksActive.value = true;
        navOverlayShow.value = true;
    };

    const handleOverlayClick = () => {
        navBtnActive.value = false;
        navLinksActive.value = false;
        navOverlayShow.value = false;
    };

    const route = useRoute();
    watch(route, (to, from) => {
        console.log("Route changed:", to, from);
        handleOverlayClick();
    });

    const navigateToUrl = (url) => {
        window?.open(url, '_blank');
    };


    const isHomePage = computed(() => {
      return router.currentRoute.value.path === '/' || router.currentRoute.value.path === '' || router.currentRoute.value.path === 'index' || router.currentRoute.value.path === '/about' || router.currentRoute.value.path === '/privacy'; 
    });
</script>

<style lang="scss">
.add-margin {
    margin-bottom: 40px;
}
.defaultLayout {
    position: sticky;
    top: 0;
    z-index: 1000;
}

.typeSection {
        padding: 20px;
        border-radius: 10px;
        width: 133px;
        height: 54px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &.salla {
            background-color: #004956;
        }
        &.zid {
            background-color: #802BE7;
        }
    }
</style>
