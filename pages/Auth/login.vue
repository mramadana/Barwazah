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

                                <button type="button" class="custom-btn red-bg sm" @click="checkType = true">{{ $t('Auth.create_account') }}</button>
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

        <!-- dialog for check if it Salla or zid -->

        <Dialog v-model:visible="checkType" modal class="custum_dialog_width without-close auth-daialog"
            :draggable="false">
            <div class="text-center">
                <h5 class="main-title sm blue mb-4"> يمكنك ربط متجرك مع تطبيق بروزه من خلال سوق تطبيقات سله و زد </h5>
                <h4 class="main-title bold mb-5">
                    متجرك على أي منصة؟
                </h4>
                <div class="section-btns mt-4 mb-5">
                  
                    <label class="typeSection salla">
                        <input type="radio" value="1" name="checkType" v-model="checkTypeNum" class="d-none" @change="handleTypeChange('salla')">
                        <img src="@/assets/images/salla.svg" alt="">
                    </label>

                    <label class="typeSection zid">
                        <input type="radio" value="2" name="checkType" v-model="checkTypeNum" class="d-none" @change="handleTypeChange('zid')">
                        <img src="@/assets/images/zid.svg" alt="">
                    </label>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script setup>

    definePageMeta({
        name: "Auth.login",
        layout: false
    })
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const checkType = ref(false);
    const checkTypeNum = ref(null);

    // success response
    const { response } = responseApi();

    // Toast
    const { successToast, errorToast } = toastMsg();

    // Axios
    const axios = useApi();

    const device = ref({
        "DeviceId" : "Test",
        "DeviceType": "Test",
        "ProjectName": "barwasah"
    });

    // Store
    const store = useAuthStore();
    const { signInHandler } = store;

    const loading = ref(false);
    const errors = ref([]);
    
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

    const handleTypeChange = (type) => {
        console.log('Selected type:', checkTypeNum.value);
        checkType.value = false; // Close dialog after selection
    };

    // login Function

    const login = async () => {
        loading.value = true;
        errors.value = [];
        
        validate();
        
        if (errors.value.length) {
            loading.value = false;
            errorToast(errors.value[0]);
            return;
        }

        try {
            const requestData = {
                email: email.value,
                password: password.value,
                device: {
                    DeviceId: device.value.DeviceId,
                    DeviceType: device.value.DeviceType,
                    ProjectName: device.value.ProjectName
                }
            };

            const response = await axios.post('/Login', requestData);
            
            if (response.data.statusCode == 200 && response.data.key == "success") {
                successToast(response.data.message);
                await signInHandler(response.data);
                console.log(response.data.hasTwoAccounts, "hasTwoAccounts");
                if (response.data.hasTwoAccounts) {
                    checkType.value = true;
                    return;
                }
                // navigateTo("/");
                // successToast(response.data.message);
            }
        } catch (error) {
            errorToast(error?.response?.data?.message || t('messages.something_wrong'));
        } finally {
            loading.value = false;
        }
    };




    // const login = async () => {
    //     navigateTo("/");
    // }

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
    .typeSection {
        padding: 20px;
        border-radius: 10px;
        width: 133px;
        height: 54px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &.salla {
            background-color: #004956;
        }
        &.zid {
            background-color: #802BE7;
        }
    }
</style>
