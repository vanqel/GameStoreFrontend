import axios from 'axios';

async function sendFailPayment(OutSum: string, InvId: number, SignatureValue: string): Promise<void> {
    try {
        const response = await axios.post('https://openstorebackendkotlin.onrender.com/kassa/fail', {
            OutSum,
            InvId,
            SignatureValue
        });
        console.log('Payment verification successful:', response.data);
    } catch (error) {
        console.error('Failed to verify payment:', error);
    }
}
export default sendFailPayment;