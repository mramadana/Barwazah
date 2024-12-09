<template>
        <!--========================= start footer ===============================-->
        <footer class="footer">
            <div class="inner-footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-lg-4 mb-4">
                            <div class="img-footer">
                                <NuxtLink to="/" class="footer-logo">
                                    <img src="@/assets/images/logo.svg" alt="logo" />
                                </NuxtLink>
                            </div>
                        </div>

                        <div class="col-12 col-lg-4 mb-4">
                            <h4 class="foot-title">{{ $t("Home.quick_links") }}</h4>
                            <div class="links">
                                <NuxtLink to="/" class="link">{{ $t("Home.home") }}</NuxtLink>
                                <NuxtLink to="/Complaints" class="link">{{ $t("Home.complaints_and_suggestions") }}</NuxtLink>
                                <NuxtLink to="/terms" class="link">{{ $t("Home.terms_and_conditions") }}</NuxtLink>
                            </div>
                        </div>

                        <div class="col-12 col-lg-4 mb-4">
                            <h3 class="foot-title">{{ $t("Home.connect_us") }}</h3>
                            <div class="links">
                                <NuxtLink class="link">{{ $t("Home.riyadh_saudi_arabia") }}</NuxtLink>
                                <NuxtLink to="tel:+4733378901" class="link">+966545123723</NuxtLink>
                                <NuxtLink to="mailto:info@aait.sa" class="link">info@aait.sa</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copy-right">
                <div class="container inner">
                    <h6 class="hint">
                        {{ $t("Home.Design_programming") }}
                        <NuxtLink to="https://aait.sa" target="_blank" class="hint-link">{{ $t("Home.awamer_alshabaka") }}</NuxtLink>
                    </h6>
                    <h6 class="hint">{{ $t("Home.copy_right") }}</h6>
                </div>
            </div>
        </footer>
</template>

<style lang="scss">
    .inner-footer {
        background-color: var(--main-bg);
        padding: 50px 15px;
        @media (max-width:550px) {
            padding: 30px 0 0;
        }
        .foot-title {
            color: var(--main);
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 13px;
        }

        .links {
            .link {
                display: block;
                color: var(--main);
                font-size: 14px;
                &:not(:last-child) {
                    margin-bottom: 13px;
                }
            }
        }
    }

    .copy-right {
        padding: 10px 0;
        background-color: var(--main);
        .inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;
            .hint {
                color: var(--wh);
                font-size: 13px;
                margin-bottom: 0;
            }

            @media (max-width:550px) {
                justify-content: center;
            }
        }
    }

    .footer-logo {
        margin-bottom: 10px;
        display: block;
        img {
            min-width: 150px;
            max-width: fit-content;
            @media (max-width: 550px) {
               min-width: 100px;
            }
        }
    }

    .hint-link {
        color:  var(--wh);
    }
</style>