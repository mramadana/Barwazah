<template>
    <div>

        <LayoutSideBar @toggle-active="toggleActive" :isActive="isActive"/>

        <div class="main-content" :class="{ 'active': isActive }">
            <slot />
        </div>

    </div>
</template>

<script setup>
  import { useI18n } from "vue-i18n";
  import { useRoute } from "#vue-router";
  const isActive = ref(false);

  const { t } = useI18n();
  const route = useRoute();

  watchEffect(() => {
        useHead({
          title: `${t(route.name)}`,
        });
      });
    
  const toggleActive = () => {
    isActive.value = !isActive.value;
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

.fixed_class {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5000;
  transition: all 0.5s;
  transform: translate3d(0, 0, 0);
  height: 100vh;
  background-color: #000;
}
</style>



