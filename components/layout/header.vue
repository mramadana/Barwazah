<template>
    <div class="container d-flex align-items-center justify-content-between gap-2 mb-4">
        <div>
            <h3 class="main-title normal main-cl">{{ user.fullName }}</h3>
            <h1 class="main-title bold cl-red">{{ $t("Auth.welcome") }}</h1>
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

    const toggleActive = () => {
        isActive.value = !isActive.value;
        emit("toggle-active");
    };
</script>