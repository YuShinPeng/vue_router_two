<script>
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
<div class="container">

</div>
<h1>這是App.vue</h1>

<RouterLink to="/v-bind">v-bind</RouterLink>
<RouterLink to="/">Home</RouterLink>
<router-link to="/about">about</router-link>
<RouterLink to="/props">Props</RouterLink>

<!-- V-bind -->
<div class="routerView">
  
</div>
<router-view />

</template>


<style scoped>

</style>
