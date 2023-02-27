<template>
    <button type="button" :class="[props.theme,props.size]">{{props.text}}</button>
</template>

<script setup>
 const props = defineProps({ 
    text:String,
    size:{
        default:'default',
        validator:(val)=>['default','small'].includes(val)
    },
    theme:{
        default:'default',
        validator: (val)=>['default','warning','safe'].includes(val)
    }
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

    &.small{
        padding:0.5rem 1.5rem;
    }
   
    &.default{
   
        background-color: rgba($color: $purple, $alpha: 1);
     
    }

    &.warning{
        background-color: rgba($color: red, $alpha: 1);
         
    }
    &.safe{
        background-color: rgba($color: green, $alpha: 1);
 
    }

    &:hover{
            &.default{

                background-color: rgba($color: $purple, $alpha: 0.9);

            }

            &.warning{
                background-color: rgba($color: rgb(255, 83, 26), $alpha: 1);

            }
            &.safe{
                background-color: rgba($color: green, $alpha: 0.9);

            }
    }
}
</style>