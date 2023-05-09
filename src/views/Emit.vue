<script>
import FormView from "../components/Form.vue";
export default{
    components:{
        FormView
    },
    data() {
        return {
            inputText:"123"
        }
    },
    methods: {
        getPush(sourceData){
            this.inputText = sourceData;
        }
    },
}

</script>

<template>
    <!-- <button type="button" @click="getPush">getPush</button> -->
    <div class="emit">
        <h2>Emit</h2>
        <p>{{ inputText }}</p>
        <FormView 
            v-bind:inputText="inputText"
            v-on:emitPush="getPush"
        />
    </div>
</template>

<style scoped>
    .emit{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>