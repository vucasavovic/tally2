import axios from 'axios'

axios.defaults.baseURL='http://localhost:3000'

export async function getCurrency(){
    try {
        const response = await axios.get('/user/currency/all');
        return response.data.payload
    } catch (error) {
        console.log(error)
    }
}

export async function addInvoice(invoice){
    try {
        const response = await axios.post('/user/invoice/add',invoice);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getInvoices(){
    try {
        const result = await axios.get('/user/invoice/all');
        return result.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getPaymentMethods(){
    try {
        const response = await axios.get('/user/payment-methods');
        if(response.status.error) console.log(response.status.error.message);
        return response.data.payload
    } catch (error) {
        console.log(error);
    }
}

export async function deletePaymentMethod(accountNum){
    try {
        const response = await axios.post('/user/payment-method/delete',{account_num:accountNum})
        if(response.data.status.error){
            console.log(response.data.status.error,'is error');
            return false;
        }
        return true
    } catch (error) {
        console.log(error, 'ERRORORORORORO');
    }
}

export async function addPaymentMethod(paymentMethod){
    try {
        const response = await axios.post('/user/payment-method/add',paymentMethod)
        return response.data;
    } catch (error) {
        console.log(error, '?');
    }
}

