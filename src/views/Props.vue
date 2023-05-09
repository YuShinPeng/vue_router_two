<script>
import Child from '../components/Child.vue';

export default{
    data() {
        return {
            cardData: [
                {
                    img: "../../public/img/123.jpg",
                    title: "狗狗1"
                },
                {
                    img: "../../public/img/456.jpg",
                    title: "狗狗2"
                }
            ]
        };
    },
    components: { Child }
}
</script>

<template>
    <h1>Props Page</h1> 
    <div class="card">
       <Child 
       v-for="card in cardData" key="card.title"
       v-bind:title="card.title" 
       v-bind:imgData="card.img"/>
    </div>
</template>

<style lang="scss" scoped>
.card{
    display: flex;
    margin:1rem
}

</style>