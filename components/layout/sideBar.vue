<template>
    <div>

        <div class="sidebar" id="mySidebar" :class="{ 'active': isActive, 'mini': mini }" v-if="!isHomePage" @mouseover="toggleSidebar" @mouseout="toggleSidebar">

            <!-- ***** sidebar logo ***** -->
            <div class="sidebar-logo">
                <nuxt-link to="/" class="logo">
                    <img src="@/assets/images/logo.svg" alt="logo" class="main-logo">
                    <img src="@/assets/images/layer1.svg" alt="logo" class="mini-logo">
                </nuxt-link>
            </div>
            
            <div ref="linksList" class="links" @scroll="saveScrollPosition">

                <nuxt-link class="link" to="/home" :class="{ 'active': isActiveLink('/home') }">
                    <div class="hint-img">
                        <img src="/sidebar/Conversion.svg" alt="hint-img">
                    </div>
                   <span> {{ $t('Titles.home') }}</span>
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

                <div class="link">
                    <div class="hint-img">
                        <img v-if="userProfileImage" :src="userProfileImage" alt="hint-img">
                        <!-- <img v-else src="@/assets/images/Rectangle.svg" alt="hint-img"> -->
                    </div>
                   <span> {{ user?.storeName }}</span>
                </div>

                <div class="progress-container">
                  <div class="progress-bar-side">
                    <div class="progress-fill" :style="{ width: user?.classificationPercentage + '%' }"></div>
                  </div>
                  <div class="progress-labels">
                    <span>الفئة :</span>
                    <span>{{ user?.storeClassification }}</span>
                  </div>
                </div>


                <button class="link w-100 transparent" @click="logoutDialog = true">
                    <div class="hint-img">
                        <img src="@/assets/images/logout.svg" alt="hint-img">
                    </div>
                   <span> {{ $t('Sidebar.logout') }}</span>
                </button>
            </div>

        </div>

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

const stepSide = ref('');

const logoutDialog = ref(false);

const isImage = ref("");
const checkImage = ref(false);
const scrollPosition = ref(0);
const linksList = ref(null);
const router = useRouter();
const route = useRoute();
const mini = ref(true);

// ********************* functions *********************

const userProfileImage = computed(() => {
  const profilePic = user.value?.profilePicture;
  
  if (!profilePic || (profilePic && profilePic.includes('barwazah'))) {
    return ('/Slider/Rectangle.svg');
  }
  return profilePic;
});


    const isActiveLink = (path) => {
      if (path === '/') {
        return route.path === path;
      }
      return route.path.startsWith(path);
    };

    const emit = defineEmits(['toggle-active']);

    // store
    const store = useAuthStore();

    // Toast
    const { successToast, errorToast } = toastMsg();
    
    const { token, user } = storeToRefs(store);

    const config = {
        headers: { Authorization: `Bearer ${token?.value || ''}` }
    };

    const { response } = responseApi();

    const { logoutHandler } = store;

    const logout = async () => {
          const res = await logoutHandler();
          res.status == "success" ? successToast(res.msg) : errorToast(res.msg);
          localStorage.clear();
          console.log(res.msg, "resss")
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

const toggleSidebar = () => {
    mini.value = !mini.value;
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
  
    if (!mini.value) {
      sidebar.style.width = "230px";
    } else {
      sidebar.style.width = "85px";
    }
  };




  const isHomePage = computed(() => {
      return router.currentRoute.value.path === '/' || router.currentRoute.value.path === '' || router.currentRoute.value.path === 'index' || router.currentRoute.value.path === '/about' || router.currentRoute.value.path === '/privacy'; 
    });


onMounted(() => {
  restoreScrollPosition();
  scrollToClickedLink();

  if(user?.profilePicture?.includes('barwazah')) {
    isImage.value = user?.profilePicture;
    console.log("yes");
  } else {
    console.log("no03333", isImage.value);
  }
});

</script>

<style lang="scss" scoped>
.sidebar {
  transition: all 0.5s ease;

  &.mini {
    width: 85px;
    
    .link {
      gap: 0;
      justify-content: center;
      span {
      opacity: 0;
      visibility: hidden;
      width: 0;
      height: 0;
      overflow: hidden;
    }
    }
    
    .hint-img {
      margin-right: 0;
    }
  }
}

#main {
  transition: margin-left 0.3s ease;
}

.link {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;

  .hint-img {
    width: 24px;
    height: 24px;
    margin-right: 15px;
    transition: margin 0.3s ease;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  span {
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
}
</style>
