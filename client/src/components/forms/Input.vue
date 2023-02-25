<template>
    <div class="input">
        <label for="">{{props.label}}</label>
        <input :type="props.type" :value="props.modelValue" @input="emit('update:ModelValue',$event.target.value)">
    </div>
</template>

<script setup>
 const props = defineProps({ 
    label:String,
    type:{default:'text',
        validator(val){
            return ['text','number','password'].includes(val)
        }
    },
    modelValue:[String,Number]
})

const emit = defineEmits(['update:modelValue'])

</script>

<style lang="scss" scoped>
 
</style>