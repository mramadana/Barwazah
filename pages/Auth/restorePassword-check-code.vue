<template>
    <div class="container">
        <div class="auth-layout flex-column">
            <h1 class="main-title bold lg mb-5">{{ $t("Auth.forgot_password") }}</h1>
            <div class="layout-form md custom-width">
                <img src="@/assets/images/logo.svg" alt="logo" class="Auth-logo mb-5">
                
                <!-- start to steps component -->

                <GlobalSteps :activeSteps="[3, 2]" />
                <form @submit.prevent="verificationCode">
                    <div class="row">
                        <div class="col-12 col-md-8 mr-auto">


                            <div class="text-center mb-5">
                                <p class="main-title">{{ $t("Auth.send_code") }}</p>
                            </div>
    
                            <div class="layout-activate d-flex" dir="ltr">
                                <v-otp-input
                                ref="otpInput"
                                v-model:value="bindModal"
                                input-classes="otp-input"
                                separator=" "
                                :num-inputs="6"
                                :should-auto-focus="true"
                                :is-input-num="true"
                                />
                            </div>
    
                            <button type="submit" class="custom-btn mr-auto" :disabled="loading">
                               {{ $t('Auth.reset_password') }}
                               <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
                            </button>
    
                            <div class="new-sign mt-4 text-center">
                                {{ $t('Auth.havent_received_code') }}
                                <button type="button" @click="resendCode" :disabled="countStatus" :class="{'disabledClass' : countStatus}">{{ $t('Auth.resend_code') }}</button>
                            </div>
    
                            <div class="text-center mt-3 main-cl" v-if="countStatus">
                               <span>{{ countDown }} </span> : <span>00</span> 
                            </div>
    
    
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>


definePageMeta({
  name: "Auth.activation_code",
  layout: false
//   middleware: 'auth'
});


const countStatus = ref(false);
const countDown = ref(60);

const countDownTimer = () => {
    countStatus.value = true;
    if (countDown.value > 0) {
        setTimeout(() => {
            countDown.value -= 1;
            countDownTimer();
        }, 1000);
    } else {
        // Hide the countdown when countDown reaches 0
        countStatus.value = false; 
        countDown.value = 60;
    }
};


/******************* Import *******************/


import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' });

// OTP
import VOtpInput from "vue3-otp-input";

// success response
const { response } = responseApi();

// Toast
const { successToast, errorToast } = toastMsg();

// Axios
const axios = useApi();

// pinia store
import { useAuthStore } from '~/stores/auth';

/******************* Data *******************/

// Store
const store = useAuthStore();

const {user, hasTwoAccount, newemail} = storeToRefs(store);

const loading = ref(false);

const bindModal = ref("");

// verificationCode Function
const verificationCode = async () => {
    loading.value = true;
    const data = {
        // email: user.value.email,
        email: user.value.email? user.value.email : newemail.value,
        code: parseInt(bindModal.value),

        // accountType: user.value.accountType

        accountType: user.value.accountType ? user.value.accountType : 0
    };
    if (!bindModal.value) {
        errorToast(t(`validation.code`));
        loading.value = false;
    } else {
        try {
            const res = await axios.post("ConfirmCode", data);
            if (response(res) === "success") {
                navigateTo('/Auth/confirmPassword');
                localStorage.setItem('newCode', bindModal.value);
            } else {
                errorToast(res.data.message);
            }
        } catch (err) {
            errorToast(err.response.data.message);
        } finally {
            loading.value = false;
        }
    }
}

//  resendCode Function
const resendCode = async () => {
    try {
        const res = await axios.post(`SendCode?email=${user.value.email}&accountType=${user.value.accountType}`);
        if (response(res) === "success") {
            successToast(res.data.message);
            countStatus.value = true;
            countDownTimer();
        } else {
            errorToast(res.data.message);
        }
    } catch (err) {
        errorToast(err.response.data.message);
    }
}

onMounted(() => {
    countDownTimer();
});

</script>


