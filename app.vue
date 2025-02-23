<template>
  <div>
    <NuxtLayout>
      <NuxtPage /> <!-- this Nuxtpage is = Routerview in Nuxt3-->
    </NuxtLayout>
    <Toast />
  </div>
</template>

<script>
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
