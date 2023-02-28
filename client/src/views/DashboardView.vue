<template>
    <div :class="['view','dashboard-view',{'y-center':noInvoices}]"  >

        <Title :tier="1" text="Dashboard" size="xl"/>

        <div v-if="noInvoices" class="greeting">
            <h2>Welcome to Dashboard!</h2>
            <p> There are no Invoices yet! </p>
            <Button  @click="router.push('/invoice/new')" text="Create an invoice" />
        </div>
        

        <div v-if="!noInvoices" class="filter">
          <p>Filter</p>

          <Button @click="router.push('/invoice/new')" text="New invoice" />
        </div>

        <div v-if="!noInvoices" class="table">
            <div class="row header">
                <span>Num</span>
                <span>Recepient</span>
                <span>Service</span>
                <span>Total</span>
                <span>Cmd</span>
            </div>

            <div>
                
            </div>
            <div  v-for="(invoice,i) in store.invoices" :key="i" class="row invoice-row">
                <span>{{ invoice.id }}</span>
                <span class="recepient">
                    <p>{{ invoice.recepientName }}</p>
                    <p>{{ invoice.recepientAddress }}</p>
                </span>
                <span>{{ invoice.serviceTitle }}</span>
                <span>{{ invoice.servicePrice +  currentCurrency }} </span>
                <span>
                    <IconButton @click="router.push(`/invoice/edit/${invoice.id}`)" icon="edit.svg"/>
                </span>
            </div>
        </div>

    </div>
</template>

<script setup>
import { getInvoices } from '../services/api';
import {useMainStore} from '@/stores/mainStore.js'
import { ref,computed,onMounted } from 'vue';
import { useRouter } from 'vue-router';

import Title from '@/components/Title.vue' 
import Button from '@/components/Button.vue'
import IconButton from '@/components/IconButton.vue' 

const router= useRouter();
const store = useMainStore();

const currentCurrency = computed(()=>{
    if(store.currency){
        return store.currency.symbol
    }else{
        return ''
    }
})

const noInvoices = computed(()=>{
    if(store.invoices){
        return store.invoices.length==0
    }
})

 
</script>

<style lang="scss" scoped>
 
.filter{
    max-width: 1000px;
    width: 100%;
    padding: 1rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.invoice-row{
    border-bottom: $line-02;
}

.table{
 
    width: 100%;
    max-width: 1000px;
    border-radius: $cornerRadius;
    overflow: hidden;
  

    >.row{
        display: grid;
        grid-template-columns: 200px 1fr 1fr 1fr 120px;
        padding: 1rem 0;
        align-items: center;
        >:last-child{
         justify-self: end;
        }

        &:hover{
            background-color: rgba($color: white, $alpha: .8);
        }   
     }
    >.header{
        
        border-bottom: $line-02;
        border-top: $line-02;
        max-height: 40px;
        padding: 0.4rem 0;
        font-weight: 700;
        &:hover{
            background-color: transparent;
        } 
    }
 
}

.recepient{
    >:first-child{
        font-weight: 600;
    }
    >:last-child{
        color: rgba($color: #000000, $alpha: 0.4);
        font-size: 0.8rem;
    }
}

.greeting{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    text-align: center;
}
</style>