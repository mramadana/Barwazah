<template>
    <div>
      <ChartsGradient_test
          :initialMonths="months"
          :initialAllMonths="allMonths"
          :initialOption="chartOptions"
          :initialMonthlyData="manualMonthlyData"
          @rental-type-change="handleRentalTypeChange"
          :initialSeriesData="seriesData"
      />
  
      <div class="overlay-sidebar" @click="$emit('toggle-active')" :class="{ 'show': isActive }"></div>
  
      <!-- start to close Dialog -->
      <Dialog v-model:visible="logoutDialog" modal class="custum_dialog_width auth-daialog"
        :draggable="false">
        <div class="text-center">
          <h1 class="main-title bold mb-5">
            {{ $t("Global.sure_logout") }}
          </h1>
          <div class="section-btns mt-4">
            <button type="button" class="custom-btn sm d-inline-flex" @click="logoutDialog = false">
              {{ $t("Global.retreat") }}
            </button>
            <button type="button" class="custom-btn logout sm d-inline-flex" @click="logout">
              {{ $t("Sidebar.logout") }}
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  </template>
  
  <script setup>

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// Register ECharts modules
echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, LegendComponent]);

const allMonths = ref(['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']);

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

const backendData = ref({
  marketData: [
    { id: 1, month: "يناير", value: 2.00 },
    { id: 2, month: "فبراير", value: 0 },
    { id: 3, month: "مارس", value: 0 },
    { id: 4, month: "أبريل", value: 0 },
    { id: 5, month: "مايو", value: 0 },
    { id: 6, month: "يونيو", value: 0 },
    { id: 7, month: "يوليو", value: 0 },
    { id: 8, month: "أغسطس", value: 0 },
    { id: 9, month: "سبتمبر", value: 0 },
    { id: 10, month: "أكتوبر", value: 0 },
    { id: 11, month: "نوفمبر", value: 0 },
    { id: 12, month: "ديسمبر", value: 2.50 }
  ],
  storeDataData: [
    { id: 1, month: "يناير", value: 1.00 },
    { id: 2, month: "فبراير", value: 0 },
    { id: 3, month: "مارس", value: 0 },
    { id: 4, month: "أبريل", value: 0 },
    { id: 5, month: "مايو", value: 0 },
    { id: 6, month: "يونيو", value: 0 },
    { id: 7, month: "يوليو", value: 0 },
    { id: 8, month: "أغسطس", value: 0 },
    { id: 9, month: "سبتمبر", value: 0 },
    { id: 10, month: "أكتوبر", value: 0 },
    { id: 11, month: "نوفمبر", value: 0 },
    { id: 12, month: "ديسمبر", value: 0 }
  ]
});

const seriesData = ref([
  backendData.value.marketData.map(item => item.value),
  backendData.value.storeDataData.map(item => item.value)
]);

const manualMonthlyData = ref({});

const AllData = ref([]);

const loading = ref(true);

const { response } = responseApi();

const axios = useApi();

const { token } = storeToRefs(useAuthStore());

// config
const config = computed(()=> {
    return { headers: { Authorization: `Bearer ${token.value}` } }
});

// Transform the backend data into the required format
const transformBackendData = (marketData, storeDataData) => {
  const monthlyData = {};
  
  marketData.forEach((item, index) => {
    monthlyData[item.id] = {
      marketData: [item.value],
      storeDataData: [storeDataData[index].value]
    };
  });

  return monthlyData;
};

// Initialize the monthly data
manualMonthlyData.value = transformBackendData(backendData.value.marketData, backendData.value.storeDataData);

const getData = async () => {
  loading.value = true;
  await axios.get('AverageShoppingCartSize?type=0', config.value).then(res => {
    if (response(res) == "success") {
      AllData.value = res.data.data;
      console.log(AllData.value, "AllData");
    }
    loading.value = false;
  }).catch(err => console.log(err));
};


onMounted(() => {
    getData();
});
  </script>
  
  <style scoped>
  .sidebar {
    height: 100%;
    width: 85px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111;
    transition: 0.5s;
    overflow-x: hidden;
    padding-top: 60px;
    white-space: nowrap;
  }
  
  .sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }
  
  .sidebar a:hover {
    color: #f1f1f1;
  }
  
  .material-icons,
  .icon-text {
    vertical-align: middle;
  }
  
  .material-icons {
    padding-bottom: 3px;
    margin-right: 30px;
  }
  
  #main {
    padding: 16px;
    margin-left: 85px;
    transition: margin-left 0.5s;
  }
  
  @media screen and (max-height: 450px) {
    .sidebar {
      padding-top: 15px;
    }
    .sidebar a {
      font-size: 18px;
    }
  }
  </style>
  