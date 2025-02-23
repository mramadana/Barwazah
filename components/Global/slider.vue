<template>
    <section>
        
        <div v-if="!loading && !loading_2">

            <div class="slider categoryClass" dir="ltr">
                <Carousel :value="slider" :numVisible="numVisible" :numScroll="numScroll" :responsiveOptions="responsiveOptions" :autoplayInterval="5000" :transitionInterval="3000"  class="dir-slider">
                    <template #item="slotProps">

                        <div class="titleOnlyClass">
                            <div class="slider-link slider-item">
                                <img :src="slotProps.data.image" loading="lazy" alt="slider-img" class="slider-img">
                                <div class="slider-text text-center">
                                    <div class="main-cl_2 title-slider">{{ slotProps.data.name }}</div>
                                    <div class="description">{{ slotProps.data.description }}</div>
                                </div>
                            </div>
                        </div>
                        
                    </template>
                </Carousel>
            </div>
            
        </div>
        
    </section>
</template>


<script setup>
    const props = defineProps({

    slider: {
        type: Array,
        required: true
    },
    loading: {
        type: Boolean,
        default: false,
    },
    loading_2: {
        type: Boolean,
        default: false,
    },

    slider_title: {
        type: Boolean,
        default: false,
    },
    showTitleOnly: {
        type: Boolean,
        default: false,
    },

    numVisible: {
        type: Number,
        default: 1
    },
    numScroll: {
        type: Number,
        default: 1
    },

    responsiveOptions: {
        type: Array,
        default: () => []
    },

    noDataMessage: {
      type: String
    }
});

    const emit = defineEmits(['shop-now-click']);

</script>


<style lang="scss">


    .slider-item {
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        text-align: start;
        align-items: end;

        .slider-img {
            max-width: 160px;
            max-height: 130px;
            margin-bottom: 15px;
        }
    }

    .titleOnlyClass {
        margin: 0.5rem;
        align-items: center;
        display: flex;
        flex-direction: column;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        border-radius: 20px;
        .text {
            font-size: 14px;
            padding: 10px;
            z-index: 1;
        }
    }

    .slider-text {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex: 1;
        padding: 0 5px 15px;
    }

    .title-slider {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 15px;
        @media (max-width: 550px) {
            font-size: 14px;
        }
    }
    .description {
        font-size: 12px;
        color: #5F819D;
    }
</style>