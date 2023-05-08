<script>
export default{
    data() {
        return {
            isRounded:false,
            imgArr:[
                "../../public/img/123.jpg",
                "../../public/img/456.jpg"
            ],
            // imgArr:["https://kusunoki-vet.jp/wp-content/uploads/8509bfb01b1c64c1d6a9ffe2c5d43cc2.jpeg",
            //         "https://d3utmhtlcphhyc.cloudfront.net/files/topics/19_ext_01_0.png"],
                    
            imgNum:false,
            
        }
    },
    methods: {
        changeRound(){
            this.isRounded = !this.isRounded
        },
        changeImg(){
            this.imgNum = !this.imgNum
        }

    },
}
</script>

<template>
    <div>
        <h1>VBind Page</h1>
        <button type="button" @click="changeRound">Rounded</button>
        <div class="box" v-bind:class="{rounded:isRounded}"></div>
        <button type="button" @click="changeImg">Img</button>
        <img v-bind:src="imgArr[this.imgNum? 0: 1]">
    </div>
</template>

<style scoped>
    .box{
        width: 300px;
        height: 300px;
        background-color: blue;
    }

    .rounded{
        width: 300px;
        height: 300px;
        background-color: black;
        border-radius: 2rem;
    }

</style>