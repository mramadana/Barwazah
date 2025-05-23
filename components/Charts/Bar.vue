<template>
    <div>
        <div class="bar-chart position-relative">
            <NExample
              id="bar"
              title="Bar Chart"
              desc="SSR + client-side lazy loading"
              style="height: 300px; width: 100%; display: block"
            >
            <div class="d-flex align-items-center justify-content-center gap-4">
                <label class="label mb-0">
                    <!-- {{$t('Global.gender')}} -->
                </label>
                <div class="with_cun_select custom-select">
                    <div class="flex justify-content-center dropdown_card">
                        <Dropdown 
                            v-model="rentalType" 
                            @change="handleRentalTypeChange" 
                            :options="rentals" 
                            optionLabel="name" 
                            :placeholder="placeholderText" 
                            class="custum-dropdown" 
                        />
                    </div>
                </div>
            </div>
              <VChart ref="chart" :option="option" />
            </NExample>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, nextTick, watch, computed } from 'vue';
const echarts = await import('echarts/core');
import { LegendComponent, TooltipComponent, GridComponent, DatasetComponent } from 'echarts/components';
import { useI18n } from 'vue-i18n';
  
const { t } = useI18n();
  
echarts.use([
    LegendComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
]);
  
const props = defineProps({
    sourceData: { type: Array, required: true },
    rentalNames: {
        type: Object,
        required: true
    },
    placeholderText: {
        type: String,
    }
});

const chart = ref(null);
const rentalType = ref(null);
  
const rentals = computed(() => [
    { name: props.rentalNames.showAll, id: 0 },
    { name: props.rentalNames.males, id: 1 },
    { name: props.rentalNames.females, id: 2 },
]);

const option = ref({
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    legend: {
        top: '90%',
        itemGap: 50,
        selected: {
            [t(props.rentalNames.females)]: true,
            [t(props.rentalNames.males)]: true,
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            rotate: 45
        }
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            name: t(props.rentalNames.males),
            type: 'bar',
            barGap: '0%',
            barWidth: 20,
            itemStyle: {
                color: '#e5254a',
                borderRadius: [5, 5, 0, 0]
            },
            showBackground: true
        },
        {
            name: t(props.rentalNames.females),
            type: 'bar',
            barGap: '0%',
            barWidth: 20,
            itemStyle: {
                color: '#013660',
                borderRadius: [5, 5, 0, 0]
            },
            showBackground: true
        }
    ]
});

watch(() => props.sourceData, (newData) => {
    if (Array.isArray(newData)) {
        option.value.xAxis.data = newData.map(item => item.ageRange);
        option.value.series[0].data = newData.map(item => item.maleCount);
        option.value.series[1].data = newData.map(item => item.femaleCount);
        if (chart.value?.chart) {
            chart.value.chart.setOption(option.value, true);
        }
    }
}, { deep: true, immediate: true });

function toggleFemalesVisibility() {
    const chartInstance = chart.value?.chart;
    if (!chartInstance) return;

    option.value.legend.selected[t(props.rentalNames.females)] = true;
    option.value.legend.selected[t(props.rentalNames.males)] = false;
    chartInstance.setOption(option.value, true);
}

function toggleMalesVisibility() {
    const chartInstance = chart.value?.chart;
    if (!chartInstance) return;

    option.value.legend.selected[t(props.rentalNames.males)] = true;
    option.value.legend.selected[t(props.rentalNames.females)] = false;
    chartInstance.setOption(option.value, true);
}

function showAllData() {
    const chartInstance = chart.value?.chart;
    if (!chartInstance) return;

    option.value.legend.selected[t(props.rentalNames.females)] = true;
    option.value.legend.selected[t(props.rentalNames.males)] = true;
    chartInstance.setOption(option.value, true);
}

const handleRentalTypeChange = (event) => {
    const selectedRental = event.value;
    if (selectedRental) {
        switch (selectedRental.id) {
            case 0:
                showAllData();
                break;
            case 1:
                toggleMalesVisibility();
                break;
            case 2:
                toggleFemalesVisibility();
                break;
        }
    }
};

onMounted(async () => {
    await nextTick();
    if (Array.isArray(props.sourceData)) {
        option.value.xAxis.data = props.sourceData.map(item => item.ageRange);
        option.value.series[0].data = props.sourceData.map(item => item.maleCount);
        option.value.series[1].data = props.sourceData.map(item => item.femaleCount);
        
        if (chart.value?.chart) {
            chart.value.chart.setOption(option.value, true);
        }
    }
});
</script>

<style scoped>
.label {
    color: #013660;
    font-weight: bold;
}
</style>