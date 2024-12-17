<template>
    <div>
        <main>
            
            <nuxt-link to="/about"></nuxt-link>

            <div class="container">

                <div v-if="user">
                    <h1 class="main-title bold cl-red">{{ $t("Global.welcome") }} &nbsp; {{ user.name }}</h1>
                    <h3 class="main-title normal main-cl">{{ user.email }}</h3>
                </div>
                
                <div v-else>
                    <h1 class="main-title bold cl-red"> Home page</h1>
                </div>

                <div class="row">
                    <div class="col-6">
                        <ChartsBar />
                    </div>

                    <div class="col-6">
                        <ChartsGradientArea />
                    </div>
                </div>
            </div>
    
        </main>
    </div>
</template>

<script setup>

definePageMeta({
    name: "Titles.home",
});

const store = useAuthStore();


const { token, user } = storeToRefs(store);

</script>
