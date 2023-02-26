<template>
    <div v-if="visible" class="overlay">
        <div class="popup-card">
            <h4 class="title">{{ popupTitle }}</h4>
            <p>{{ popupMessage }}</p>

            <div class="options">
                <Button @click="proceed" text="Continue"/>
                <Button @click="abort" theme="warning" text="Not yet"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue' 
 

const visible = ref(false);

const popupTitle = ref('Default question?');
const popupMessage = ref('Lorem ipsum dolor sit amet consectetur adipiscing elit platea vel.');
const popupCallback= ref(null);

const showPopup = (title,message,callback)=>{
   visible.value=true;
   popupTitle.value = title;
   popupMessage.value= message;

   popupCallback.value = callback;
}

const proceed = ()=>{
    if(popupCallback.value){
        popupCallback.value();
        abort();
    }
     
}

const abort = ()=>{
    popupCallback.value = null;
    visible.value = false;
}



defineExpose({showPopup})
</script>

<style lang="scss" scoped>
.overlay{
    background-color: rgba($color: #000000, $alpha: 0.3);
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;


    display: flex;
    justify-content: center;
    align-items: center;


}

.popup-card{
    padding: 4rem;
    background-color: white;
    max-width: 500px;
    border-radius: $cornerRadius;

    >.title{
        margin-bottom: 2rem;
        font-size: 1.4rem;
    }

    >.options{
        margin-top: 2rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
    }
}
</style>