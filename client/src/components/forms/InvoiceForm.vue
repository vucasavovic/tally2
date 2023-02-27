<template>
    <form class="invoice">
 

        <form  class="invoice-form">

            

            <div class="group half">
                <h3>Bill to</h3>
                <Input label="recepient name" v-model="invoice.recepientName"/>
                <Input label="recepient address" v-model="invoice.recepientAddress"/>
                <Input type="date" label="due date" v-model="invoice.dueDate"/>
            </div>

          

            <div class="group full ">
              
                    <Input label="Service title" v-model="invoice.serviceTitle"/>
                    <TextareaInput label="service description" v-model="invoice.serviceDescription"/>
             
                    <Input type="number" :icon="`currency-${store.currency.val}.svg`" label="service price" v-model.number="invoice.servicePrice"/>
              
            </div>
 
            <div class="group full">
                <h3>Payment instructions</h3>
                <DropdownInput v-model="invoice.paymentMethod" :options="paymentMethods" label="Payment method"/>
                <TextareaInput label="notes" v-model="invoice.notes"/>
            </div>

            <div class="summary half">
                <h3>Summary</h3>
                <div><p>Recepient</p><p>{{ invoice.recepientName }}</p></div>
                <div><p>Due date</p><p>{{invoice.dueDate}}</p></div>
                <div><p>Pre Tax </p><p>{{ invoice.servicePrice }} {{ store.currency.val }}</p></div>
                <div><p>Tax amount</p><p>{{ tax }} {{ store.currency.val }} ({{store.tax}})</p></div>
                <div><p>Total</p><p>{{ invoice.servicePrice + tax }} {{ store.currency.val }}</p></div>
            </div>
 
            <div  class=" options full">
                <Button   @click="emit('saved',invoice)" text="Save"/>
                <Button v-if="!fresh" @click="emit('refreshed')" text="Refresh form" theme="warning"/>
            </div>
            



        </form>
 
    </form>
</template>

<script setup>
import Input from '@/components/forms/Input.vue'; 
import TextareaInput from '@/components/forms/TextareaInput.vue';
import DropdownInput from '@/components/forms/DropdownInput.vue'; 
import Button from '@/components/Button.vue' ;
import { ref,reactive,computed,watch } from 'vue';
import {useMainStore} from '@/stores/mainStore';
const store = useMainStore();
const emit = defineEmits(['saved','refreshed'])
const paymentMethods = [{id:0,val:'UniCredit Bank',description:"Domestic payment"},{id:1,val:'Banca Intesa',description:"Global payment"}];


const invoice = reactive({
    invoiceId:null,
    recepientName:'',
    recepientAddress:'',
    dueDate:'',
    serviceTitle:'',
    serviceDescription:'',
    servicePrice:0,
    paymentMethod:paymentMethods[0],
    notes:''
})

const fresh = ref(true);

watch(invoice,(nyu,ol)=>{
   fresh.value = false;
})

const tax = computed(()=>{
   return Math.floor(Number(invoice.servicePrice)  * 1.2 - Number(invoice.servicePrice));
})


const refresh = ()=>{
        window.scrollTo(0, 0);
        fresh.value = true;
        invoice.invoiceId=null,
        invoice.recepientName='',
        invoice.recepientAddress='',
        invoice.dueDate='',
        invoice.serviceTitle='',
        invoice.serviceDescription='',
        invoice.servicePrice=0,
        invoice.paymentMethod=paymentMethods[0],
        invoice.notes=''     
}



defineExpose({refresh})
 
</script>

<style lang="scss" scoped>
.invoice-form{
    
    max-width: 720px;
     display: flex;
     flex-direction: column;
     gap: 3rem;
}
  

.body{
  
    display: grid;
    grid-template-columns: 1fr 1fr  ;
    gap: 3rem;
   
    & .half{
      grid-column: span 1;
    }

    & .full{
        grid-column: span 2;
    }
 
  }
  
 .summary{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: $line-02;
    border-radius: $cornerRadius;
 
    >*{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.3rem;
    }
    >:not(:first-child){
        border-bottom: $line-02;
    }
    >:last-child{
        margin-top: auto;
        font-weight: 600;
        border: none;
        padding-bottom: 0;
    }
  
 }
 
 .instructions{
    grid-column: 1/5;
 }
.options{
    display: flex;
    justify-content: space-between;
    grid-column: 1/3;
}
 
</style>