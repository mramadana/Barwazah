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
                                <input type="email" class="main_input validInputs" valid="email" name="email" v-model="email" :placeholder="$t('Auth.enter_email')">
                            </div>

                            <div class="form-group" v-if="showPassword">
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

                                <button type="button" @click="signUp_dialog = true" class="custom-btn red-bg sm">{{ $t('Auth.create_account') }}</button>
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

        <!-- signUp dialog -->

        <Dialog v-model:visible="signUp_dialog" modal class="custum_dialog_width auth-daialog"
            :draggable="false">
            <div class="text-center">
                <h5 class="main-title sm blue mb-4"> اختر المنصة التي ترغب في ربط متجرك بها عبر تطبيق بروزه من خلال سوق تطبيقات سلة وزد.</h5>
                <div class="section-btns mt-4 mb-4">
                  
                    <button @click="() => { navigateToUrl('https://salla.com/'); signUp_dialog = false; }" class="typeSection salla">
                        <img src="@/assets/images/salla.svg" alt="">
                    </button>

                    <button @click="() => { navigateToUrl('https://zid.sa/'); signUp_dialog = false; }" class="typeSection zid">
                        <img src="@/assets/images/zid.svg" alt="">
                    </button>
                </div>
            </div>
        </Dialog>

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

        <!-- select nich -->

        <Dialog v-model:visible="checknich" modal class="custum_dialog_width without-close auth-daialog"
            :draggable="false">
            <div class="text-center">
                <h4 class="main-title bold mb-5">
                    قم بإختيار نوع القطاع اولا
                </h4>

            </div>
            <div class="form-group">

                <label class="label">القطاع</label>

                <div class="card flex justify-content-center dropdown_card">

                    <Dropdown v-if="stors?.length" v-model="selectedStore" display="chip" :options="stors" optionLabel="name" placeholder="اختر نوع القطاع"

                    :maxSelectedLabels="stors?.length" class="custum-dropdown" />

                    <Skeleton v-else width="100%" height="40px" />
                </div>

            </div>
            <button :disabled="!stors?.length" type="button" class="custom-btn sm mr-auto mb-4" @click="sendNiche">
                {{ $t("Auth.send") }}
                <span class="spinner-border spinner-border-sm" v-if="loadingSpecialization" role="status" aria-hidden="true"></span>
            </button>
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
    const { user } = storeToRefs(useAuthStore());
    const checkType = ref(false);
    const checkTypeNum = ref(null);
    const signUp_dialog = ref(false);
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

    const selectedStore = ref(null);

    const loadingSpecialization = ref(false);
    const checknich = ref(false);

    const stors = ref([]);

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
    const showPassword = ref(false);
    // validation Function
    const validate = () => {
        let allInputs = document.querySelectorAll('.validInputs');
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].value === '') {
                errors.value.push(t(`validation.${allInputs[i].getAttribute('valid')}`));
            }
        }
    }

    const handleTypeChange = () => {
        console.log('Selected type:', checkTypeNum.value);
        checkType.value = false;  // Close dialog after selection
        if (checkTypeNum.value) {
            showPassword.value = true;  // Show password after selecting radio
        }
    };

    const checkEmail = async () => {
        errors.value = [];
        loading.value = true;
        validate();
        
        if (errors.value.length) {
            loading.value = false;
            errorToast(errors.value[0]);
            return;
        }

        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email.value)) {
        //     errorToast(t('validation.invalid_email'));
        //     return;
        // }

        try {
            const response = await axios.get(`/CheckEmail?email=${email.value}`);
            if (response.data.key === 'success') {
                successToast(t('validation.right_email'));
                if (response.data.hasTwoAccounts) {
                    checkType.value = true;
                    checkTypeNum.value = null;
                } else {
                    showPassword.value = true;
                }
            } else {
                errorToast(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                errorToast(error.response.data.message);
            } else {
                errorToast(t('messages.something_wrong'));
            }
        } finally {
            loading.value = false;
        }
    };

    // login Function

    const login = async () => {
        if (!showPassword.value) {
            checkEmail();  // Run CheckEmail first
            return;
        }
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
                accountType: checkTypeNum.value || 0,
                device: {
                    DeviceId: device.value.DeviceId,
                    DeviceType: device.value.DeviceType,
                    ProjectName: device.value.ProjectName
                }
            };

            const response = await axios.post('/Login', requestData);
            
            if (response.data.statusCode === 200 && response.data.key === 'success') {
                successToast(response.data.message);
                await signInHandler(response.data);

                // Check conditions based on response data
                if (!response.data.hasNiche) {
                    checknich.value = true;  // Show niche selection if not present
                } else {
                    navigateTo('/');  // Navigate to home if niche exists
                }
            }
        } catch (error) {
            errorToast(error?.response?.data?.message || t('messages.something_wrong'));
        } finally {
            loading.value = false;
        }
    };

    // toggle password
    const togglePasswordVisibility = () => {
        passwordVisible.value = !passwordVisible.value
    }

    // input type

    
    const inputType = computed(() => {
      return passwordVisible.value ? 'text' : 'password';
    });

    watch(checknich, (newValue) => {
        if (newValue) {
            gentNiche();
        }
    });

    // get niche
    const gentNiche = async () => {
        try {
            const res = await axios.get(`/GetNiche`);
            if (response(res) === "success") {
                stors.value = res.data.data;
            } else {
                errorToast(res.data.msg);
            }
        } catch (err) {
            console.error(err);
            errorToast(t('messages.something_wrong'));
        } finally {
        }
    };

    // send niche
    const sendNiche = async () => {
        loadingSpecialization.value = true;
        if (!selectedStore.value) {
            loadingSpecialization.value = false;
            errorToast(t('يرجى اختيار القطاع اولا'));
            return;
        }
        try {
            const res = await axios.post(`/SelectNiche?userId=${user.value.id}&nicheId=${selectedStore.value.id}`);
            if (response(res) === "success") {
                checknich.value = false;
                successToast(res.data.message);
                loadingSpecialization.value = false;
                navigateTo('/');
            } else {
                errorToast(res.data.message);
            }
        } catch (err) {
            console.error(err);
            errorToast(t('messages.something_wrong'));
        } finally {
            loadingSpecialization.value = false;
        }
    };

    const navigateToUrl = (url) => {
        window?.open(url, '_blank');
    };
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
