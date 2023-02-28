import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const currencyTypes = ref(null)
  const currency = ref(null);
  const tax = 20;
  const invoices= ref(null)

  const paymentMethods = ref(null);


  const selectInvoice = function(id){
    return invoices.value.filter((x)=>x.id==id)[0];
  }

 

  return {paymentMethods, currencyTypes,currency, tax, invoices,selectInvoice }
})
