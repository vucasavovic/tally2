<template>
   <div class="view">
    <PopUp ref="popup" />
    <InvoiceForm ref="invoiceForm"  @saved="onInvoiceSaved" @refreshed="onInvoiceRefreshed"/> 
   </div>
</template>

<script setup>
import PopUp from '../components/PopUp.vue';
 import InvoiceForm from '@/components/forms/InvoiceForm.vue' 
import { ref } from 'vue';

 const popup = ref(null);
 const invoiceForm = ref(null);

 const onInvoiceSaved = (invoice)=>{
    popup.value.showPopup('Save invoice?',"Once saved, an invoice can't be deleted.",()=>{
        console.log('Invoice data sent to backend!')
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