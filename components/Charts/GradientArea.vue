    <template>
        <div v-if="dataReady" style="width: 100%; height: 400px;">
            <div class="d-flex align-items-center justify-content-center gap-4">
                <label class="label mb-0">
                    {{$t('Global.gender')}}
                </label>
                <div class="with_cun_select custom-select">
                    <div class="flex justify-content-center dropdown_card">
                        <Dropdown v-model="rentalType" @change="handleRentalTypeChange" :options="rentals" optionLabel="name" :placeholder="$t('Global.show_all')" class="w-full md:w-14rem custum-dropdown" />
                    </div>
                </div>
            </div>
            <VChart ref="chart" :option="option" style="height: 100%; width: 100%;" />
        </div>
    </template>
  
  
  <script setup>

    const echarts = await import('echarts/core');

    import { useI18n } from 'vue-i18n';
  
    const { t } = useI18n();

    import { LineChart } from 'echarts/charts';
    import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
    import { CanvasRenderer } from 'echarts/renderers';

    setTimeout(() => {
    dataReady.value = true;
    }, 10);

    const rentalType = ref(null);
  
    const rentals = ref([
        { name: t('Global.show_all'), id: 0 },
        { name: t('Global.males'), id: 1 },
        { name: t('Global.females'), id: 2 },
    ])

    echarts.use([
        LineChart,
        TooltipComponent,
        GridComponent,
        CanvasRenderer,
        LegendComponent
    ]);

    const chart = ref(null);
    const dataReady = ref(false);
  
    
    const option = {
        legend: {
        top: '95%',
        itemGap: 50,
        selected: {
            [t('Global.females')]: true,
            [t('Global.males')]: true,  
        },
        },
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: { backgroundColor: '#6a7985' }
        }
        },
        grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
        },
        xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 
                'نوفمبر', 'ديسمبر', 'يناير', 'فبراير', 'مارس']
        },
        yAxis: {
        type: 'value',
        show: false
        },
        series: [
        {
            name: 'المجموعة 1',
            type: 'line',
            smooth: true,
            symbol: 'square',
            symbolSize: 7,
            showSymbol: true,
            lineStyle: { width: 2, color: '#4681f4' },
            itemStyle: { color: '#013660' },
            areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(70, 129, 244, 0.6)' },
                { offset: 1, color: 'rgba(70, 129, 244, 0.2)' }
            ])
            },
            data: [40, 50, 60, 70, 65, 75, 85, 80, 90, 95, 110]
        },
        {
            name: 'المجموعة 2',
            type: 'line',
            smooth: true,
            symbol: 'square',
            symbolSize: 7,
            showSymbol: true,
            lineStyle: { width: 2, color: '#f75c5c' },
            itemStyle: { color: '#e5254a' },
            areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(247, 92, 92, 0.6)' },
                { offset: 1, color: 'rgba(247, 92, 92, 0.2)' }
            ])
            },
            data: [30, 40, 55, 50, 55, 60, 75, 72, 78, 82, 90]
        }
        ]
    };

    
  </script>
  