<template>
    <div class="container">
        <div class="auth-layout flex-column">
            <h1 class="main-title bold lg mb-5">{{ $t("Auth.welcome") }}</h1>
            <div class="layout-form md custom-width">
                <img src="@/assets/images/logo.svg" alt="logo" class="Auth-logo mb-4">
                <form @submit.prevent="login" ref="loginForm">
                    <div class="row">
                        <div class="col-12 col-md-10 mr-auto">
                            <h2 class="main-title lg mb-4">{{ $t("Auth.register_store") }}</h2>
                            
                            <div class="form-group">
                                <label class="label">
                                    {{ $t('Auth.email') }}
                                </label>
                                <input type="email" class="main_input validInputs" valid="email" name="email" v-model="email" @input="checkEmail" :placeholder="$t('Auth.enter_email')">
                            </div>

                            <div class="form-group">
                                <label class="label">
                                    {{ $t('Auth.password') }} 
                                </label>
                                <div class="main_input with_icon">
                                    <input :type="inputType" class="custum-input-icon validInputs" valid="password" name="password" v-model="password"
                                        :placeholder="$t('Auth.enter_password')">
                                    <button class="static-btn with_eye" type="button" @click="togglePasswordVisibility"
                                        :class="{ 'active_class': passwordVisible }">
                                        <i class="far fa-eye icon"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="section-btns mt-5 justify-content-start">

                                <button type="submit" class="custom-btn sm" :disabled="loading">
                                    {{ $t('Auth.login') }}
                                    <span class="spinner-border spinner-border-sm" v-if="loading" role="status"
                                            aria-hidden="true"></span>
                                </button>

                                <nuxt-link class="custom-btn red-bg sm" to="/Auth/register" >{{ $t('Auth.create_account') }}</nuxt-link>
                            </div>
    
                            <div class="new-sign mt-4 text-start">
                                {{ $t('Auth.forget_password') }}
                                <nuxt-link to="restorePassword" >{{ $t('Auth.restore_password') }}</nuxt-link>
                            </div>

                            <!-- <NuxtImg format="webp" src="/ramadan.jpg"  width="100" height="100"/>                            
                            <img src="@/assets/images/ramadan.jpg" style="width: 100px; height: 100px;" />                             -->
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { useI18n } from 'vue-i18n';

    definePageMeta({
        name: "Auth.login",
        layout: false
    })

    const { t } = useI18n();

    // success response
    const { response } = responseApi();

    // Toast
    const { successToast, errorToast } = toastMsg();

    // Axios
    const axios = useApi();


    // Store
    const store = useAuthStore();
    const { signInHandler } = store;

    const loading = ref(false);
    const errors = ref([]);
    
    // countries
    const selectedCountry = ref({})
    const countries = ref([]);
    const loginForm = ref(null);
    const phone = ref('');
    const email = ref('');
    const password = ref('');
    const passwordVisible = ref(false);

    // validation Function
    const validate = () => {
        let allInputs = document.querySelectorAll('.validInputs');
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].value === '') {
                errors.value.push(t(`validation.${allInputs[i].getAttribute('valid')}`));
            }
        }
    }

    const checkPhone = () => {
        if(phone.value !== '') {
           email.value = null
        }
    };

    const checkEmail = () => {
        if(email.value !== '') {
           phone.value = null
        }
    };


    // login Function
    const login = async () => {
        loading.value = true;
        const fd = new FormData(loginForm.value);
        fd.append('country_code', selectedCountry.value.key);
        fd.append('device_id', 111);
        fd.append('device_type', 'web');

        if(phone.value) {
            fd.append('phone_email', phone.value);
            console.log(phone.value, "phone");
        } else if(email.value) {
            fd.append('phone_email', email.value);
            console.log(email.value, "email");
        };

        // fd.append('device_id', notificationToken.value);

        validate();

        if (errors.value.length) {
            errorToast(errors.value[0]);
            loading.value = false;
            errors.value = [];
        } else {

            loading.value = true;

            // Get Returned Data From Store
            const res = await signInHandler(fd);
            res.status == "success" ? successToast(res.msg) : errorToast(res.msg);

            loading.value = false;
        }
    }

    // toggle password
    const togglePasswordVisibility = () => {
        passwordVisible.value = !passwordVisible.value
    }

    // input type

    
    const inputType = computed(() => {
      return passwordVisible.value ? 'text' : 'password';
    });
</script>



<style lang="scss">
    .login-text {
        position: relative;
        z-index: 1;
    }
    .login-shape {
        width: 200px;
        padding: 6px 10px;
        text-align: center;
        border: 1px solid var(--main);
        color: var(--main);
        border-radius: 10px;
        transition: all 0.5s ease-in-out;
        overflow: hidden;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            transition: all 0.5s linear;
            background-color: var(--main) !important;
            color: #fff !important;
            top: 0px;
            left: 0;
            z-index: -1;
            transform: scaleX(0);
        }
        &:hover {
            color: #fff !important;
            &::before {
                transform: scaleX(1);
                z-index: 1;
            }
        }
        &.active {
            color: #fff;
            &::before {
                transform: scale(1);
                z-index: 1;
            }
        }
    }

    .tab-btns-login {
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
        .nav-link {
        line-height: 20px;
        padding: 10px;
        width: auto;
        min-width: 130px;
        font-size: 14px;
        &.active {
            background-color: unset;
            color: #fff;
            &::before {
            transform: scale(1);
            color: #fff;
            }
        }
        }
    }
</style>
