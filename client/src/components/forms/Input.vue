<template>
    <div class="input">
        <label for="">{{props.label}}</label>
        <div class="field">
            <input :type="props.type" :value="props.modelValue" @input="emit('update:modelValue',$event.target.value)" :readonly="props.readonly">
            <img  v-if="props.icon " @click="displayOptions " :src="`/images/icons/${iconName}`" :alt="props.label +  ' icon'">
        </div>
        
        
    </div>
</template>

<script setup>
import { ref,computed } from 'vue';

 const props = defineProps({ 
    label:String,
    icon:String,
    type:{default:'text',
            validator:(val)=>['text','number','password','date'].includes(val) 
    },
    modelValue:[String,Number],
    readonly:Boolean
})

const emit = defineEmits(['update:modelValue' ])

const iconName = computed(()=>{
    if(['currency-$.svg','currency-dollar.svg','currency-usd.svg'].includes(props.icon) ){
        return 'currency-dollar.svg';
    }else{
        return props.icon
    }
})
 
</script>

<style lang="scss" scoped>
 .input{
    >.field{
        position: relative;
        >img{
            position: absolute;
            right: 1.25rem;
            top: 50%;
            transform: translateY(-50%);
        }
    }
 }
</style>