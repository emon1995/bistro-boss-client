import { Helmet } from "react-helmet-async";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} cart={cart} />
            </Elements>
        </div>
    );
};

export default Payment;
