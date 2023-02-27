<template>
    <div class="title">
        <h1 v-show="props.tier==1">{{ props.text }}</h1>
        <h2 v-show="props.tier==2">{{ props.text }}</h2>
        <h3 v-show="props.tier==3">{{ props.text }}</h3>
        <h4 v-show="props.tier==4">{{ props.text }}</h4>
        <h5 v-show="props.tier==5">{{ props.text }}</h5>
        <h6 v-show="props.tier==6">{{ props.text }}</h6>
    </div>
</template>

<script setup>
 const props = defineProps({ 
    text:String,
    tier:Number,
    size:{
        default:'m',
        validator:(val)=>['s','m','l','xl','xxl'].includes(val)
    }
})
</script>

<style lang="scss" scoped>
title{
    width: 100%;

    & .xl{
        font-size: 2.4rem;   
    }
    & .l{
        font-size: 1.2rem;   
    }
    & .m{
        font-size: 1rem;    
    }
    >*{
        font-size: inherit;
    }
}
</style>