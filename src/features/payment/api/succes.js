import axios from 'axios';

async function sendSuccessPayment(OutSum: string, InvId: number, SignatureValue: string): Promise<void> {
    try {
        console.log(OutSum, InvId, SignatureValue)
        const response = await axios.post('https://openstorebackendkotlin.onrender.com/kassa/success', {
            OutSum,
            InvId,
            SignatureValue
        });
        console.log('Payment verification successful:', response.data);
    } catch (error) {
        console.error('Failed to verify payment:', error);
    }
}

export default sendSuccessPayment
