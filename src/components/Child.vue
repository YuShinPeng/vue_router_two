<script>
export default{
    components:{

    },
    props:[
        "title",
        "imgData"
    ],
    data(){
        return{
            test:"123"
        }
    },
    methods:{

    }
}

</script>

<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <img class="img" v-bind:src="imgData" v-bind:alt="title">
        
    </div>
</template>

<style lang="scss" scoped>
.card{
    width: 200px;
    height: 200px;
    border-radius: 1rem;
    border:1px solid black;
    
}

.img{
    width: 100px;
    height: 100px
}



</style>