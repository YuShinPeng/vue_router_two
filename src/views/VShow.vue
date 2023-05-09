<script>
export default{
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        change(){
            this.isShow = !this.isShow;
        }
    },
}
</script>

<template>
    <div>
        <h2>v-show</h2>
        <div class="boxes">
            <div v-show="isShow" class="box box1"></div>
            <div v-if="isShow" class="box box2"></div>
        </div>        
        <button type="button" @click="change">click</button>
        {{ isShow }}
    </div>
</template>

<style>
    .boxes{
        position: relative;
    }

    .box{
        width: 3rem;
        height: 3rem;
        top:60px;
    }
    
    .box1{
        background-color: blue;
        position: absolute;
      
        left:0;
    }

    .box2{
        background-color: red;
        position: absolute;
      
        left:100px;
    }

</style>