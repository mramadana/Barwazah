<template>
    <div class="container">
        <div class="layout-form custom-width lg">
            <h1 class="main-title mb-5 lg bold text-center">سياسة الخصوصية</h1>
            <div class="main-title lin-height normal mb-4" v-html="privacy">
                
            </div>
        </div>
    </div>
</template>

<script setup>
    const privacy = ref(`
                نقدر خصوصيتك ونلتزم بحماية معلوماتك الشخصية والتجارية.
                توضح سياسة الخصوصية هذه كيفية جمع بياناتك واستخدامها وحمايتها عند استخدامك لمنصتنا وخدماتنا.
                المعلومات التي نجمعها :
                قد نجمع الأنواع التالية من المعلومات:
                المعلومات الشخصية: الاسم وعنوان البريد الإلكتروني ورقم الهاتف وتفاصيل الاتصال الأخرى المقدمة أثناء التسجيل أو حجوزات الاستشارة أو الربط مع منصات التجارة الإلكترونية
                معلومات العمل: اسم المتجر والقطاع وبيانات المبيعات وبيانات العملاء والمقاييس الأخرى اللازمة لتقديم خدماتنا.
                المعلومات الفنية: عنوان IP ونوع المتصفح ومعلومات الجهاز و بيانات الاستخدام التي يتم جمعها من خلال ملفات تعريف الارتباط وأدوات التحليلات.
                كيف نستخدم معلوماتك:
                نستخدم معلوماتك من أجل:
                - توفير خدماتنا وتحسينها، بما في ذلك تحليلات لوحة المعلومات و توقعات الذكاء الاصطناعي و أدوات التسويق تخصيص تجربتك وتقديم توصيات مخصصة.
                - التواصل معك بشأن التحديثات والدعم والعروض الترويجية.
                - ضمان أمان وسلامة منصتنا.
                مشاركة البيانات والإفصاح عنها
                لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة، ومع ذلك، يجوز لنا مشاركة بياناتك في الحالات التالية:
                - مع مقدمي خدمات الجهات الخارجية الموثوق بهم الذين يساعدوننا في تقديم خدماتنا 
                (على سبيل المثال، الاستضافة السحابية، وتحليل البيانات)
                - عندما يقتضي القانون أو الإجراءات القانونية ذلك للامتثال للوائح أو حماية حقوقنا.
                - بموافقتك لأغراض محددة، مثل التعاون التسويقي.
                أمان البيانات:
                نطبق تدابير أمان قياسية في الصناعة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الكشف عنها. 
                تتضمن هذه التدابير التشفير والخوادم الآمنة وعمليات التدقيق الأمنية المنتظمة.

            `)
    </script>

<style scoped lang="scss">
    .lin-height {
        line-height: 2.5;
    }
</style>