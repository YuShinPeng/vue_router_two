<script>
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
<div class="container">

</div>
<h1>這是App.vue</h1>

<RouterLink to="/v-bind" class="link">v-bind</RouterLink>
<RouterLink to="/" class="link">Home</RouterLink>
<router-link to="/about" class="link">about</router-link>
<RouterLink to="/props" class="link">props</RouterLink>
<RouterLink to="/emit" class="link">emit</RouterLink>
<RouterLink to="/v-show" class="link">v-show</RouterLink>
<RouterLink to="/model" class="link">model</RouterLink>

<!-- V-bind -->
<div class="router-View">
  
</div>
<router-view />

</template>


<style scoped>
    .link{
        width: 100px;
        background-color: blanchedalmond;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }

</style>
