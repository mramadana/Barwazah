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
                                <input type="email" class="main_input validInputs" valid="email" name="email" v-model="email" @input="checkEmail" :placeholder="$t('Auth.enter_email')">
                            </div>

                            <button type="submit" class="custom-btn mr-auto"> 
                                {{ $t('Auth.send') }} 
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
    name: "Auth.restore_password",
    layout: false
});


/******************* Data *******************/





/******************* Plugins *******************/
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n({ useScope: 'global' });

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
const { user } = storeToRefs(store);

// success response

const forgetForm = ref(null);
const phone = ref('');
const loading = ref(false);
const errors = ref([]);

// countries
const selectedCountry = ref({});
const countries = ref([]);

/******************* Provide && Inject *******************/

/******************* Props *******************/

/******************* Methods *******************/

// Get All countries


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
    loading.value = true;
    const fd = new FormData(forgetForm.value);
    fd.append('country_code', selectedCountry.value.key);

    validate();

    if (errors.value.length) {
        errorToast(errors.value[0]);
        loading.value = false;
        errors.value = [];
    } else {

        await axios.post('forget-password-send-code', fd).then(res => {
            if (response(res) == "success") {
                user.value.phone = phone.value;
                user.value.country_code = selectedCountry.value.key;

                successToast(res.data.msg);
                navigateTo('/Auth/restorepassword-check-code');

            } else {
                errorToast(res.data.msg);
            }
            loading.value = false;
        }).catch(err => console.log(err));

    }
}


</script>

