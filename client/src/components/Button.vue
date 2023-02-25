<template>
    <button type="button">{{props.text}}</button>
</template>

<script setup>
 const props = defineProps({ 
    text:String
})
</script>

<style lang="scss" scoped>
button{
    cursor: pointer;
    width: fit-content;
    padding: 1rem 2.4rem;
    background-color: rgba($color: $purple, $alpha: 1);
    color: white;
    transition: all .2s ease-in-out;
 
    &:hover{
        background-color: rgba($color: $purple, $alpha: 0.9);
    }
}
</style>