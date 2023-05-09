<script>
import Popup from "../components/Popup.vue";
export default{
    components:{
        Popup
    },

    data() {
        return {
            isShow:false,
            modelInfo:{
                title:"123",
                content:"12345678"
            }
        }
    },
    methods: {
        changeShow(){
            this.isShow = !this.isShow
        }
    },
}
</script>

<template>
    <div class="model-ex">
        <h2>Model Page</h2>
        <button type="button" @click="changeShow">Open</button>
    </div>

    <Popup 
    v-if="isShow" 
    v-on:switch="changeShow"
    v-bind:title="modelInfo.title"
    v-bind:content="modelInfo.content"
    v-bind:isShow="isShow" />
    
</template>

<style lang="scss" scoped>

    .model-ex{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }



</style>