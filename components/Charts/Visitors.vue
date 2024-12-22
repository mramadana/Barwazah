<template>

    <div v-if="dataReady" class="w-100">

      <VChart ref="chart" :option="option" style="height: 300px; width: 100%; display: block" />

    </div>

  </template>
  
  <script setup>

    import * as echarts from 'echarts/core';
    import { GridComponent } from 'echarts/components';
    import { BarChart } from 'echarts/charts';
    import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([GridComponent, BarChart, CanvasRenderer]);

    const dataReady = ref(false);
    const chart = ref(null);

    setTimeout(() => {
        dataReady.value = true;
    }, 10);

    const option = ref({
        grid: {
            left: '5%',
            right: '5%',
            top: '10%',
            bottom: '10%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: [
            'البريد الإلكتروني',
            'التواصل الاجتماعي',
            'بحث مدفوع',
            'الظهور المحلي',
            'إحالة',
            'مباشر',
            ],
            axisLabel: {
            interval: 0,
            rotate: -45,
            
             // Rotate labels for readability
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
            formatter: '{value} %', // Add percentage sign
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}%',
        },
        series: [
            {
            data: [0.28, 0.48, 0.8, 17.18, 5.89, 75.28],
            type: 'bar',
            barWidth: '50%',
            itemStyle: {
                color: (params) => {
                const colors = [
                    '#c1c1c1',
                    '#c1c1c1',
                    '#c1c1c1',
                    '#d9534f',
                    '#c1c1c1',
                    '#d9534f',
                ];
                return colors[params.dataIndex];
                },
                borderRadius: [5, 5, 0, 0], // Rounded top corners
            },
            label: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                fontSize: 12,
                color: '#000',
            },
            },
        ],
    });
    
  </script>

