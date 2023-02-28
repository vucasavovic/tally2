<template>
    <div  @click="showOptions(true)" class="dropdown-input">   
        <Input icon="down-arrow.svg" :label="props.label" v-model="modVal" readonly/> 
        <div :class="['options',{active:optionsVisible}]">
          <span  v-for="option of props.options" :key="option.id" @click.stop="select(option)">{{option.name}} 
            <span v-if="option.description" class="hint">({{option.description}})</span>
          </span>
        </div>
    </div>
</template>

<script setup>
import Input from '@/components/forms/Input.vue' 
import { ref,watch,computed,onMounted } from 'vue';

    const props = defineProps({ 
        label:String,
        options :{type:Array,default:[{id:'00000',name:'Undefined'}]},
        modelValue:Object
    })
    
    const modVal = computed(()=>{
        if(props.modelValue) return props.modelValue.name
        return ''
    })

    const emit = defineEmits(['update:modelValue'])
    emit('update:modelValue',props.options[0])
  
    const select = function(option){
        emit('update:modelValue',option)
        showOptions(false)
    }

    const optionsVisible = ref(false)
    const showOptions = function(show){
       optionsVisible.value = show;
    }
 

    onMounted(()=>{
        emit('update:modelValue',props.options[0])
    })

 
</script>

<style lang="scss" scoped>
.dropdown-input{
    position: relative;
}

.options{
    display: none;
    position: absolute;
    z-index: 100;
    top: 106%;
  
    width: 100%;

    background-color: white;

    padding: 0.5rem 0;

    border: $line-02;
    border-radius: $cornerRadius;
    box-shadow: 0 0 12px rgba($color: #000000, $alpha: 0.1);
 
    >*{
        cursor: pointer;
        display: block;
        padding: 0.5rem 1rem;
        &:hover{
            background-color: $offwhite;
        }
    }

    &.active{
        display: block;
    }

    & .hint{
        font-size: 0.8rem;
        opacity: 0.4;
    }
}
</style>