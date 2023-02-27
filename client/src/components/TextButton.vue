<template>
    <div class="text-button">
        <p>{{ props.text }}</p>
    </div>
</template>

<script setup>
 const props = defineProps({ 
    text:String
})
</script>

<style lang="scss" scoped>
.text-button{
    cursor: pointer;
    padding: 0.1rem;
    color: $purple;
}
</style>