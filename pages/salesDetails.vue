<template>
    <div>
        <div class="info-box-item cart-clients gap-5 flex-wrap mb-4">
            <div class="d-flex gap-3 justify-content-center flex-grow-1 align-items-center">
                <img src="@/assets/images/cart.svg" alt="User Icon">
                <div class="info-content">
                    <span>إجمالي قيمة السلات المتروكة للمتجر:</span>
                    <h2>99000 ريال</h2>
                </div>
    
            </div>
        </div>

        <div class="layout-form chart_layout">
            <h1 class="main-title bold text-center mb-5">متوسط حجم السلات المتروكة</h1>
            <ChartsOrders 
            :data-ready="dataReady"
            :months="months"
            :all-months="allMonths"
            :manual-data="manualMonthlyData"
            :initial-data="initialData"/>
        </div>

        <div class="layout-form chart_layout">
            <ChartsProducts 
                :data-ready="dataReady"
                :products-data="productsData"
            />
        </div>

        <div class="layout-form">
            <h2 class="main-title bold text-center mb-5">التحليل الديموغرافي</h2>
            <ChartsBar :source-data="sourceData" />
        </div>

    </div>
</template>

<script setup>
    import * as echarts from 'echarts/core';
    import { LineChart } from 'echarts/charts';
    echarts.use([LineChart]);


    // Flag to indicate if data is ready to be displayed
    const dataReady = ref(false);

    // Array of month objects containing name, id, and number of days
    const months = ref([
        { name: 'عرض الكل', id: 0 },
        { name: 'يناير', id: 1, days: 31 },
        { name: 'فبراير', id: 2, days: 28 },
        { name: 'مارس', id: 3, days: 31 },
        { name: 'أبريل', id: 4, days: 30 },
        { name: 'مايو', id: 5, days: 31 },
        { name: 'يونيو', id: 6, days: 30 },
        { name: 'يوليو', id: 7, days: 31 },
        { name: 'أغسطس', id: 8, days: 31 },
        { name: 'سبتمبر', id: 9, days: 30 },
        { name: 'أكتوبر', id: 10, days: 31 },
        { name: 'نوفمبر', id: 11, days: 30 },
        { name: 'ديسمبر', id: 12, days: 31 },
    ]);

    // Array of month names in Arabic
    const allMonths = ref(['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']);

    // Object containing monthly store data for each month
    const manualMonthlyData = {
        1: { store: [10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160] },
        2: { store: [30, 25, 20, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160] },
        3: { store: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90] },
        4: { store: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] },
        5: { store: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110] },
        6: { store: [70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120] },
        7: { store: [80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130] },
        8: { store: [90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140] },
        9: { store: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150] },
        10: { store: [110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160] },
        11: { store: [120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170] },
        12: { store: [130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180] },
    };

    // Initial data for the chart, including x-axis labels and series data
    const initialData = ref({
        xAxis: allMonths.value,
        series: [40, 50, 60, 70, 65, 75, 85, 80, 90, 95, 110, 115]
    });

    // Data for the products chart
    const productsData = ref({
        labels: [
            { id: 1303, text: 'شباب' },
            { id: 1304, text: 'حريمي' },
            { id: 1305, text: 'أطفال' },
            { id: 1306, text: 'رجالي' },
        ],
        series: [12.32, 11.7, 10.38, 9.32],
        colors: {
            bar: '#013660',
            text: '#ffffff'
        }
    });

    const sourceData = ref([
        ['label 1', 43.3, 85.8],
        ['label 2', 83.1, 73.4],
        ['label 3', 86.4, 65.2],
        ['label 4', 72.4, 53.9],
        ['label 5', 43.3, 85.8],
        ['Ramadan', 83.1, 73.4],
    ]);
    onMounted(() => {
        dataReady.value = true;
    });
</script>