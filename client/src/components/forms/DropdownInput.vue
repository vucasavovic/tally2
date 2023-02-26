<template>
    <div @click="showOptions(true)" class="dropdown-input">   
        <Input icon="down-arrow.svg" :label="props.label" v-model="Object.values(selected)[1]" readonly/> 
        <div :class="['options',{active:optionsVisible}]">
            <span  v-for="option of props.options" :key="Object.values(option)[0]" @click.stop="select(option)">{{Object.values(option)[1]}} 
                <span v-if="option.description" class="hint">({{option.description}})</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import Input from '@/components/forms/Input.vue' 
import { ref } from 'vue';

    const props = defineProps({ 
        
        label:String,
        options:{type:Array},
        modelValue:Object
    })

  
    const selected = ref(props.options[0]);
    const emit = defineEmits(['update:modelValue'])

    const select = function(option){
        selected.value = option;
        emit('update:modelValue',option)
        showOptions(false)
    }

    const optionsVisible = ref(false)
    const showOptions = function(show){
        optionsVisible.value = show;
    }

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