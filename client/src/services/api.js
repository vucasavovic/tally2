import axios from 'axios'

axios.defaults.baseURL='http://localhost:3000'

export async function getPaymentMethods(){
    console.log('getting');
    try {
        const response = await axios.get('/user/payment-methods');
        console.log(response.data);
        if(response.status.error) console.log(response.status.error.message);
        return response.data.payload
    } catch (error) {
        console.log(error);
    }
}

