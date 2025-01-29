<template>
    <div>
        <ul class="col-12 col-md-10 steps mr-auto mb-5">
            <li 
                v-for="(step, index) in stepsData" 
                :key="index" 
                :class="{ 'step-item': true, 'active': Array.isArray(activeSteps) && activeSteps.includes(index) }"
            >
                <div class="icon-done">
                    <i v-if="step.icon" :class="step.icon + ' icon'"></i>
                    <span v-else>{{ step.label }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

const props = defineProps({
    activeSteps: {
        type: Array,
        required: true,
        default: () => []
    },
    stepsCount: {
        type: Number,
        default: 4
    }
});

const stepsData = computed(() => {
    return Array.from({ length: props.stepsCount }, (_, i) => ({
        label: (props.stepsCount - i).toString()
    }));
});
</script>