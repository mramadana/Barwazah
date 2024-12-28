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
    LegendComponent,
    GraphicComponent
    } from 'echarts/components';
    import { BarChart } from 'echarts/charts';
    import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([
        TitleComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        BarChart,
        CanvasRenderer,
        GraphicComponent
    ]);
    
    // Data readiness flag
    const dataReady = ref(false);
    const chart = ref(null);

    
// API response for images
const apiData = {
  images: [
    { id: 1303, text: 'text label 1', image: "https://dashboard.awamer-store.4hoste.com/public/storage/images/products_files/1731314993_9381.png" },
    { id: 1304, text: 'text label 2', image: "https://dashboard.awamer-store.4hoste.com/public/storage/images/products_files/1731314993_2573.jpg" },
    { id: 1305, text: 'text label 3', image: "https://dashboard.awamer-store.4hoste.com/public/storage/images/products_files/1731314993_9843.png" },
    { id: 1306, text: 'text label 4', image: "https://dashboard.awamer-store.4hoste.com/public/storage/images/products_files/1731314993_6201.png" },
  ],
};

// Preprocess data to generate `rich` object and yAxis labels
const rich = {};
const yAxisLabels = apiData.images.map((item, index) => {
  const key = `img_${item.id}`; // Create unique keys for `rich`
  rich[key] = {
    height: 20,
    width: 20,
    backgroundColor: {
      image: item.image, // Use API image URL
    },
    align: 'center',
    textAlign: 'center',
    padding: [0, 10, 0, 0], // Add padding for spacing
  };
  return item.text; // Replace with a label text or a dynamic field
});

// ECharts Option
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
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
  },
  yAxis: {
    type: 'category',
    data: yAxisLabels, // Dynamically set labels
    position: 'right',
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      fontSize: 14,
      color: '#333',
      padding: [0, 15, 0, 0],
      formatter: (value, index) => {
        const key = `img_${apiData.images[index].id}`; // Map image by index
        return `{${key}|} ${value}`; // Combine image and label text
      },
      rich, // Assign dynamically generated rich object
    },
  },
  series: [
    {
      type: 'bar',
      data: [12.32, 11.7, 10.38, 9.32], // Replace with dynamic data if needed
      barWidth: '80%', // Adjust bar width
      itemStyle: {
        borderRadius: [10, 0, 0, 10], // Rounded corners for the bars
        color: '#f75c5c', // Bar color
      },
      label: {
        show: true,
        position: 'insideLeft',
        formatter: '{c}%',
        offset: [10, 5],
        textStyle: {
          fontSize: 14,
          color: '#fff',
        },
      },
    },
  ],
});


onMounted(() => {
    dataReady.value = true;
  })



//   const option = ref({
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: { type: 'shadow' },
//         formatter: (params) => {
//         const value = params[0]?.value || 0;
//         return `${value}%`;
//         },
//     },
//     grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         top: '20%',
//         containLabel: true,
//     },
//     xAxis: {
//         type: 'value',
//         show: false,
//         axisLine: {
//         show: false,
//         },
//         axisTick: {
//         show: false,
//         },
//         splitLine: {
//         show: false,
//         },
//     },
//     yAxis: {
//         type: 'category',
//         data: ['الفساتين', 'البليزر', 'التنانير'], // Replace with dynamic data if needed
//         position: 'right',
//         axisLine: {
//         show: false,
//         },
//         axisTick: {
//         show: false,
//         },
//         axisLabel: {
//         fontSize: 14,
//         color: '#333',
//         padding: [0, 15, 0, 0],
//         },
//     },
//     series: [
//         {
//         type: 'bar',
//         data: [12.32, 12.7, 12.38], // Replace with dynamic data if needed
//         // barWidth: '50%', // Adjust bar width
//         itemStyle: {
//             borderRadius: [10, 0, 0, 10], // Rounded corners for the bars
//             color: '#f75c5c', // Bar color
//         },
//         label: {
//             show: true,
//             position: 'insidleft',
//             formatter: '{c}%',
//             offset: [10, 18],
//             textStyle: {
//             fontSize: 14,
//             color: '#fff',
//             },
//         },
//         },
//     ],
// });














  // **************  second code **************
  
  // const option = ref({
  //     tooltip: {
  //         trigger: 'axis',
  //         axisPointer: { type: 'shadow' },
  //         formatter: (params) => {
  //             const value = params[0]?.value || 0;
  //             return `${value}%`;
  //         },
  //     },
  //     grid: {
  //         left: '3%',
  //         right: '4%',
  //         bottom: '3%',
  //         top: '20%',
  //         containLabel: true,
  //     },
  //     xAxis: {
  //         type: 'value',
  //         show: false,
  //         axisLine: { show: false },
  //         axisTick: { show: false },
  //         splitLine: { show: false },
  //     },
  //     yAxis: {
  //         type: 'category',
  //         data: ['الفساتين', 'البليزر', 'التنانير'],
  //         position: 'right',
  //         axisLine: { show: false },
  //         axisTick: { show: false },
  //         axisLabel: {
  //             fontSize: 14,
  //             color: '#333',
  //             padding: [0, 15, 0, 0],
  //         },
  //     },
  //     series: [
  //         {
  //             type: 'bar',
  //             data: [12.32, 12.7, 12.38],
  //             itemStyle: {
  //                 borderRadius: [10, 0, 0, 10],
  //                 color: '#f75c5c',
  //             },
  //             label: {
  //                 show: true,
  //                 position: 'insideLeft',
  //                 formatter: '{c}%',
  //                 offset: [10, 18],
  //                 textStyle: {
  //                     fontSize: 14,
  //                     color: '#fff',
  //                 },
  //             },
  //         },
  //     ],
  //     graphic: [
  //         {
  //             type: 'image',
  //             left: '80%',
  //             top: '10%',
  //             style: {
  //                 image: '/_nuxt/assets/images/Logo.svg',
  //                 width: 50,
  //                 height: 50,
  //             },
  //         },
  //         {
  //             type: 'image',
  //             left: '80%',
  //             top: '40%',
  //             style: {
  //                 image: '/_nuxt/assets/images/black_logo.png',
  //                 width: 50,
  //                 height: 50,
  //             },
  //         },
  //         {
  //             type: 'image',
  //             left: '80%',
  //             top: '70%',
  //             style: {
  //                 image: '/_nuxt/assets/images/black_logo.png',
  //                 width: 50,
  //                 height: 50,
  //             },
  //         },
  //     ],
  // });

  </script>
  