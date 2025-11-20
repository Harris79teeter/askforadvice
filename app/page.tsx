export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">AskForAdvice</h1>
        <p className="text-xl text-gray-600 mb-8">
          Pay $5–$200 to post your question.<br />Best answer wins the money.
        </p>
        <div className="space-y-4">
          <button className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition">
            Launching in 7 days – Get notified
          </button>
          <p className="text-sm text-gray-500">
            Building live with Grok right now 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
