import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);
const PaymentNow = () => {
    return (
        <div>
             <div>
                <h1 className="text-center font-semibold lg:text-3xl md:text-2xl text-xl">Please Payment Now</h1>
                <div className="border-b-2 w-20 m-auto py-2 border-zinc-500 mb-16"></div>
            </div>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
            
        </div>
    );
};

export default PaymentNow;