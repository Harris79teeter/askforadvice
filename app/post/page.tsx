import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Rv9...'); // we’ll replace this in 10 seconds

export default function PostQuestion() {
  const prices = [5, 10, 25, 50, 100, 200];

  const handleCheckout = async (amount: number) => {
    const stripe = await stripePromise;
    // In real app this would go to your backend – for demo we use test mode
    window.location.href = `https://buy.stripe.com/test_14k4...${amount}000?prefilled_email=test@example.com`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl mt-10 p-8">
        <h1 className="text-4xl font-bold text-center mb-2">Post Your Question</h1>
        <p className="text-center text-gray-600 mb-8">People pay to answer • You pick the winner</p>

        <textarea 
          placeholder="Describe your situation or question in detail..."
          className="w-full p-5 border-2 rounded-xl text-lg h-40 mb-6"
        />

        <div className="grid grid-cols-3 gap-4 mb-8">
          {prices.map(price => (
            <button
              key={price}
              onClick={() => handleCheckout(price)}
              className="bg-black text-white py-6 rounded-2xl text-2xl font-bold hover:scale-105 transition"
            >
              ${price}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500">
          Powered by Stripe • Test mode (no real money charged yet)
        </p>
      </div>
    </div>
  );
}
