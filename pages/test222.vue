<template>
    <div>
      <div id="mySidebar" class="sidebar" @mouseover="toggleSidebar" @mouseout="toggleSidebar">
        <nuxt-link to="/">
          <span>
            <i class="material-icons">info</i>
            <span class="icon-text">{{ $t('Sidebar.conversion') }}</span>
          </span>
        </nuxt-link>
  
        <nuxt-link to="/sales">
          <span>
            <i class="material-icons">spa</i>
            <span class="icon-text">{{ $t('Sidebar.sales') }}</span>
          </span>
        </nuxt-link>
  
        <nuxt-link to="/businessGrowth">
          <span>
            <i class="material-icons">monetization_on</i>
            <span class="icon-text">{{ $t('Sidebar.business_growth') }}</span>
          </span>
        </nuxt-link>
  
        <nuxt-link to="/Recommendations">
          <span>
            <i class="material-icons">email</i>
            <span class="icon-text">{{ $t('Sidebar.recommendations') }}</span>
          </span>
        </nuxt-link>
  
        <nuxt-link to="/chat">
          <span>
            <i class="material-icons">email</i>
            <span class="icon-text">{{ $t('Sidebar.marketing_assistant') }}</span>
          </span>
        </nuxt-link>
  
        <nuxt-link to="/settings">
          <span>
            <i class="material-icons">settings</i>
            <span class="icon-text">{{ $t('Sidebar.settings') }}</span>
          </span>
        </nuxt-link>
  
        <nuxt-link to="/whoarewe">
          <span>
            <i class="material-icons">info</i>
            <span class="icon-text">{{ $t('Sidebar.store') }}</span>
          </span>
        </nuxt-link>
  
        <button class="link w-100 transparent" @click="logoutDialog = true">
          <span>
            <i class="material-icons">logout</i>
            <span class="icon-text">{{ $t('Sidebar.logout') }}</span>
          </span>
        </button>
      </div>
  
      <div id="main">
        <slot></slot>
      </div>
  
      <div class="overlay-sidebar" @click="$emit('toggle-active')" :class="{ 'show': isActive }"></div>
  
      <!-- start to close Dialog -->
      <Dialog v-model:visible="logoutDialog" modal class="custum_dialog_width auth-daialog"
        :draggable="false">
        <div class="text-center">
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
  import { ref, watch, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'
  import { storeToRefs } from 'pinia'
  import { useToast } from 'primevue/usetoast'
  
  const props = defineProps({
    isActive: Boolean,
  });
  
  const router = useRouter()
  const route = useRoute()
  const mini = ref(true);
  const logoutDialog = ref(false);
  const toast = useToast()
  
  const toggleSidebar = () => {
    mini.value = !mini.value;
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
  
    if (!mini.value) {
      sidebar.style.width = "250px";
      main.style.marginLeft = "250px";
    } else {
      sidebar.style.width = "85px";
      main.style.marginLeft = "85px";
    }
  };
  
  const closeSiderbar = () => {
    emit('toggle-active');
    props.isActive = !props.isActive;
  };
  
  const isActiveLink = (path) => {
    if (path === '/') {
      return route.path === path;
    }
    return route.path.startsWith(path);
  };
  
  const emit = defineEmits(['toggle-active']);
  
  // store
  const authStore = useAuthStore();
  const { token } = storeToRefs(authStore);
  
  const logout = async () => {
    try {
      const res = await authStore.logoutHandler();
      if (res.status === "success") {
        toast.add({ severity: 'success', summary: 'Success', detail: res.msg });
      } else {
        toast.add({ severity: 'error', summary: 'Error', detail: res.msg });
      }
      localStorage.clear();
      router.push('/login');
    } catch (error) {
      toast.add({ severity: 'error', summary: 'Error', detail: 'Logout failed' });
    }
  }
  
  // Scroll to the middle of the previously clicked link on mount
  const scrollToClickedLink = () => {
    const clickedLinkPath = localStorage.getItem('clickedLinkPath');
    if (clickedLinkPath) {
      const target = document.querySelector(`.link[to='${clickedLinkPath}']`);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  };
  
  const saveScrollPosition = () => {
    const linksList = document.getElementById("mySidebar");
    if (linksList) {
      const scrollPosition = linksList.scrollTop;
      localStorage.setItem('sidebarScrollPosition', scrollPosition);
    }
  };
  
  const restoreScrollPosition = () => {
    const savedPosition = localStorage.getItem('sidebarScrollPosition');
    if (savedPosition !== null) {
      smoothScrollTo(savedPosition);
    }
  };
  
  // Smooth scroll function
  const smoothScrollTo = (position) => {
    const linksList = document.getElementById("mySidebar");
    if (linksList) {
      linksList.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };
  
  const handleRouteChange = () => {
    if (window.innerWidth <= 1250) {
      emit('toggle-active');
    }
  };
  
  watch(router, handleRouteChange);
  
  router.afterEach(() => {
    if (window.innerWidth <= 1250) {
      emit('toggle-active');
    }
  });
  
  onMounted(() => {
    restoreScrollPosition();
    scrollToClickedLink();
  });
  </script>
  
  <style scoped>
  .sidebar {
    height: 100%;
    width: 85px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111;
    transition: 0.5s;
    overflow-x: hidden;
    padding-top: 60px;
    white-space: nowrap;
  }
  
  .sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }
  
  .sidebar a:hover {
    color: #f1f1f1;
  }
  
  .material-icons,
  .icon-text {
    vertical-align: middle;
  }
  
  .material-icons {
    padding-bottom: 3px;
    margin-right: 30px;
  }
  
  #main {
    padding: 16px;
    margin-left: 85px;
    transition: margin-left 0.5s;
  }
  
  @media screen and (max-height: 450px) {
    .sidebar {
      padding-top: 15px;
    }
    .sidebar a {
      font-size: 18px;
    }
  }
  </style>
  