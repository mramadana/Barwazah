<template>
    <div class="container">
        <div class="auth-layout flex-column">
            <h1 class="main-title bold lg mb-5">{{ $t("Auth.forgot_password") }}</h1>
            <div class="layout-form md custom-width">

                <img src="@/assets/images/logo.svg" alt="logo" class="Auth-logo mb-5">

                <!-- start to steps component -->
                 
                <GlobalSteps :activeSteps="[3]" />

                <form @submit.prevent="forgetPassword" ref="forgetForm">
                    <div class="row">
                        <div class="col-12 col-md-10 mr-auto">
                            <div class="mb-4">
                                <p class="main-title">{{ $t("Auth.get_code") }}</p>
                            </div>
    
                            <div class="form-group mb-5">
                                <label class="label">
                                    {{ $t('Auth.email') }}
                                </label>
                                <input type="email" class="main_input validInputs" valid="email" name="email" v-model="email" :placeholder="$t('Auth.enter_email')">
                            </div>

                            <button type="submit" class="custom-btn mr-auto"> 
                                {{ $t('Auth.send') }} 
                                <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </form>

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
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    name: "Auth.restore_password",
    layout: false
});


/******************* Data *******************/

import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n({ useScope: 'global' });




/******************* Plugins *******************/

// success response
const { response } = responseApi();

// Toast
const { successToast, errorToast } = toastMsg();

// Axios
const axios = useApi();

// pinia store
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';

/******************* Data *******************/

// Store
const store = useAuthStore();
const { user, hasTwoAccount } = storeToRefs(store);

// success response

const forgetForm = ref(null);
const checkType = ref(false);
const checkTypeNum = ref(null);
const loading = ref(false);
const errors = ref([]);

// countries
const selectedCountry = ref({});
const countries = ref([]);

/******************* Provide && Inject *******************/

/******************* Props *******************/

/******************* Methods *******************/


    // validate Func
    function validate() {
        let allInputs = document.querySelectorAll('.validInputs');
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].value === '') {
                errors.value.push(t(`validation.${allInputs[i].name}`));
            }
        }
    }

    // forgetPassword Function
    const forgetPassword = async () => {
        try {
            loading.value = true;
            const fd = new FormData(forgetForm.value);
            validate();

            if (errors.value.length) {
                errorToast(errors.value[0]);
                return;
            }

            const email = encodeURIComponent(fd.get('email'));
            const res = await axios.post(`SendCode?email=${email}`);
            if (response(res) === "success") {
                user.value.email = fd.get('email');
                successToast(res.data.message);
                hasTwoAccount.value = res.data.hasTwoAccounts;
                if (res.data.hasTwoAccounts) {
                    checkType.value = true;
                } else {
                    navigateTo('/Auth/restorepassword-check-code');
                }
            } else {
                errorToast(res.data.msg);
            }
        } catch (err) {
            console.error(err);
            loading.value = true;
            errorToast('An error occurred. Please try again.');
        } finally {
            loading.value = false;
            errors.value = [];
        }
    }

    // Handle radio button selection
    const handleTypeChange = async (type) => {
        try {
            const email = encodeURIComponent(user.value.email);
            const accountType = type === 'salla' ? 1 : 2;
            
            const res = await axios.post(`SendCode?email=${email}&accountType=${accountType}`);
            if (response(res) === "success") {
                successToast(res.data.message);
                checkType.value = false;
                user.value.accountType = accountType;
                navigateTo('/Auth/restorepassword-check-code');
                console.log(user.value, "new user");
            } else {
                errorToast(res.data.msg);
            }
        } catch (err) {
            console.error(err);
            errorToast('An error occurred. Please try again.');
        } finally {
        }
    };

</script>
