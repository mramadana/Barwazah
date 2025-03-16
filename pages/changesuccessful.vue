<template>
    <div class="container">
        <div class="auth-layout flex-column">
            <!-- <h1 class="main-title bold lg mb-5">{{ $t("Auth.forgot_password") }}</h1> -->
            <div class="layout-form md custom-width">
                
                <img src="@/assets/images/logo.svg" alt="logo" class="Auth-logo mb-5">
                
                <!-- start to steps component -->
    
                <GlobalSteps :activeSteps="[1, 2, 0]" :stepsCount="3" />
    
                <p class="main-title bold mb-3">تم اعادة تعيين كلمة المرور لحسابك</p>
                
                <p class="main-title blue mb-5">برجاء تسجيل الدخول لحسابك بكلمة المرور الجديدة</p>

                <div class="d-flex">
                    <NuxtLink class="custom-btn md mr-auto" to="/settings">
                        العودة إلى حسابك
                    </NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: false
    });
</script>

