<template>
    <div class="defaultLayout">
        <header class="header" :class="headerClass">
            <div class="container">
                <div class="inner-header">
                    <span class="hint-header"
                        >{{ $t("Home.Welcome_Amial_website") }}
                    </span>
                    <div class="dropdown drop-lang">
                        <a
                            class="dropdown-toggle hint-lang"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <i class="fas fa-globe icon"></i>
                            <div v-if="htmlLang == ''">
                                <p>العربية</p>
                            </div>
                            <div v-else>
                                <p>
                                    {{
                                        htmlLang === "ar"
                                            ? "العربية"
                                            : "english"
                                    }}
                                </p>
                            </div>
                        </a>

                        <ul class="dropdown-menu">
                            <button
                                class="dropdown-item"
                                @click="switchLang('ar')"
                            >
                                العربيه
                            </button>
                            <button
                                class="dropdown-item"
                                @click="switchLang('en')"
                            >
                                English
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="nav-header">
                <div class="container">
                    <div class="inner">
                        <nuxtLink to="/" class="logo">
                            <img
                                src="@/assets/images/logo.svg"
                                alt="logo"
                            />
                        </nuxtLink>
                        <ul
                            class="nav-links"
                            :class="{ active: navLinksActive }"
                        >
                            <li>
                                <NuxtLink to="/" class="link">
                                    {{ $t("Home.home") }}
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/aboutSite" class="link">
                                    {{ $t("Home.about_site") }}
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/connectUs" class="link">
                                    {{ $t("Home.connect_us") }}
                                </NuxtLink>
                            </li>
                        </ul>

                        <div class="left">
                            <button class="dropdown dropdown-profile" v-if="isLoggedIn">
                                <div
                                    class="profile-hint"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img
                                        :src="user.image"
                                        alt="user-image"
                                        class="user-image"
                                    />
                                    <NuxtImg format="webp" :src="user.image"  width="40" height="40" />
                                    <p class="user-name">{{ user.name }}</p>
                                </div>
                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <nuxt-link
                                        class="dropdown-item"
                                        to="/profile"
                                        >{{
                                            $t("Home.profile_personly")
                                        }}</nuxt-link
                                    >
                                    <nuxt-link
                                        class="dropdown-item"
                                        to="/settings"
                                        >{{ $t("Home.settings") }}</nuxt-link
                                    >
                                    <nuxt-link
                                        class="dropdown-item"
                                        to="/Wallet"
                                        >{{ $t("Home.portfolio") }}</nuxt-link
                                    >
                                    <nuxt-link
                                        class="dropdown-item"
                                        to="/myorders"
                                        >{{ $t("Home.myrequests") }}</nuxt-link
                                    >
                                    <div
                                        type="button"
                                        @click="logoutDialog = true"
                                        class="dropdown-item"
                                    >
                                        {{ $t("Home.logout") }}
                                    </div>
                                    <!-- <nuxt-link class="dropdown-item" to="/Auth/login">{{ $t("Home.logout") }}</nuxt-link> -->
                                </ul>
                            </button>

                            

                            <NuxtLink v-if="isLoggedIn"
                                to="/Notifications"
                                class="notification">
                                <div class="notif-icon">
                                    <i class="fas fa-bell"></i>
                                    <div class="nof-cont" v-if="notifCount" :data-number="notifCount"></div>
                                </div>
                            </NuxtLink>

                            <nuxt-link class="btn-login" to="/Auth/login" v-if="!isLoggedIn">
                                <i class="fas fa-sign-in-alt sign-icon"></i>
                                <span class="login-text">{{
                                    $t("Auth.login")
                                }}</span>
                            </nuxt-link>
                            <button
                                class="nav-btn"
                                @click="handleClick"
                                :class="{ active: navBtnActive }"
                            >
                                <span></span><span></span><span></span>
                            </button>
                            <div
                                class="nav-overlay"
                                @click="handleOverlayClick"
                                :class="{ show: navOverlayShow }"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- logout Dialog -->
        <Dialog
            v-model:visible="logoutDialog"
            modal
            class="custum_dialog_width"
            :draggable="false"
        >
            <div class="text-center">
                <!-- <img
                    src="@/assets/images/noun_warning.png"
                    alt="check-img"
                    class="check-img"
                /> -->
                <h1 class="main-title bold mb-4">
                    {{ $t("Global.sure_logout") }}
                </h1>
                <div class="section-btns mt-5">
                    <button
                        type="button"
                        class="custom-btn sm d-inline-flex"
                        @click="logoutDialog = false"
                    >
                        {{ $t("Home.retreat") }}
                    </button>
                    <button
                        type="button"
                        class="custom-btn logout sm d-inline-flex"
                        @click="logout"
                    >
                        {{ $t("Home.logout") }}
                    </button>
                </div>
            </div>
        </Dialog>
    </div>
</template>


<script setup>

    import { useAuthStore } from '~/stores/auth';
    import { useGlobalStore } from '~/stores/global';
    
    // Toast
    const { successToast, errorToast } = toastMsg();

    // Axios
    const axios = useApi();
    
    // store
    const store = useAuthStore();

    const globalStore = useGlobalStore();

    const { user, isLoggedIn, token } = storeToRefs(store);


    const { response } = responseApi();

    const { logoutHandler } = store;
    // notifications
    const notifCount = ref(null);
    const logoutDialog = ref(false);

    // config
    let config = {
    headers: {
        Authorization: `Bearer ${token.value}`
    }
};
    const logout = async () => {
        
        // Get Returned Data From Store

        logoutDialog.value = false;
        const res = await logoutHandler();
        res.status == "success" ? successToast(res.msg) : errorToast(res.msg);
        localStorage.clear();
    }

    // notifCount

    // get notifications Count
    const getNotificationsCount = async () => {
        await axios.get('count-notifications', config).then(res => {
            if(response(res) == "success") {
                notifCount.value = res.data.data.count;
            }
        }).catch(err => {
            console.error(err);
        });
    };

    // watch token To Get The New User Data
    watch(token, async (newVal) => {
    if (newVal) {
        config = {
            headers: {
                Authorization: `Bearer ${newVal}`
            }
        }

        getNotificationsCount();
    } else {
        notifCount.value = 0;
    }
    });

    watch(notifCount, (newValue, oldValue) => {
      // If notifCount becomes empty or not 0, hide the element
      if (newValue == 0) {
        notifCount.value = null;
      }
    });

    const router = useRouter();

    router.afterEach(() => {
      getNotificationsCount();
      
    });

    onMounted( async () => {
       await getNotificationsCount();
    });
    
</script>

<script>

    export default {
        data() {
            return {
                htmlLang: "",
                navBtnActive: false,
                navLinksActive: false,
                navOverlayShow: false,
                isActive: false,
            };
        },

        methods: {

            chageDir(dir) {
                let element = document.querySelector(".html_direction");
                element.setAttribute("lang", dir);
                if (dir === "ar") {
                    element.setAttribute("dir", "rtl");
                    this.htmlLang = dir;
                }
                if (dir === "en") {
                    element.setAttribute("dir", "ltr");
                    this.htmlLang = dir;
                }
            },
            switchLang(newLang) {
                const lang = useCookie('lang')
                if (newLang !== localStorage.getItem("locale")) {
                    lang.value = newLang
                    localStorage.setItem("locale", newLang);
                    location.reload();
                }
            },

            handleClick() {
                this.navBtnActive = true;
                this.navLinksActive = true;
                this.navOverlayShow = true;
            },

            handleOverlayClick() {
                this.navBtnActive = false;
                this.navLinksActive = false;
                this.navOverlayShow = false;
            },
        },

        watch: {
        // Watch for changes in the route
        
        $route(to, from) {
        // Handle the event here
        console.log("Route changed:", to, from);
        this.handleOverlayClick();
        },
    },

        async mounted() {
            let sessionKey = localStorage.getItem("locale");

            window.sessionKey = localStorage.getItem("locale");
            if (sessionKey) {
                this.chageDir(localStorage.getItem("locale"));
            }
        },

        computed: {
            headerClass() {
                return {
                    "add-margin": this.shouldAddMarginBottom,
                };
            },
            shouldAddMarginBottom() {
                // Check if the current route is not the home page
                console.log("updated is Done");
                return this.$route.path !=="/";
            },
        },
    };
</script>



<style lang="scss">
.add-margin {
    margin-bottom: 40px;
}
.defaultLayout {
    position: sticky;
    top: 0;
    z-index: 1000;
}
</style>
