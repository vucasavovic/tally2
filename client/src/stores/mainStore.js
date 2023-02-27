import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const currencyTypes = ref([{id:0,name:'Dollar',symbol:'$'},{id:1,name:'Euro',symbol:'eur'},{id:2,name:'Serbian Dinar',symbol:'rsd'},{id:3,name:'Ruble',symbol:'rus'}])
   const currency = ref(currencyTypes.value[0]);
   const tax = 20;
  const invoices= ref([
    {id:0,num:"1/2023",clientName:'George Mayers',clientAddress:'Moore St. 123.',service:'Web development',serviceCost:600},
    {id:1,num:"2/2023",clientName:'Nicolas Cage',clientAddress:'Moore St. 123.',service:'Web development',serviceCost:9000},
    {id:2,num:"3/2023",clientName:'Bob Lazar',clientAddress:'Moore St. 123.',service:'Web development',serviceCost:600},
    {id:3,num:"4/2023",clientName:'Just Mike',clientAddress:'Moore St. 123.',service:'Web development',serviceCost:1200},
    {id:4,num:"5/2023",clientName:'Borko Stefanovic',clientAddress:'Moore St. 123.',service:'Web development',serviceCost:1200}
  ])

  const paymentMethods = ref(null);

  return {paymentMethods, currencyTypes,currency, tax, invoices }
})
