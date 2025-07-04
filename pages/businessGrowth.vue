<template>
    <div class="container">
        <div class="layout-form chart_layout">
            <h3 class="main-title fw-normal text-center mb-4">نمو الاعمال</h3>
            <!-- <ChartsBusinessGrowth /> -->
            <ChartsTestbusinessGrowth />

        </div>
    </div>
</template>


<script setup>
    definePageMeta({
        name: "Sidebar.business_growth",
        middleware: 'auth'
    });
</script>