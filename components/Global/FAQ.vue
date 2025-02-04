<template>
    <section>

        <div class="row accordion accordion-flush mb-5" id="accordionFlushExample" v-if="!loading">
            
            <div class="col-12 col-md-6 mb-4" v-for="item in Recommendations" :key="item.id">
                <div class="chart_layout layout-form">
                    <!-- <h2 class="main-title md bold text-center mb-4">{{ item.title }}</h2> -->
                    <div class="accordion-item" >
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne' + item.id" aria-expanded="false" :aria-controls="'flush-collapseOne' + item.id">
                                <span>{{ item.title }}</span>
                            </button>
                        </h2>
                        <div :id="'flush-collapseOne' + item.id" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                {{ item.details }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        <div class="accordFaq justify-content-between mt-5" v-if="loading && !Recommendations.length">
            <div class="mb-4 d-flex alighn-items-center justify-content-between layout-Faq" v-for="i in 4" :key="i">
                <Skeleton width="70%" height=".7rem" class="small"></Skeleton>
                <Skeleton width="5%" height=".4rem" class="small"></Skeleton>
            </div>
        </div>


    </section>
</template>

<script setup>
defineProps({
    loading: {
        type: Boolean,
        required: true
    },
    Recommendations: {
        type: Array,
        required: true,
        default: () => []
    }
});

const axios = useApi();

// const getData = async () => {
//   await axios.get('RecommendationsHome').then(res => {
//     if (response(res) == "success") {
//         Recommendations = res.data.data.data;
//     }
//   }).catch(err => console.log(err));
// };


// onMounted(() => {
//     getData();
// });
</script>


<style lang="scss">

.accordFaq {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 15px;
    margin-bottom: 15px;
    font-family: 'main_font' !important;
    font-size: 14px !important;
}

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

.layout-Faq {
    background-color: var(--wh);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    margin-bottom: 30px;
    padding: 18px;
}
</style>