<template>
    <div class="invoice">
        <div class="title">
            <h1>New invoice</h1>
            <p>235456</p>
        </div>

        <form class="invoice-form" action="">

            <div class="group">
                <h3>Bill to</h3>
                <Input label="recepient name" v-model="invoice.recepientName"/>
                <Input label="recepient address" v-model="invoice.recepientAddress"/>
                <Input type="date" label="due date" v-model="invoice.dueDate"/>
            </div>

            <div class="summary">
                <h3>Summary</h3>
                <div><p>Recepient</p><p>{{ invoice.recepientName }}</p></div>
                <div><p>Due date</p><p>{{invoice.dueDate}}</p></div>
                <div><p>Pre Tax </p><p>{{ invoice.servicePrice }} {{ store.currency }}</p></div>
                <div><p>Tax amount</p><p>{{  invoice.servicePrice  * 1.2 - invoice.servicePrice}} {{ store.currency }} ({{store.tax}})</p></div>
                <div><p>Total</p><p>{{ invoice.servicePrice * 1.2 }} {{ store.currency }}</p></div>
            </div>

            <div class="group full-span service">
         
                <h3>Service</h3>
                <div>
                    
                    <div class="group">
                        <Input label="Service title" v-model="invoice.serviceTitle"/>
                        <TextareaInput label="service description" v-model="invoice.serviceDescription"/>
                    </div>
                     <PriceInput label="Service price"/>
                </div>
                   
            </div>
 
            <div class="group instructions">
                <h3>Payment instructions</h3>
                <DropdownInput v-model="invoice.paymentMethod" :options="paymentMethods" label="Payment method"/>
                <TextareaInput label="notes" v-model="invoice.notes"/>
            </div>
 
            <div  class="span-2 options">
                <Button text="Save"/>
                <Button theme="warning" text="Delete"/>
            </div>
            
        </form>

        
    </div>
</template>

<script setup>
import Input from '@/components/forms/Input.vue'; 
import TextareaInput from '@/components/forms/TextareaInput.vue';
import DropdownInput from '@/components/forms/DropdownInput.vue'; 
import PriceInput from '@/components/forms/PriceInput.vue'; 
import Button from '@/components/Button.vue' ;
import { ref } from 'vue';
import {useMainStore} from '@/stores/mainStore';
const store = useMainStore();

const paymentMethods = [{id:0,val:'UniCredit Bank',description:"Domestic payment"},{id:1,val:'Banca Intesa',description:"Global payment"}];
const invoice = ref({
    recepientName:'',
    recepientAddress:'',
    dueDate:'',
    serviceTitle:'',
    serviceDescription:'',
    servicePrice:'',
    paymentMethod:paymentMethods[0],
    notes:''
})

</script>

<style lang="scss" scoped>
.invoice{
    background-color: white;
    max-width: 1400px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    padding: 4rem;

    >.title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

 


.invoice-form{
    margin-top: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4vw;
}

.full-span{
    grid-column: 1/3;
}

 .group{
    >:nth-child(n+2){
        margin-top: 1rem;
    }

    &.split{
        display: flex;
        gap: 4vw;
        >*{
            flex: 1;
        }
    }
 }

 .service{
    >div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2vw;
    }
 }
  
 .summary{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: $line-02;
    border-radius: $cornerRadius;
    max-width: 500px;
    width: 100%;
    justify-self: end;
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

.options{
    display: flex;
    justify-content: space-between;
    grid-column: 1/3;
}
 
</style>