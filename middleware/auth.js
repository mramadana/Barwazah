
// pinia store
import { useAuthStore } from "~/stores/auth";
export default defineNuxtRouteMiddleware((to, from) => {

    // Store
    // const store = useAuthStore();
    const { token } = storeToRefs(useAuthStore());
  
    // Toast
    const { errorToast } = toastMsg();
  
    // get i18n t
    const nuxtApp = useNuxtApp();
    const t = nuxtApp.vueApp.config.globalProperties.$t;
  
    if (token.value === null && to.meta.middleware == "auth") {

      errorToast(t("validation.requiresAuth"));

      return navigateTo("/Auth/login");
    }
})