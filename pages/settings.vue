<template>
    <div>
      <div class="container">

        <div class="row">

          <!-- First Card -->
          <div class="col-12 col-md-6 mb-4">
            <div class="settings-card info">
              <div class="store-image">
                <img onerror="this.src='main-logo.jpg'" :src="settingsData?.storeImage" alt="Store Logo" />
              </div>
              <div class="store-info">
                <div class="store-name d-flex align-items-center">المتجر:
                  <Skeleton class="ms-3" v-if="settingsData?.length || loading" width="5rem" height=".5rem"></Skeleton>
                  <span class="ms-2" v-else>{{ settingsData?.storeName }}</span>
                </div>

                <div class="progress-container mb-2" v-if="!settingsData?.length && !loading">
                  <div class="progress-bar-side">
                    <div class="progress-fill" :style="{ width: settingsData?.classificationPercentage + '%' }"></div>
                  </div>
                </div>

                <div class="store-category d-flex align-items-center"> 
                  الفئة:  
                  <Skeleton class="ms-3" v-if="settingsData?.length || loading" width="5rem" height=".5rem"></Skeleton>
                  <span class="ms-2" v-else>{{ settingsData?.storeClassification }}</span>
                </div>

              </div>
            </div>
          </div>

          <!-- Second Card with Social Icons -->
          <div class="col-12 col-md-6 mb-4">
            <div class="settings-card black info">
              <div class="store-image">
              </div>
              <div class="store-info">
                <div class="store-name mb-2">التاجر: {{ settingsData?.userName }}</div>
                <div class="social-icons">
                  <a :href="settingsData?.instagram" v-if="settingsData?.instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                  <a class="twitter" :href="settingsData?.twitter" v-if="settingsData?.twitter" target="_blank">
                    <img src="@/assets/images/x-twitter.svg" alt="twitter">
                  </a>
                  <a :href="settingsData?.snapchat" v-if="settingsData?.snapchat" target="_blank"><i class="fab fa-snapchat-ghost"></i></a>
                  <a :href="settingsData?.facebook" v-if="settingsData?.facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Additional Settings Cards -->
         <div class="mb-5">
           <div class="row layout-form chart_layout accordion accordion-flush m-0">
   
             <div class="col-12 col-xl-4 col-md-6 mb-4">
   
               <div class="accordion-item">
                   <h2 class="accordion-header">
                       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne'" aria-expanded="false" :aria-controls="'flush-collapseOne'">
                           <span class="hint-accordion">رقم الهاتف</span>
                       </button>
                   </h2>
                   <div :id="'flush-collapseOne'" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                       <div class="accordion-body">
                           {{ settingsData?.phoneNumber }}
                       </div>
                   </div>
                </div>
                 
             </div>
   
             <div class="col-12 col-xl-4 col-md-6 mb-4">
               
               <div class="accordion-item">
                 <h2 class="accordion-header">
                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSector" aria-expanded="false" aria-controls="flush-collapseSector">
                     <span class="hint-accordion">القطاع الخاص بك</span>
                   </button>
                 </h2>
                 <div id="flush-collapseSector" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                   <div class="accordion-body">
                     {{ settingsData?.nisheName }}
                   </div>
                 </div>
               </div>
   
             </div>
   
             <div class="col-12 col-xl-4 col-md-6 mb-4">
               <div class="accordion-item">
                 <h2 class="accordion-header">
                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEmail" aria-expanded="false" aria-controls="flush-collapseEmail">
                     <span>البريد الإلكتروني</span>
                   </button>
                 </h2>
                 <div id="flush-collapseEmail" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                   <div class="accordion-body">
                     {{ settingsData?.email }}
                   </div>
                 </div>
               </div>
             </div>
   
             <div class="col-12 col-xl-4 col-md-6 mb-4">
               <div class="settings-card blue-bg" @click="changePassword_dialog = true">
                 <div class="card-content">
                   <span class="card-label">تغيير كلمة السر</span>
                 </div>
                 <button class="edit-button">***</button>
               </div>
             </div>
           </div>
         </div>
      </div>

      <!-- Password Dialog -->
      <Dialog v-model:visible="changePassword_dialog" modal class="custum_dialog_width auth-daialog" :draggable="false">
          <div class="text-center">
              <h1 class="main-title bold mb-5">
                  {{ $t("Auth.change_password") }}
              </h1>
              <form @submit.prevent="forgetPassword" ref="forgetForm">
                  <div class="form-group">
                    <label class="label">
                        {{ $t('Auth.email') }}
                    </label>
                    <input type="email" class="main_input validInputs" valid="email" name="email" v-model="email" :placeholder="$t('Auth.enter_email')">
                  </div>
                  <div class="section-btns mt-4">
                      <button type="submit" class="custom-btn sm d-inline-flex">
                          {{ $t("Auth.confirmation") }}
                          <span class="spinner-border spinner-border-sm" v-if="formloading" role="status" aria-hidden="true"></span>
                      </button>
                  </div>
              </form>
          </div>
      </Dialog>

  
      <!-- Logout Dialog -->
      <Dialog v-model:visible="deleteAcount" modal class="custum_dialog_width" :draggable="false">
        <div class="text-center">
          <h1 class="main-title bold mb-4">{{ $t("Global.sure_delete_account") }}</h1>
          <h1 class="main-title normal mb-4">{{ $t("Global.delete_account_info") }}</h1>
          <div class="section-btns mt-5">
            <button type="button" class="custom-btn sm d-inline-flex" @click="deleteAcount = false">
              {{ $t("Home.retreat") }}
            </button>
            <button type="button" class="custom-btn logout sm d-inline-flex" @click="deletedAcount">
              {{ $t("Global.delete") }}
            </button>
          </div>
        </div>
      </Dialog>

    </div>
  </template>
  
  <script setup>
  definePageMeta({
    name: "Sidebar.settings",
    middleware: "auth",
    layout: 'default'
  });
  
  // Pinia store
  import { useAuthStore } from "~/stores/auth";
  const { token, user, newemail } = storeToRefs(useAuthStore());
  const store = useAuthStore();
  const { response } = responseApi();
  const { successToast, errorToast } = toastMsg();
  const axios = useApi();
  const { deleteAccountHandler } = store;

  // ******************** Data ********************
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n({ useScope: 'global' });
  const email = ref("");
  const forgetForm = ref(null);
  const formloading = ref(false);
  const errors = ref([]);
  const loading = ref(true);
  const delete_Successfully = ref(false);
  const deleteAcount = ref(false);
  const settingsData = ref({});

  // start to make variables of dialogs
  const changePassword_dialog = ref(false);

  // config
  const config = computed(()=> {
      return { headers: { Authorization: `Bearer ${token.value}` } }
  });

  //  ************************** method **************************

  // validate Func
  function validate() {
      let allInputs = document.querySelectorAll('.validInputs');
      for (let i = 0; i < allInputs.length; i++) {
          if (allInputs[i].value === '') {
              errors.value.push(t(`validation.${allInputs[i].name}`));
          }
      }
  }

  const getSettings = async () => {
    loading.value = true;
    await axios.get(`SettingHome`, config.value).then(res => {
    if (response(res) == "success") {
        settingsData.value = res.data.data;
        console.log(settingsData.value, "settingsData");
    }   
    loading.value = false;
    }).catch(err => {
        console.error(err);
    });
  };

  const forgetPassword = async () => {
        try {
            formloading.value = true;
            const fd = new FormData(forgetForm.value);
            validate();

            if (errors.value.length) {
                errorToast(errors.value[0]);
                return;
            }

            const res = await axios.post(`SendCode?email=${email.value}&accountType=${user.value.platformType}`);
            if (response(res) === "success") {
                successToast(res.data.message);
                navigateTo('/emailActivateCode');
                newemail.value = email.value;
            } else {
                errorToast(res.data.msg);
            }
        } catch (err) {
            console.error(err);
            formloading.value = true;
            errorToast('An error occurred. Please try again.');
        } finally {
            formloading.value = false;
            errors.value = [];
        }
  }

  onBeforeMount( async () => {
      await getSettings();
  });
  
  const deletedAcount = async () => {
    delete_Successfully.value = true;
    deleteAcount.value = false;
    localStorage.clear();
  
    const res = await deleteAccountHandler();
    res.status == "success" ? successToast(res.msg) : errorToast(res.msg);
    navigateTo("/Auth/register");
  };
  </script>
  
  <style scoped lang="scss">
    .social-icons {
      display: flex;
      gap: 15px;
    
      a {
        color: white;
        font-size: 1.2rem;
      }
    }
    
    .settings-card {
      background-color: var(--wh);
      border-radius: 10px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      &.info {
        height: 100%;
        margin-bottom: 30px;
      }
      @media (max-width: 768px) {
        gap: 15px;
      }
      .store-name {
        font-size: 1.4rem;
        color: #013660;
        margin-bottom: 20px;
        @media (max-width: 768px) {
          font-size: 1.1rem;
          margin-bottom: 15px;
        }
      }
      .store-category {
        font-size: 1rem;
        color: #5F819D;
      }
      &.black {
        background: #2d2d2d;
        color: #fff !important;
    
        .store-name {
          color: #fff;
        }
      }
    
      &.blue-bg {
        padding: 5px 10px;
        background: rgb(238, 246, 254);
        cursor: pointer;
      }
    
      .store-image img {
        width: 120px;
        height: 120px;
        border-radius: 12px;
        object-fit: cover;
        @media (max-width: 768px) {
          width: 90px;
          height: 90px;
        }
      }
    
      .card-content .card-label {
        color: #ff385c;
        font-weight: 500;
      }
    
      .edit-button {
        background: none;
        border: none;
        color: #ff385c;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 5px 10px;
    
        &:hover {
          opacity: 0.8;
        }
      }
    }

    .hint-accordion {
      font-size: 1rem;
    }
  </style>
  