<template>
    <div class="container">
        <div class="layout-form chart_layout">
            <h3 class="main-title bold text-center mb-5">نمو الاعمال</h3>
            <ChartsBusinessGrowth />
        </div>
    </div>
</template>


<script setup>
    definePageMeta({
        name: "Titles.business_growth",
        middleware: 'auth'
    });
</script>