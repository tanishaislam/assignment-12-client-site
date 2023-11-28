import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCart from "../../../../Hooks/useCart";
import useAuth from "../../../../Hooks/useAuth";
import toast from "react-hot-toast";


const CheckOutForm = () => {
    const [error , setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transectionId, setTransectionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [carts] = useCart();
    const fil = carts.filter(filt => filt.role === 'member')
    const userfind = fil.filter(fin => fin.userEmail === user?.email)
    const totalPrice = userfind.reduce((total, item) => total + item.rent , 0)

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure, totalPrice])


    const handleSubmit = async(event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement)

          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('payment error', error);
            setError(error.message)
          } else {
            console.log('Payment Method', paymentMethod);
            setError('')
          }

          //confirm payment
          const {paymentIntent, error: confirmError}= await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }

          })
          if(confirmError){
                console.log('confirm error ') 
          }else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                setTransectionId(paymentIntent.id)
            }
            //now save the payment in database 
            const payment = {
                email: user?.email,
                price: totalPrice,
                transectionId: paymentIntent.id,
            }

            const res = await axiosSecure.post('/payments', payment)
            if(res.data?.paymentResult?.insertedId){
                toast.success('Thanks for the payments')
            }
          }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="bg-black text-white btn mt-4" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
            {
                transectionId && <p className="text-green-600">your transection Id is :{transectionId}</p>
            }
            </form>
        </div>
    );
};

export default CheckOutForm;