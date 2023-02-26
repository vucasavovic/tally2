<template>
    <div class="price-input">
        <Input :icon="`currency-${currency}.svg`"  :label="props.label" v-model="price.amount"  />   
    </div>
</template>

<script setup>
import Input from '@/components/forms/Input.vue' 
import DropdownInput from '@/components/forms/DropdownInput.vue'
import { ref , computed} from 'vue';
import {useMainStore} from '@/stores/mainStore.js'
    const props = defineProps({ 
        label:String,
    })

    const store = useMainStore();

    const currency = computed(()=>{
        
        if(['dollar','$','usd'].includes(store.currency)){
            return 'dollar'
        }else{
            return store.currency
        }
    })
  
 const price = ref({
    amount:0,
    currency:''
 })

</script>

<style lang="scss" scoped>
.price-input{
    height: fit-content;
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    >:nth-child(1){
        flex: 1;
    }
    >:nth-child(2){
        max-width: 120px;
    }
}
</style>