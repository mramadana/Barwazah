<template>
    <section class="container">
        <h3 class="main-title mb-4 xl bold text-center color-blue">الأسئلة الشائعة</h3>
        <h4 class="main-title mb-5 text-center hint-faq">أكتشف المزيد حول خدمات بروزة وكيفية تحقيق أقصى استفادة منها</h4>
        <div class="row accordion accordion-flush justify-content-center mt-5" id="accordionFlushExample">
            <div class="col-12 mb-card" v-for="item in FAQ" :key="item.id">
                <div class="chart_layout">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne' + item.id" aria-expanded="false" :aria-controls="'flush-collapseOne' + item.id">
                                <span>{{ item.question }}</span>
                            </button>
                        </h2>
                        <div :id="'flush-collapseOne' + item.id" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                {{ item.answer }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const FAQ = ref([
    {
        id: 1,
        question: "ما هي بروزة وما الخدمات التي تقدمها؟",
        answer: "بروزة هو تطبيق متكامل يقدم خدمات تحليل وتسويق مبتكرة مصممة خصيصًا لدعم أصحاب المتاجر الإلكترونيه و المسوقين في مختلف المجالات حيث يوفر أدوات تحليل شاملة لأدائك وأداء منافسيك مع مقارنات دقيقة في السوق المستهدف باستخدام تقنيات الذكاء الاصطناعي"
    },
    {
        id: 2,
        question: "كيف يمكن للتطبيق أن يساعدني في تحسين استراتيجيات التسويق الخاصة بي؟",
        answer: `التطبيق يتيح لك
        تحليل شامل لأدائك وأداء منافسيك 
        تقارير دقيقة عن معدل البيع ومعدلات النمو
        تقارير دقيقة عن تفاعل جمهورك
        رؤى تنبؤية تعتمد على بيانات أدائك
        توصيات مستمرة لتحسين الأداء التسويقي 
        مساعد تسويقي مبتكر بتقنية الذكاء الاصطناعي يعتمد على بياناتك وبيانات سوقك المستهدف`
    },
    {
        id: 3,
        question: "ما الذي يميز أدوات التحليل في التطبيق مقارنة بالأدوات التحليلية الأخرى المتاحة؟",
        answer: `واجهة سهلة الاستخدام تجمع بين التحليل والمقارنة والمقترحات العملية 
        إمكانية دمج البيانات من قنوات تسويقية متعددة في منصة واحدة
        تحليل شامل لأدائك وأداء منافسيك 
        مقارنات دقيقة في السوق المستهدف
        تقديم توصيات لتحسين الأداء التسويقي مبنية على تحليل بياناتك و بيانات السوق اٰلمستهدف`
    },
    {
        id: 4,
        question: "هل يمكن استخدام التطبيق لأي نوع من المتاجر الإلكترونية (الصغيرة - المتوسطة - الكبيرة)؟",
        answer: `نعم التطبيق مصمم ليلبي احتياجات جميع أنواع المتاجر الإلكترونية سواء كانت مبتدئه أو صغيرة أو متوسطة أو كبيرة 
حيث أنه قادر على معرفة تصنيفك و حجم أعمالك بشكل دقيق مع توفير خطط مرنة تناسب مختلف المشاريع والميزانيات`
    },
    {
        id: 5,
        question: "هل يمكنني استخدام التطبيق بغض النظر عن نوع المجال الذي أعمل فيه؟",
        answer: `التطبيق يقدم حلولًا تناسب قطاع التجارة الإلكترونية في الوقت الحالي ويمكنك متابعتنا على حساباتنا في وسائل التواصل الإجتماعي لأي تتحديثات مستقبليه`
    },
    {
        id: 6,
        question: "هل يدعم التطبيق خططاً تسويقية مخصصة للسوق السعودي؟",
        answer: `بالتأكيد بفضل تقنيات الذكاء الأصطناعي تم تدريب نموذج بروزه لتقديم استراتيجيات تسويقية متوافقة مع احتياجات العميل بشكل مخصص و احتياجات السوق السعودي وتوجهاته على وجه العموم  `
    },
    {
        id: 7,
        question: "هل يحتاج التطبيق إلى مهارات خاصة لاستخدامه؟",
        answer: `التطبيق لا يتطلب أي مهارات متقدمة بل يتميز بواجهة بسيطة وسهلة الاستخدام تناسب الجميع `
    },
    {
        id: 8,
        question: "كيف يمكنني استخدام الذكاء الاصطناعي في التطبيق؟",
        answer: `يمكنك طرح أسئلة بشكل مباشر والحصول على إجابات فورية قوية بتقنية الذكاء الاصطناعي مبنية
على قرارات تسويقية مُخصصة لمتجرك`
    },
    {
        id: 9,
        question: `ما الفرق بين المساعد التسويقي " بروزه " وشات أنظمة الذكاء الاصطناعي الأخرى؟`,
        answer: `المساعد التسويقي بروزه تم تدريبه بشكل مبتكر على معلومات واستراتيجيات تسويقية حصرية 
تكون مخصصه لمتجرك و معتمده على أدائك و بياناتك و تقديم إجابات دقيقة مبنية على خبرات قوية حققت نجاحات فعلية في جميع قطاعات التجارة الالكترونية بينما أنظمة الذكاء الأصطناعي الأخرى تقدم لك إجابات عامه و غير مخصصه
لمتجرك`
    },
    {
        id: 10,
        question: "هل يتم تحديث التطبيق بشكل دوري لإضافة مميزات جديدة؟",
        answer: `نعم يتم تحديث التطبيق باستمرار لإضافة مزايا وتحسينات جديدة تواكب تطورات السوق واحتياجات المستخدمين يمكنك متابعتنا ليصلك كل جديد من التحديثات `
    },
    {
        id: 11,
        question: "هل بياناتي آمنة عند استخدام التطبيق؟",
        answer: "نعم يتم تأمين بياناتك باستخدام أحدث تقنيات الحماية لضمان الخصوصية والحفاظ على سريتها."
    },
    {
        id: 12,
        question: "هل يوجد فريق دعم يمكنني التواصل معه؟",
        answer: "نعم يتوفر فريق دعم متخصص على مدار الساعة للإجابة عن استفساراتك وحل أي مشكلات تواجهك"
    }
]);

</script>

<style lang="scss" scoped>
.mb-card {
    &:not(:last-child) {
        margin-bottom: 10px;
    }
}

.accordion-body {
    font-size: 14px;
    line-height: 28px;
    @media (max-width: 550px) {
        font-size: 11px !important;
    }
}
.hint-faq {
    color: #22272A;
    @media (max-width: 550px) {
        font-size: 12px !important;
        margin-bottom: 30px !important;
    }
}
.accordFaq {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 15px;
    margin-bottom: 15px;
    font-family: 'main_font' !important;
    font-size: 14px !important;
}

.accordion-button {
    background-color: #fff;
    border: none;
    color: #5F819D;
    padding: 20px;
    font-size: 16px;
    @media (max-width: 550px) {
        padding: 15px;
    }
    &:focus {
        box-shadow: none;
    }
    span {
        @media (max-width: 550px) {
            font-size: 13px !important;
        }
    }
}

.accordion-item {
    border: none;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.10);
    border-radius: 15px !important;
    overflow: hidden;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
}

.accordion-button::after {
    transform: rotate(0deg);
    content: "\f067";
    font-size: 15px;
    font-weight: 600;
    background-image: none !important;
    color: #E5254A;
}

.accordion-button:not(.collapsed)::after {
    transform: rotate(45deg);
}

.accordion-button:not(.collapsed) {
    background-color: #fff;
    color: var(--red);
    span {
        color: #013660;
    }
}

.layout-Faq {
    background-color: var(--wh);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    margin-bottom: 30px;
    padding: 18px;
}

@media (max-width: 550px) {
    .accordFaq {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .accordion-button {
        font-size: 13px;
    }
}
</style>