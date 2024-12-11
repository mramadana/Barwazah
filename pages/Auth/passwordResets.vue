<template>
    <div>
        <div class="container">
        <div class="auth-layout flex-column">
            <h1 class="main-title bold lg mb-5">{{ $t("Auth.forgot_password") }}</h1>
            <div class="layout-form md custom-width">
                
                <img src="@/assets/images/logo.svg" alt="logo" class="Auth-logo mb-5">

                <GlobalSteps :activeSteps="[3, 2, 1, 0]" />
                
                <h1 class="main-title bold lg mb-4">{{ $t("Auth.password_reset") }}</h1>
                
                <h1 class="main-title mb-5 main-cl">{{ $t("Auth.sign_with_new_password") }}</h1>

                <div class="d-flex">
                    <NuxtLink to="/Auth/login" class="custom-btn mr-auto">{{ $t('Auth.login') }}</NuxtLink>
                </div>

            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
    definePageMeta({
        name: "Auth.password_2",
        layout: false
    });
</script>