<template>
    <div class="container">
        <div class="auth-layout flex-column">
            <h1 class="main-title bold lg mb-5">{{ $t("Auth.forgot_password") }}</h1>
            <div class="layout-form md custom-width">
                
                <img src="@/assets/images/logo.svg" alt="logo" class="Auth-logo mb-5">
                
                <!-- start to steps component -->
    
                <GlobalSteps :activeSteps="[3, 2, 1]" />
    
                <form @submit.prevent="submitData" ref="confirmPasswordForm">
                    <div class="row">
                        <div class="col-12 col-md-10 mr-auto">

                            <p class="main-title bold mb-4">{{ $t("Auth.new_password") }}</p>

                            <div class="form-group">
                                <label class="label">
                                    {{ $t('Auth.password_2') }}
                                </label>
                                <div class="main_input with_icon">
                                    <input :type="inputType('definitelyNewPassword')" name="password" v-model="password" class="custum-input-icon validInputs" :placeholder=" $t('Auth.password_2') ">
                                    <button class="static-btn with_eye" type="button" @click="togglePasswordVisibility('definitelyNewPassword')" :class="{ 'active_class': passwordVisible.definitelyNewPassword }">
                                    <i class="far fa-eye icon"></i>
                                    </button>
                                </div>
                            </div>
    
                            <div class="form-group">
                                <label class="label">
                                    {{ $t('Auth.confirm_password') }}
                                </label>
                                <div class="main_input with_icon">
                                    <input :type="inputType('definitelyNewPassword_2')" name="password_confirmation" v-model="confirmPassword" class="custum-input-icon validInputs" :placeholder=" $t('Auth.confirm_password') ">
                                    <button class="static-btn with_eye" type="button" @click="togglePasswordVisibility('definitelyNewPassword_2')" :class="{ 'active_class': passwordVisible.definitelyNewPassword_2 }">
                                    <i class="far fa-eye icon"></i>
                                    </button>
                                </div>
                            </div>
    
                            <button class="custom-btn mr-auto">
                                {{ $t('Auth.save') }}
                                <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
                            </button>
    
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        name: "Auth.new_password",
        layout: false
    });

    const { t } = useI18n({ useScope: 'global' });
    import { useI18n } from 'vue-i18n';
    const errors = ref([]);
    const password = ref('');
    const confirmPassword = ref('');
    const { response } = responseApi();
    const { successToast, errorToast } = toastMsg();
    const axios = useApi();
    const store = useAuthStore();
    const { user } = storeToRefs(store);
    const loading = ref(false);
    const confirmPasswordForm = ref(null);
    const passwordVisible = ref({
        definitelyNewPassword: false,
        definitelyNewPassword_2: false
    });

    // Validation Function
    function validate() {
        let allInputs = document.querySelectorAll('.validInputs');
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].value === '') {
                errors.value.push(t(`validation.${allInputs[i].name}`));
            }
        }
    }

    const inputType = (input) => {
        return passwordVisible.value[input] ? 'text' : 'password';
    };

    const togglePasswordVisibility = (input) => {
        passwordVisible.value[input] = !passwordVisible.value[input];
    };

    const submitData = async () => {
        validate();
        if (errors.value.length) {
            errorToast(errors.value[0]);
            return;
        }
        
        loading.value = true;
        try {
            const data = {
                accountType: user.value.accountType,
                email: user.value.email,
                oldPassword: password.value,
                newPassword: confirmPassword.value
            };
            
            const res = await axios.post("ChangePassword", data);
            if (response(res) === "success") {
                successToast(t('Auth.confirm_new_password'));
                navigateTo('/Auth/passwordResets');
            } else {
                errorToast(res.data.message);
            }
        } catch (err) {
            console.error(err);
            errorToast('An error occurred. Please try again.');
        } finally {
            loading.value = false;
        }
    };
</script>

