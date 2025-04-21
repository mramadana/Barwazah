<template>
    <div>
        <main>
            
            <div class="container">
                <div class="home-content" id="banner">

                    <div class="row align-items-center flex-column-reverse flex-md-row">
                        <!-- Text Content Column -->
                        <div class="col-12 col-lg-6 col-md-6 col-xl-6">
                            <h2 class="mb-5 fw-bold main-cl_2 first-title">بروزة .. تُبرز مشروعك بذكاء</h2>
                            <p class="top-banner-text">مساعدك التسويقي الذكي معك من تحليل البيانات إلى ابتكار الأفكار لتحقيق نمو مستدام</p>
                            <p class="second-title mb-5">اكتشف القوة الحقيقية للتسويق الذكي مع بروزة من تحليلات دقيقة و رؤى تنبؤية وإجابات فورية قوية بتقنية الذكاء الأصطناعي مبنية على قرارات تسويقية مُخصصة لمتجرك لتتمكن من قيادة أعمالك بذكاء وتنفرد بين منافسيك</p>
                            <NuxtLink to="#packages" class="custom-btn with_blue sm d-inline-flex">تصفح الباقات</NuxtLink>
                        </div>
                        <!-- Image Column -->
                        <div class="col-12 col-lg-6 col-xl-6 p-0">
                            <div class="div">
                                <img src="@/assets/images/mobile-img.png" alt="Marketing Icon" class="banner-img">
                            </div>
                        </div>
                    </div>

                    <div id="assistant" class="suggestions d-flex align-items-center mt-5">
                        <div class="suggestions-image">
                            <img src="@/assets/images/Group-73.png" alt="Chat Image" class="img-fluid">
                        </div>
                        <div class="suggestions-text">
                            <h2 class="chat-title">بروزه تجاوبك... <br> وتقترح لك الأفضل</h2>
                            <p class="chat-disc">عندك استفسار عن أداء متجرك أو ودك تعرف أفضل توقيت لإطلاق عرض جديد أو نصيحة لرفع مبيعاتك، اسأل بروزه! وراح تجاوبك بشكل فوري لأن بروزه مو مجرد شات بوت عادي، بل مساعد تسويقي ذكي يعتمد على تقنيات الذكاء الاصطناعي و يتعلم من بيانات متجرك ويتفاعل معك بأسلوب ذكي يضمن لك قرارات تسويقية فعّالة و زيادة في الأرباح</p>
                        </div>
                    </div>

                    <div id="Features" class="why-apps mt-5 pt-5 ">
                        <div class="text-center mb-5">
                            <h2 class="app-title color-blue mb-4">لماذا تطبيقنا هو مساعدك <br/> التسويقي الأمثل؟</h2>
                            <p class="app-text mx-auto" style="max-width: 700px;">لأننا نقدم لك أدوات تحليل دقيقة بتقنيات متطورة ورؤية شاملة تساعدك على التفوق في السوق وزيادة أرباحك مع توفير استجابة فورية بحلول مبتكرة مدروسة بأفضل نموذج ذكاء اصطناعي تسويقي حصري متخصص</p>
                        </div>
                        
                        <div class="row g-4 hidden-sm">

                            <!-- Feature 4 -->
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="feature-card">
                                    <img src="@/assets/images/icon.svg" alt="تحليل متكامل" class="mb-4 image-1">
                                    <img src="@/assets/images/Slider/slide-1.png" alt="تحليل متكامل" class="mb-4 image-2">
                                    <div class="text-center p-3 center-card">
                                        <h5 class="main-cl_2 mb-3">تحليل متكامل لمتجرك الإلكتروني</h5>
                                        <p class="text-muted small">دراسة متجرك الإلكتروني بشكل مباشر وتحليل شامل لمؤشرات أداء متجرك ومقارنتها بالمنافسين وحجم السوق لضمان تحسين أهدافك التسويقية.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Feature 1 -->
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="feature-card">
                                    <img src="@/assets/images/icon-2.svg" alt="تحليل منافسين" class="mb-4 image-1">
                                    <img src="@/assets/images/Slider/slide-2.png" alt="تحليل متكامل" class="mb-4 image-2">
                                    <div class="text-center p-3 center-card">
                                        <h5 class="main-cl_2 mb-3">تحليل منافسين دقيق</h5>
                                        <p class="text-muted small">نساعدك على تحديد فئة عملك بدقة لمعرفة منافسيك بشكل مباشر والحصول على دراسات سوقية واقعية مبنية على بيانات حقيقية وأرقام تحليلية دقيق</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Feature 2 -->
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="feature-card">
                                    <img src="@/assets/images/icon-3.svg" alt="تحليل نمو" class="mb-4 image-1">
                                    <img src="@/assets/images/Slider/slide-3.png" alt="تحليل نمو" class="mb-4 image-2">
                                    <div class="text-center p-3 center-card">
                                        <h5 class="main-cl_2 mb-3">تحليل نمو أعمالك</h5>
                                        <p class="text-muted small">تقديم تقارير دورية لمعدل النمو السنوي ومقارنتها بالمنافسين</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Feature 3 -->
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="feature-card">
                                    <img src="@/assets/images/icon-4.svg" alt="مساعد تسويقي" class="mb-4 image-1">
                                    <img src="@/assets/images/Slider/slide-4.png" alt="مساعد تسويقي" class="mb-4 image-2">
                                    <div class="text-center p-3 center-card">
                                        <h5 class="main-cl_2 mb-3">مساعد تسويقي بتقنيات الذكاء الاصطناعي</h5>
                                        <p class="text-muted small">تقنيات ذكاء اصطناعي مبتكرة تم تدريبها على معلومات واستراتيجيات تسويقية حصرية تناسب حالة كل متجر وأهدافه التسويقية.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Feature 8 -->
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="feature-card">
                                    <img src="@/assets/images/Conversion.svg" alt="واجهة سهلة" class="mb-4 image-1">
                                    <img src="@/assets/images/Slider/slide-5.png" alt="واجهة سهلة" class="mb-4 image-2">
                                    <div class="text-center p-3 center-card">
                                        <h5 class="main-cl_2 mb-3">واجهة بسيطة سهلة الاستخدام</h5>
                                        <p class="text-muted small">أدوات متطورة وسهلة الاستخدام لتوفير وقتك وجهدك.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Feature 7 -->
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="feature-card">
                                    <img src="@/assets/images/icon-5.svg" alt="دعم مستمر" class="mb-4 image-1">
                                    <img src="@/assets/images/Slider/slide-6.png" alt="دعم مستمر" class="mb-4 image-2">
                                    <div class="text-center p-3 center-card">
                                        <h5 class="main-cl_2 mb-3">دعم مستمر</h5>
                                        <p class="text-muted small">فريق دعم جاهز للمساعدة في أي وقت.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Feature 6 -->
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="feature-card">
                                    <img src="@/assets/images/icon-6.svg" alt="خبرة تسويق" class="mb-4 image-1">
                                    <img src="@/assets/images/Slider/slide-7.png" alt="خبرة تسويق" class="mb-4 image-2">
                                    <div class="text-center p-3 center-card">
                                        <h5 class="main-cl_2 mb-3">خبراء تسويق</h5>
                                        <p class="text-muted small">نُمكنك من الوصول إلى خبراء تسويق لتقديم الدعم.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Feature 5 -->
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="feature-card">
                                    <img src="@/assets/images/icon-7.svg" alt="ربط متجري" class="mb-4 image-1">
                                    <img src="@/assets/images/Slider/slide-8.png" alt="ربط متجري" class="mb-4 image-2">
                                    <div class="text-center p-3 center-card">
                                        <h5 class="main-cl_2 mb-3">ربط متجرك بسهولة</h5>
                                        <p class="text-muted small">ربط مباشر وسلس لمتجرك الإلكتروني عبر متجر تطبيقات سلة وزد.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <GlobalSlider :slider="sliderData" :responsiveOptions="responsiveOptions" :numVisible="5" :numScroll="5" />
                    </div>
                </div>
            </div>

            <div class="packages-layout">
                <div class="container">
                    <!-- Main Title Section -->
                    <div class="text-center packages-text">
                        <h2 class="fw-bold color-white mb-4">نفهم تفاصيل متجرك ونعمل <br/> على تحسينه</h2>
                        <p class="mx-auto color-white" style="max-width: 700px;">كل ما تحتاج إلیھ من تحلیل شامل لأدائك وأداء منافسیك مع مقارنات دقیقة في السوق المستھدف
                            بالإضافة إلي العدید من الخدمات الأخرى نوفرھا لك و نفھم تفاصیلھا</p>
                    </div>

                    
                </div>
                <!-- Dashboard Preview Section -->
                <div id="Services" class="dashboard-preview text-center">
                    <div class="container">
                        <div class="dashboard-card">
                            <div class="row justify-content-between sidebar-layout">
                                <div class="col-2 col-md-3 col-xl-2 mb-4 p-0">
                                    <div class="sidebar-img-wrapper">
                                        <div class="sidebar-buttons">
                                            <button 
                                                v-for="(section, index) in sections" 
                                                :key="index"
                                                class="sidebar-btn"
                                                :class="{ 'active': activeSection === index }"
                                                @click="setActiveSection(index)"
                                            >
                                                <img :src="section.image" alt="sidebar">
                                                <span class="sidebar-title">{{ section.title }}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="col-8 col-md-9 col-xl-9 mb-4 overflow-side">
                                    <div class="main-content-area">
                                        <transition-group 
                                            :name="direction === 'up' ? 'slide-up' : 'slide-down'"
                                            mode="out-in">
                                            <div 
                                                v-for="(section, index) in sections" 
                                                :key="section.title"
                                                v-show="activeSection === index"
                                                class="section-content"
                                            >
                                                <div class="text-section">
                                                    <h3 class="">{{ section.title }}</h3>
                                                    <p>{{ section.content }}</p>
                                                </div>
                                                <div v-if="section.image_content" class="section-image">
                                                    <img :src="section.image_content" :alt="section.title">
                                                </div>
                                            </div>
                                        </transition-group>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-4 mb-4">
                                    <div class="card-info">
                                        <div class="card-body">
                                            <h5 class="main-title bold md mb-3 title-card">بالأرقام نبني لك استراتيجيات تسويقية رابحة</h5>
                                            <p class="main-disc">استثمر في معرفة  أداء متجرك مقارنةً بالمنافسين.</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="col-12 col-md-4 mb-4">
                                    <div class="card-info">
                                        <div class="card-body">
                                            <h5 class="main-title bold md mb-3 title-card">نمنحك رؤية واضحة لمبيعاتك</h5>
                                            <p class="main-disc">حقق أرباح مستدامة وصدارة في السوق.</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="col-12 col-md-4 mb-4">
                                    <div class="card-info">
                                        <div class="card-body">
                                            <h5 class="main-title bold md mb-3 title-card">لا حاجة للخبراء بعد الآن</h5>
                                            <p class="main-disc">اكتشف قوة الذكاء الاصطناعي في صنع قراراتك التسويقية</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Pricing Section -->
                <div id="packages" class="pricing-section text-center">
                    <h3 class="fw-bold mb-4 color-white">خطط مرنة ونتائج مضمونة</h3>
                    <p class="mb-5 color-white">اختر الباقة الأنسب الآن</p>
                    <div class="container">
                        <div class="row justify-content-center g-4 mr-bottom-backages">
                            <!-- Monthly Package -->
                            <div class=" col-12 col-md-6 col-xl-5">
                                <div class="package-card">
                                    <h4 class="package-title mb-5">الباقة الشهرية</h4>
                                    <div class="parent-package">
                                        <ul class="package-features list-unstyled">
                                            <li><span>تحليل دقيق لأداء متجرك</span> <i class="fas fa-check main"></i></li>
                                            <li><span>تحليل دقيق لسوقك المستهدف</span> <i class="fas fa-check main"></i></li>
                                            <li><span>تحليل المنافسين</span> <i class="fas fa-check main"></i></li>
                                            <li><span>مساعد تسويقي ذكي  40 Tokens / يوم</span><i class="fas fa-check main"></i></li>
                                            <li><span>رؤى تنبؤية مستقبليه لاداء متجرك</span>  <i class="fas fa-check main"></i></li>
                                            <li><span>توصيات ذكيه متخصصه لمتجرك</span><i class="fas fa-check main"></i></li>
                                            <li><span>استشارات تسويقيه مجانيه مع خبير التسويق</span><i class="fas fa-check main"></i></li>
                                            <li><span>تقرير لنمو أعمالك خلال السنوات الماضيه</span><i class="fa-solid fa-check main"></i></li>
                                        </ul>
                                        <span class="real-price">199</span>
                                        <div class="main-price">
                                            <div class="price-tag">
                                                <div class="d-flex align-items-center gap-2">
                                                    <span class="amount">159</span>
                                                    <span class="period">ريال / شهر</span>
        
                                                </div>
                                            </div>
                                            <button class="btn-package" @click="cart_dialog = true">
                                                <img src="@/assets/images/cart-img.svg" alt="cart-img" class="cart-img">
                                            </button>
        
                                        </div>

                                    </div>
                                </div>
                            </div>
    
                            <!-- Yearly Package -->
                            <div class=" col-12 col-md-6 col-xl-5">
                                <div class="package-card">
                                    <h4 class="package-title mb-5">الباقة السنوية</h4>
                                    <div class="parent-package">
                                        <ul class="package-features list-unstyled">
                                            <li><span>تحليل دقيق لأداء متجرك </span><i class="fas fa-check main"></i></li>
                                            <li><span>تحليل دقيق لسوقك المستهدف </span><i class="fas fa-check main"></i></li>
                                            <li><span>تحليل المنافسين </span><i class="fas fa-check main"></i></li>
                                            <li><span>مساعد تسويقي ذكي  70 Tokens/ يوم</span><i class="fas fa-check main"></i></li>
                                            <li><span>رؤى تنبؤية مستقبليه لاداء متجرك</span><i class="fas fa-check main"></i></li>
                                            <li><span>توصيات ذكيه متخصصه لمتجرك</span><i class="fas fa-check main"></i></li>
                                            <li><span>استشارات تسويقيه مجانيه مع خبير التسويق</span><i class="fas fa-check main"></i></li>
                                            <li><span>تقرير لنمو أعمالك خلال السنوات الماضيه </span><i class="fas fa-check main"></i></li>
                                        </ul>
                                        <span class="real-price">2388</span>
                                        <div class="main-price">
                                            <div class="price-tag">
                                                <div class="d-flex align-items-center gap-2">
                                                    <span class="amount">1590</span>
                                                    <span class="period">ريال / سنة</span>
        
                                                </div>
                                            </div>
                                            <button class="btn-package" @click="cart_dialog = true">
                                                <img src="@/assets/images/cart-img.svg" alt="cart-img" class="cart-img">
                                            </button>
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            
             <!-- start to FAQ -->
            <GlobalHomeFAQ class="mb-5"/>

        <!-- signUp dialog -->

        <Dialog v-model:visible="cart_dialog" dismissableMask modal class="custum_dialog_width auth-daialog"
            :draggable="false">
            <div class="text-center">
                <div class="section-btns mb-4">
                  
                    <button @click="() => { navigateToUrl('https://apps.salla.sa/ar/app/853407611'); cart_dialog = false; }" class="typeSection salla">
                        <img src="@/assets/images/salla.svg" alt="">
                    </button>

                    <button @click="() => { navigateToUrl('https://apps.zid.sa/application/4359'); cart_dialog = false; }" class="typeSection zid">
                        <img src="@/assets/images/zid.svg" alt="">
                    </button>
                </div>
            </div>
        </Dialog>
    
        </main>
    </div>
</template>


<script setup>

import { ref } from 'vue';

definePageMeta({
    name: "Titles.home",
});

const sections = ref([
    {
        title: 'الرئيسية',
        content: 'نقدم خدمة متكاملة لتحليل موقعك الإلكتروني بدقة واحترافية لتحديد عدد عملائك  ومقارنته بالمنافسين وحجم السوق لمعرفة نقاط القوة والضعف والفرص المتاحة لتحديد الأولويات والتوجهات لبناء استراتيجيات تسويقية مبنية على بيانات دقيقة وواقعية تضمن لك النجاح والاستمرارية',
        image: '/sidebar/Conversion.svg',
        image_content: '/img-content/site-img.png'
    },
    {
        title: 'المبيعات',
        content: 'نقدم خدمة تحليل شاملة لحساب معدل البيع و تحديد المنتجات الأكثر رواجًا وفهم أوقات الذروة وتقديم رؤى تنبؤية لتحسين استراتيجياتك بالإضافة إلى تحليل ديموغرافي دقيق يساعدك على استهداف جمهورك بفعالية وزيادة معدلات الطلب ',
        image: '/sidebar/Sales.svg',
        image_content: '/img-content/tab_2.png'
    },
    {
        title: 'نمو الأعمال',
        content: 'نقدم تحليلاً دقيق لمبيعات متجرك خلال السنة مقارنة بالحصة السوقية في السوق المستهدف لمراجعة فاعلية الاستراتيجيات المتبعة في الوقت الحالي مع إمكانية اتخاذ قرارات جديدة لتحسين الأداء في المستقبل',
        image: '/sidebar/Growth.svg',
        image_content: '/img-content/tab_3.png'
    },
    {
        title: 'التوصيات',
        content: 'نقدم توصيات استراتيجية مستمرة بناءً على مؤشرات الأداء الفعلية لتحسين الأداء التسويقي ',
        image: '/sidebar/Suggestions.svg',
        image_content: '/img-content/tab_4.png'
    },
    {
        title: 'المساعد التسويقي',
        content: 'مساعد تسويقي مبتكر بتقنيات الذكاء الاصطناعي تم تدريبه على معلومات واستراتيجيات تسويقية حصرية  لتقديم إجابات دقيقة مبنية على خبرات قوية حققت نجاحات فعلية في جميع قطاعات التجارة الالكترونية ',
        image: '/sidebar/Assestant.svg',
        image_content: '/img-content/tab_5.png'
    }
]);

const activeSection = ref(0);
const direction = ref('down');
const cart_dialog = ref(false);
const setActiveSection = (index) => {
    direction.value = index > activeSection.value ? 'up' : 'down';
    activeSection.value = index;
};

// slider data 

const sliderData = ref([
{
        id: 1,
        image: "/Slider/slide-1.png",
        name: "تحليل متكامل لمتجرك الإلكتروني",
        description: "دراسة متجرك الإلكتروني بشكل مباشر وتحليل شامل لمؤشرات أداء متجرك ومقارنتها بالمنافسين وحجم السوق لضمان تحسين أهدافك التسويقية.",
    },
    {
        id: 2,
        image: "/Slider/slide-2.png",
        name: "تحليل منافسين دقيق",
        description: "نساعدك على تحديد فئة عملك بدقة لمعرفة منافسيك بشكل مباشر والحصول على دراسات سوقية واقعية مبنية على بيانات حقيقية وأرقام تحليلية دقيق",
    },
    {
        id: 3,
        image: "/Slider/slide-3.png",
        name: "تحليل نمو اعمالك",
        description: "تقديم تقارير دورية لمعدل النمو السنوي ومقارنتها بالمنافسين",
    },

    {
        id: 4,
        image: "/Slider/slide-4.png",
        name: "مساعد تسويقي بتقنيات الذكاء الاصطناعي",
        description: "تقنيات ذكاء اصطناعي مبتكرة تم تدريبها على معلومات واستراتيجيات تسويقية حصرية تناسب حالة كل متجر وأهدافه التسويقية.",
    },
    {
        id: 5,
        image: "/Slider/slide-5.png",
        name: "واجهة بسيطة سهلة الأستخدام ",
        description: "أدوات متطورة وسهلة الاستخدام لتوفير وقتك وجهدك.",
    },
    {
        id: 6,
        image: "/Slider/slide-6.png",
        name: "دعم مستمر",
        description: "فريق دعم جاهز للمساعدة في أي وقت.",
    },
    {
        id: 7,
        image: "/Slider/slide-7.png",
        name: "خبراء تسويق",
        description: "نُمكنك من الوصول إلى خبراء تسويق لتقديم الدعم.",
    },
    {
        id: 8,
        image: "/Slider/slide-8.png",
        name: "ربط متجرك بسهولة",
        description: "ربط مباشر وسلس لمتجرك الإلكتروني عبر متجر تطبيقات سلة وزد.",
    },
]);

const responsiveOptions = ref([
        {
            breakpoint: '991px',
            numVisible: 4,
            numScroll: 4
        },

        {
            breakpoint: '575px',
            numVisible: 2,
            numScroll: 2
        },

        {
            breakpoint: '380px',
            numVisible: 1,
            numScroll: 1
        },


]);

const navigateToUrl = (url) => {
        window?.open(url, '_blank');
    };
    
</script>


<style scoped lang="scss">

.overflow-side {
    overflow: hidden;
    padding: 0;
    @media (max-width: 765px) {
        width: 80%;
    }
}

.sidebar-layout {
    margin-bottom: 40px;
    @media (max-width: 767px) {
        justify-content: unset !important;
    }
    
}

.suggestions-text {
    max-width: 22%;
    @media (max-width: 1024px) {
        margin-bottom: 0 !important;
    }
    @media (max-width: 550px) {
        padding: 0 15px;
    }
}

.suggestions-image {
    max-width: 60%;
}

@media (max-width: 1024px) {
    .suggestions {
        flex-direction: column;
        text-align: center;
    }

    .suggestions-text, .suggestions-image {
        max-width: 100%;
        margin-bottom: 20px;
    }

    .suggestions-image {
        margin-top: 20px;
    }
}

.sidebar-img-wrapper {
    background: #fff;
    border-radius: 24px;
    height: 100%;
    min-height: 428px;

    .sidebar-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 1rem;
        padding: 1.5rem;
        .sidebar-btn {
            background: transparent;
            color: #5F819D;
            font-size: 1rem;
            transition: all 0.3s ease;
            cursor: pointer;
            padding: 0;
            display: flex;
            width: 100%;
            text-align: start;
            position: relative;
            --p: 0;
            align-items: center;
            @media (max-width: 550px) {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &::before {
                content: '';
                overflow: hidden;
                position: absolute;
                top: 0;
                right: -25px;
                width: 7px;
                height: 42px;
                background-color: rgba(229, 37, 74, 1);
                border-radius: 12px 0 0 12px;
                background: linear-gradient(#E5254A 0 0) var(--p, 0) / var(--p, 0) no-repeat;
                transition: .6s, background-position 0s;
            }
            
            &:not(:last-child) {
                margin-bottom: 1rem;
            }
            img {
                margin-inline-end: 1rem;
                @media (max-width: 550px) {
                    margin-inline-end: 0;
                }
            }

            &.active {
                background: white;
                color: #E5254A;
                border-color: white;
                --p: 100%;
            }
        }
    }
}

.main-content-area {
    position: relative;
    min-height: 400px;
    padding: 2rem;
    @media (max-width: 768px) {
        padding: 0;
    }
}

.section-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    @media (max-width: 767px) {
        flex-direction: column;
        gap: 0;
        padding: 0;
        padding-inline-start: 1rem;
    }
    .text-section {
        // flex: 1;
        width: 25%;
        text-align: start;
        @media (max-width: 1024px) {
            width: 35%;
        }
        @media (max-width: 767px) {
            width: 100%;
            order: 2;
        }

        h3 {
            color: #EEF6FE;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            @media (max-width: 767px) {
              font-size: 1rem;
            }
        }
        p {
            color: #F1F2F7;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            line-height: 1.6;
            font-size: 15px;
            @media (max-width: 1024px) {
              font-size: 12px;
            }
            @media (max-width: 767px) {
              font-size: 11px;
            }
        }
    }

    .section-image {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
            order: 1;
            flex: initial;
            display: block;
        }
        img {
            width: 100%;
            height: 300px;
            object-fit: contain;
            @media (max-width: 768px) {
                height: auto;
                margin-bottom: 50px;
            }
        }
    }
}


.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.5s ease;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(100%);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.5s ease;
}

.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-100%);
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(100%);
}

</style>
