<template>
    <div>

        <div class="sidebar" :class="{ 'active': isActive }">

            <!-- ***** close icon to close sidebar ***** -->
             
            <div class="colse-icon" @click="closeSiderbar"><i class="fas fa-times"></i></div>
            <div class="colse-icon" v-if="isActive" @click="closeSiderbar"><font-awesome-icon :icon="['fas', 'bars']" /></div>

            <!-- ***** sidebar logo ***** -->
            <div class="sidebar-logo">
                <nuxt-link to="/" class="logo">
                    <img src="@/assets/images/logo.svg" alt="">
                </nuxt-link>
            </div>
            
            <div ref="linksList" class="links" @scroll="saveScrollPosition">

                <nuxt-link class="link" to="/" :class="{ 'active': isActiveLink('/') }">
                    <div class="hint-img">
                        <img src="@/assets/images/Conversion.svg" alt="hint-img">
                    </div>
                   <span> {{ $t('Sidebar.conversion') }}</span>
                </nuxt-link>

                <nuxt-link class="link" to="/sales" :class="{ 'active': isActiveLink('/sales') }">
                    <div class="hint-img">
                        <img src="@/assets/images/Sales.svg" alt="hint-img">
                    </div>
                   <span> {{ $t('Sidebar.sales') }}</span>
                </nuxt-link>

                <nuxt-link class="link" to="/businessGrowth" :class="{ 'active': isActiveLink('/businessGrowth') }">
                    <div class="hint-img">
                        <img src="@/assets/images/Growth.svg" alt="hint-img">
                    </div>
                   <span> {{ $t('Sidebar.business_growth') }}</span>
                </nuxt-link>


                <nuxt-link class="link" to="/Recommendations" :class="{ 'active': isActiveLink('/Recommendations') }">
                    <div class="hint-img">
                        <img src="@/assets/images/Suggestions.svg" alt="hint-img">
                    </div>
                   <span> {{ $t('Sidebar.recommendations') }}</span>
                </nuxt-link>

                <nuxt-link class="link" to="/chat" :class="{ 'active': isActiveLink('/chat') }">
                    <div class="hint-img">
                        <img src="@/assets/images/AI Assestant.svg" alt="hint-img">
                    </div>
                    <span> {{ $t('Sidebar.marketing_assistant') }}</span>
                </nuxt-link>

                <nuxt-link class="link" to="/settings" :class="{ 'active': isActiveLink('/settings') }">
                    <div class="hint-img">
                        <img src="@/assets/images/Settings.svg" alt="hint-img">
                    </div>
                   <span> {{ $t('Sidebar.settings') }}</span>
                </nuxt-link>

                <nuxt-link class="link" to="/whoarewe" :class="{ 'active': isActiveLink('/whoarewe') }">
                    <div class="hint-img">
                        <img src="@/assets/images/Rectangle.svg" alt="hint-img">
                    </div>
                   <span> {{ $t('Sidebar.store') }}</span>
                </nuxt-link>

                <button class="link w-100 transparent" @click="logoutDialog = true">
                    <div class="hint-img">
                        <img src="@/assets/images/logout.svg" alt="hint-img">
                    </div>
                   <span> {{ $t('Sidebar.logout') }}</span>
                  </button>
            </div>

        </div>

        <div class="overlay-sidebar" @click="$emit('toggle-active')" :class="{ 'show': isActive }"></div>

        <!-- start to close Dialog -->

        <Dialog v-model:visible="logoutDialog" modal class="custum_dialog_width auth-daialog"
            :draggable="false">
            <div class="text-center">
                <!-- <img src="@/assets/images/noun_warning.png" alt="check-img" class="check-img"/> -->
                <h1 class="main-title bold mb-5">
                    {{ $t("Global.sure_logout") }}
                </h1>
                <div class="section-btns mt-4">
                  
                    <button type="button" class="custom-btn sm d-inline-flex" @click="logoutDialog = false">
                        {{ $t("Global.retreat") }}
                    </button>
                    <button type="button" class="custom-btn logout sm d-inline-flex" @click="logout">
                        {{ $t("Sidebar.logout") }}
                    </button>
                </div>
            </div>
        </Dialog>

        
    </div>
</template>

<script setup>

const props = defineProps({
  isActive: Boolean,
});

const isActive = ref(false);

const logoutDialog = ref(false);

const scrollPosition = ref(0);
const linksList = ref(null);
const router = useRouter();
const route = useRoute();

const closeSiderbar = () => {
  emit('toggle-active');
  isActive.value = !isActive.value;
};

const isActiveLink = (path) => {
  if (path === '/') {
    return route.path === path;
  }
  return route.path.startsWith(path);
};

    const emit = defineEmits(['toggle-active']);

    // Toast
    const { successToast, errorToast } = toastMsg();

    // Axios
    const axios = useApi();
    
    // store
    const store = useAuthStore();


  const { token } = storeToRefs(store);

  const config = {
      headers: { Authorization: `Bearer ${token.value}` }
  };

    const { response } = responseApi();

    const { logoutHandler } = store;
    const logout = async () => {
          const res = await logoutHandler();
          res.status == "success" ? successToast(res.msg) : errorToast(res.msg);
          localStorage.clear();
      }



// Scroll to the middle of the previously clicked link on mount
const scrollToClickedLink = () => {
  const clickedLinkPath = localStorage.getItem('clickedLinkPath');
  if (clickedLinkPath) {
    const target = linksList.value.querySelector(`.link[to='${clickedLinkPath}']`);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }
};

const saveScrollPosition = () => {
  if (linksList.value) {
    scrollPosition.value = linksList.value.scrollTop;
    localStorage.setItem('sidebarScrollPosition', scrollPosition.value);
  }
};

const restoreScrollPosition = () => {
  const savedPosition = localStorage.getItem('sidebarScrollPosition');
  if (linksList.value && savedPosition !== null) {
    smoothScrollTo(savedPosition);
  }
};

// Smooth scroll function
const smoothScrollTo = (position) => {
  if (linksList.value) {
    linksList.value.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  }
};

const handleRouteChange = () => {
  console.log('Route changed:', router);
  if (window.innerWidth <= 1250) {
    emit('toggle-active');
    handleResize();
  }
};

watch(router, handleRouteChange);

router.afterEach((to, from) => {
        if (window.innerWidth <= 1250) {
          emit('toggle-active');
          handleResize();
        }
});

onMounted(() => {
  restoreScrollPosition();
  scrollToClickedLink();
});

</script>

<style lang="scss" scoped>

</style>

