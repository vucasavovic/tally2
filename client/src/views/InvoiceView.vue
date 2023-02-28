<template>
   <div class="view">
    <Title :tier="1" size="xl" text="Invoice" class="view-title"/>
    <PopUp ref="popup" />
    <InvoiceForm  ref="invoiceForm"   @submitted="onInvoiceSubmit" @refreshed="onInvoiceRefreshed"/> 
   </div>
</template>

<script setup>
import { addInvoice } from '../services/api';
import { useMainStore } from '../stores/mainStore';
import { ref,onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Title from '@/components/Title.vue' 
import PopUp from '../components/PopUp.vue';
import InvoiceForm from '@/components/forms/InvoiceForm.vue' 

 
const route = useRoute();
const store = useMainStore()
const popup = ref(null);
const invoiceForm = ref(null);
 
 const onInvoiceSubmit = (invoice)=>{
    popup.value.showPopup('Save invoice?',"", async ()=>{
        const {status,payload} = await addInvoice(invoice);   
        store.invoices = payload;
        console.log(status.message)
    })
 
 }

 const onInvoiceRefreshed = (invoice)=>{
    popup.value.showPopup('You shure?',"You are about to clear invoice form! NO data will be lost.",()=>{
        invoiceForm.value.refresh();
    })
 }

 
 
</script>

<style lang="scss" scoped>

</style>