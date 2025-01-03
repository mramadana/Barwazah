<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-11 mr-auto mb-4">
                <h1 class="main-title bold lg mb-4">نمو الاعمال </h1>
                <div class="layout-form chart_layout">
                    <h3 class="main-title bold text-center mb-5">نمو الاعمال</h3>
                    <ChartsBusinessGrowth />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.container-fluid {
  padding: 2rem;
}
</style>
