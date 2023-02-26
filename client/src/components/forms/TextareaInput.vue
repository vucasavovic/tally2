<template>
    <div class="input">
        <label for="">{{props.label}}</label>
        <textarea name="" id="" :value="props.modelValue" @input="emit('update:modelValue',$event.target.value)" ></textarea>
    </div>
</template>

<script setup>
 const props = defineProps({ 
    label:String,
    modelValue:String
})

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
textarea{
    min-height: 200px;
    max-height: 360px;
    resize: vertical;
}
</style>