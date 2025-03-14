<template>
    <div class="container d-flex align-items-center justify-content-between gap-2 mb-4" v-if="!isHomePage">
        <div>
            <h3 class="main-title normal cl-red">{{ user?.fullName }}</h3>
            <h1 class="main-title bold main-cl">{{ $t("Auth.welcome") }}</h1>
        </div>
        <div class="navbar-btn"  @click="toggleActive">
            <i class="fas fa-bars"></i>
        </div>
    </div>
</template>

<script setup>

    const { user } = storeToRefs(useAuthStore());
    const isActive = ref(false);
    const emit = defineEmits(['toggle-active']);
    const router = useRouter();

    const toggleActive = () => {
        isActive.value = !isActive.value;
        emit("toggle-active");
    };

    const isHomePage = computed(() => {
      return router.currentRoute.value.path === '/' || router.currentRoute.value.path === '' || router.currentRoute.value.path === 'index' || router.currentRoute.value.path === '/about' || router.currentRoute.value.path === '/privacy';
    });
</script>