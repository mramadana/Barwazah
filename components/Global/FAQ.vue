<template>
    <section>
        
        <!-- <Accordion class="accordFaq" v-if="!loading"> -->

        <div class="row accordion accordion-flush" id="accordionFlushExample">
            
            <div class="col-12 col-md-6">
                <div class="layout-form chart_layout">
                    <h2 class="main-title md bold text-center mb-4">توصيات تجربة المستخدم</h2>
                    <div class="accordion-item" v-for="item in FAQ" :key="item.id">
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

            <div class="col-12 col-md-6">
                <div class="layout-form chart_layout">
                    <h2 class="main-title md bold text-center mb-4">التوصيات لحملات ناجحة</h2>
                    <div class="accordion-item" v-for="item in FAQ_2" :key="item.id">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne' + item.id" aria-expanded="false" :aria-controls="'flush-collapseOne' + item.id">
                                {{ item.question }}
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

        <!-- <div class="accordFaq mt-5" v-if="loading">
            <div class="layout-Faq d-flex alighn-items-center justify-content-between" v-for="i in 4" :key="i">
                <Skeleton width="70%" height=".7rem" class="small"></Skeleton>
                <Skeleton width="5%" height=".4rem" class="small"></Skeleton>
            </div>
        </div> -->

    </section>
</template>

<script setup>

const loading = ref(true);

const { response } = responseApi();

const axios = useApi();

const Recommendations = ref([]);

const FAQ = ref([
    {
        id: 1,
        question: "How to book a car?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quos.",
    },
    {
        id: 2,
        question: "What is the cancellation policy?",
        answer: "Doloremque, quae quidem. Quasi, magni!",
    },
    {
        id: 3,
        question: "How do I get a refund?",
        answer: "Quidem, doloremque. Quasi, magni!",
    },

]);

const FAQ_2 = ref([
{
        id: 4,
        question: "How to contact the customer service?",
        answer: "Magni, quidem. Doloremque, magni!",
    },
    {
        id: 5,
        question: "How to change my booking?",
        answer: "Quasi, magni! Doloremque, quidem.",
    },
    {
        id: 6,
        question: "How to cancel my booking?",
        answer: "Magni, quidem! Doloremque, magni!",
    },

]);


const getData = async () => {
  loading.value = true;
  await axios.get('RecommendationsHome').then(res => {
    if (response(res) == "success") {
        Recommendations.value = res.data.data;
        console.log(Recommendations.value, "Recommendations");
    }
    loading.value = false;
  }).catch(err => console.log(err));
};


onMounted(() => {
    getData();
});

</script>


<style lang="scss">

.accordion-button {
    background-color: rgba(238, 246, 254, 1);
    border: none;
    color: var(--red);
    &:focus {
        box-shadow: none;
    }
}

.accordion-item {
    // background-color: rgba(238, 246, 254, 1);
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
}

.accordion-button:not(.collapsed)::after {
    transform: rotate(45deg);
}

.accordion-button:not(.collapsed) {
    background-color: rgba(238, 246, 254, 1);
    color: var(--red);
}
</style>