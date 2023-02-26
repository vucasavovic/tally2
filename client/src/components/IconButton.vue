<template>
    <div class="icon">
        <img :src="`/images/icons/${props.icon}`" alt="icon">
    </div>
</template>

<script setup>
    const props = defineProps({ 
        icon:String
    })
</script>

<style lang="scss" scoped>
    .icon{
        cursor: pointer;
        width: 26px;
        height: 26px;
        >img{
            width: 100%;
        }
    }
</style>