<script>
export default{
    data() {
        return {
            sourceData:""
        }
    },
    methods: {
        push(){
            console.log("push")
            this.$emit("emitPush",this.sourceData)
        }
    },
}
</script>

<template>
    <div class="form">
        <p>{{ sourceData }}</p>
        <form>
            <input type="text" v-model="sourceData">
            <button type="button" @click="push">Click</button>
        </form>        
        
    </div>
</template>

<style scoped>
    .form{
        border:2px solid black;
        padding: 4rem;
    }
</style>