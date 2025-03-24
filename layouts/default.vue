<template>
  <div>
    <LayoutHomeHeader :isHomePage="isIndexPage" />
    <LayoutSideBar @toggle-active="toggleActive" :isActive="isActive"/>
    <div :class="{ 'main-content': !isIndexPage }">
      <LayoutHeader @toggle-active="toggleActive"/>
      <slot />
    </div>
    <LayoutHomeFooter :isHomePage="isIndexPage" />
    <div class="overlay-sidebar" v-if="!isIndexPage" :class="{ 'show': isActive }" @click="toggleActive"></div>
  </div>
</template>

<script setup>
import LayoutHomeFooter from '@/components/layout/homefooter.vue';

  import { useI18n } from "vue-i18n";
  import { useRoute, useRouter } from "#vue-router";
  const isActive = ref(false);

  const { t } = useI18n();
  const route = useRoute();
  const router = useRouter();

  const isIndexPage = computed(() => {
    return route.path === "/" || route.path === "" || route.path === "index" || route.path === '/about' || route.path === '/privacy';
  });

  watchEffect(() => {
        useHead({
          title: `${t(route.name)}`,
        });
      });
    
  const toggleActive = () => {
    isActive.value = !isActive.value;
    console.log(isActive.value, "Dssssss");
  };

    const nuxtApp = useNuxtApp();
    const loading = ref(true);
    nuxtApp.hook("page:start", () => {
      loading.value = true;
    });
    nuxtApp.hook("page:finish", () => {
      loading.value = false;
    });
</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(.5rem);
}
</style>

