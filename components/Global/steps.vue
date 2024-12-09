<template>
    <!-- <div>
        <ul class="col-12 col-md-10 steps mr-auto mb-5">
                                
            <li :class="{ 'step-item': true }">
                <div class="icon-done">
                    <i class="fas fa-check icon"></i>
                </div>
            </li>
            
            <li :class="{ 'step-item': true}">
                <div class="icon-done">
                    <i class="fas fa-check icon"></i>
                </div>
            </li>
            <li :class="{ 'step-item': true}">
                <div class="icon-done">
                    <i class="fas fa-check icon"></i>
                </div>
            </li>
            <li :class="{ 'step-item ': true}">
                <div class="icon-done">
                    1
                </div>
            </li>

        </ul>
    </div> -->


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
    }
})

const stepsData = ref([
    { label: "4" },
    { label: "3" },
    { label: "2" },
    { label: "1" },
])

// console.log("Active Steps:", props.activeSteps);
</script>