<script>
export default{
    props:[
        "title",
        "content",
        "isShow"
    ],

    methods: {
        changeShowOutside(){
            this.$emit("switch")
        }
    },
}
</script>

<template>
    <div>
        
<div class="model" :class="{show : isShow}">
    <!-- Model Card -->
    <div class="card">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <button type="button" @click="changeShowOutside">Close</button>
    </div>
    <!-- Background -->
    <div class="bg"></div>
</div>

    </div>
</template>

<style lang="scss" scoped>
   .model{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top:0;
        left:0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    
    .bg{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
        z-index: -1;
    }

    .card{
        background-color: #fff;
        width: 30vw;
        border-radius: 2rem;
        padding: 2rem;
        text-align: center;
    }

    h2{
        margin:0;
    }



</style>