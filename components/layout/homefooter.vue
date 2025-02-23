<template>
    <footer class="footer" v-if="isHomePage">
        <div class="container">
            <div class="footer-content">
                <!-- بروزة -->
                <div class="footer-section">
                    <h3 :class="['foot-title', { active: activeIndex === 0 }]" @click="handleFootTitleClick(0)">بروزة</h3>
                    <ul class="links" :class="{ active: activeIndex === 0 }">
                        <li><NuxtLink to="/about">عن بروزة</NuxtLink></li>
                        <li><NuxtLink to="">تواصل مع الشركة</NuxtLink></li>
                        <li><NuxtLink to="">الشكاوى والمقترحات</NuxtLink></li>
                        <li><NuxtLink to="/privacy">سياسة الخصوصية</NuxtLink></li>
                    </ul>
                </div>

                <!-- روابط -->
                <div class="footer-section">
                    <h3 :class="['foot-title', { active: activeIndex === 1 }]" @click="handleFootTitleClick(1)">روابط</h3>
                    <ul class="links" :class="{ active: activeIndex === 1 }">
                        <li><NuxtLink to="/#assistant">المساعد التسويقي</NuxtLink></li>
                        <li><NuxtLink to="/#Services">الخدمات</NuxtLink></li>
                        <li><NuxtLink to="/#Features">المميزات</NuxtLink></li>
                        <li><NuxtLink to="/#packages">الباقات</NuxtLink></li>
                    </ul>
                </div>

                <!-- اربط متجرك الآن -->
                <div class="footer-section">
                    <h3>اربط متجرك الآن</h3>
                    <div class="section-btns align-items-start">
                        <button class="typeSection salla" @click="() => { navigateToUrl('https://salla.com/') }">
                            <img src="@/assets/images/salla.svg" alt="">
                        </button>

                        <button class="typeSection zid" @click="() => { navigateToUrl('https://zid.sa/') }">
                            <img src="@/assets/images/zid.svg" alt="">
                        </button>
                    </div>
                </div>

                <!-- Social Links -->
                <div class="social-links">
                    <a href="https://www.linkedin.com/company/barwazah/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/barwazah_sa/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://x.com/barwazah_sa" target="_blank"><img src="@/assets/images/x-twitter.svg" alt=""></a>
                </div>
            </div>

            <!-- Contact Info & Copyright -->
            <div class="footer-bottom">
                <div class="copyright">
                    جميع الحقوق محفوظه لشركة بروزه لحلول التسويق الذكيه 2025  ©
                </div>
                <div class="contact-info">
                    <a href="tel:+699536594977"><i class="fas fa-phone"></i> 536594977 ( 966 + )</a>
                    <a href="mailto:info@barwzah.net"><i class="far fa-envelope"></i> info@barwzah.net</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const navigateToUrl = (url) => {
        window?.open(url, '_blank');
    };

    const handleFootTitleClick = (index) => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 768) {
        if (activeIndex.value === index) {
            activeIndex.value = null;
        } else {
            activeIndex.value = index;
        }
        }
    };

  const activeIndex = ref(null);

  const router = useRouter();

  const isHomePage = computed(() => {
      return router.currentRoute.value.path === '/' || router.currentRoute.value.path === '' || router.currentRoute.value.path === 'index' || router.currentRoute.value.path === '/about' || router.currentRoute.value.path === '/privacy'; 
    });
</script>

<style lang="scss" scoped>
.footer {
    background-color: #1E2024;
    color: #fff;
    padding: 60px 0 30px;
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .footer-content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        margin-bottom: 40px;
    }

    .footer-section {
        text-align: start;
        h3 {
            color: #fff;
            font-size: 18px;
            margin-bottom: 20px;
            font-weight: 600;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                margin-bottom: 12px;

                a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 14px;
                    transition: color 0.3s;

                    &:hover {
                        color: #E5254A;
                    }
                }
            }
        }
    }

    .social-links {
        display: flex;
        align-items: center;
        justify-content: end;

        a {
            color: #fff;
            margin: 0 10px;
            transition: all .5s ease;

            &:hover {
                transform: rotate(360deg);
                border-radius: 50%;
            }

            i {
                font-size: 30px;
            }
            img {
                height: 25px;
            }
        }
    }

    .footer-bottom {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .contact-info {
            display: flex;
            align-items: center;

            a {
                color: #fff;
                text-decoration: none;
                margin-right: 20px;
                font-size: 14px;

                i {
                    margin-left: 5px;
                }

                &:hover {
                    color: #E5254A;
                }
            }
        }

        .copyright {
            color: #fff;
            font-size: 14px;
            text-align: center;
            margin-top: 10px;
        }
    }
}

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

.section-btns {
    display: flex;
    gap: 20px;
    flex-direction: column;
}

@media (max-width: 768px) {
    .footer {
        padding: 30px 0;
        .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .social-links {
            justify-content: center;
            margin-top: 20px;
        }

        .footer-bottom {
            flex-direction: column;
            gap: 10px;

            .contact-info {
                justify-content: center;
                flex-wrap: wrap;
                gap: 20px;
                a {
                    margin: 5px 0;
                }
            }
        }
    }
}
</style>