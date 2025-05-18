import {React, useState} from 'react'
import axios from 'axios'; // 👈 Asegúrate de importar axios
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const orderData = {
 
  "name": "zapato",
  "amount": 100000,
  "currency": "usd"

};

const PaymentRequest = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState(null);
  
    const handleCheckout = async () => {
        
  try {
    const res = await axios.post('http://localhost:8080/product/v1/checkout', orderData);
    const clientSecret = res.data.clientSecret;
    setClientSecret(clientSecret);
    console.log(clientSecret);
    // Usar clientSecret con Stripe.js (como te mostré antes)
  } catch (error) {
    console.error("Error al crear el PaymentIntent", error);
  }
};

const handlePayment = async (e) => {
    e.preventDefault();

      if (!stripe || !elements || !clientSecret) {
    console.warn("Stripe, Elements o clientSecret no están listos.");
    return;
  }

    const cardElement = elements.getElement(CardElement);

     if (!cardElement) {
    console.error("❌ No se encontró CardElement.");
    return;
  }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: "Carlos", // Puedes REMPLazar pon input real
        },
      },
    });

     if (error) {
      console.error("❌ Error en el pago:", error.message);
    } else if (paymentIntent.status === 'succeeded') {
      alert("✅ Pago exitoso!");
      // Aquí puedes redirigir o mostrar un mensaje al usuario
    }
  };
  
  
    return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-10">
      <button
        onClick={handleCheckout}
        className="bg-amber-300 text-white px-6 py-2 rounded-md hover:bg-amber-400 transition"
      >
        Pagar
      </button>

      {clientSecret && (
        <form onSubmit={handlePayment} className="w-full max-w-md space-y-4">
          <div className="border border-gray-300 rounded-md p-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#32325d',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a',
                  },
                },
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition disabled:opacity-50"
          >
            Pagar
          </button>
        </form>
      )}
    </div>
  )
}

export default PaymentRequest
