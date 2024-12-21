<template>

    <div v-if="dataReady" class="w-100">

      <VChart ref="chart" :option="option" style="height: 300px; width: 100%; display: block" />

    </div>

  </template>
  
  <script setup>

    import * as echarts from 'echarts/core';
    import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
    } from 'echarts/components';
    import { BarChart } from 'echarts/charts';
    import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([
        TitleComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        BarChart,
        CanvasRenderer
    ]);
    
    // Data readiness flag
    const dataReady = ref(false);
    const chart = ref(null);
    setTimeout(() => {
    dataReady.value = true;
  }, 10);
    
  
  const option = ref({
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        formatter: (params) => {
        const value = params[0]?.value || 0;
        return `${value}%`;
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        show: false,
        axisLine: {
        show: false,
        },
        axisTick: {
        show: false,
        },
        splitLine: {
        show: false,
        },
    },
    yAxis: {
        type: 'category',
        data: ['الفساتين', 'البليزر', 'التنانير'], // Replace with dynamic data if needed
        position: 'right',
        axisLine: {
        show: false,
        },
        axisTick: {
        show: false,
        },
        axisLabel: {
        fontSize: 14,
        color: '#333',
        padding: [0, 15, 0, 0],
        },
    },
    series: [
        {
        type: 'bar',
        data: [12.32, 12.7, 12.38], // Replace with dynamic data if needed
        // barWidth: '50%', // Adjust bar width
        itemStyle: {
            borderRadius: [10, 0, 0, 10], // Rounded corners for the bars
            color: '#f75c5c', // Bar color
        },
        label: {
            show: true,
            position: 'insidleft',
            formatter: '{c}%',
            offset: [10, 18],
            textStyle: {
            fontSize: 14,
            color: '#fff',
            },
        },
        },
    ],
});
  </script>
  