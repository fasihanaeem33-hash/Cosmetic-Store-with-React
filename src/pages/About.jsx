const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">

      <h1 className="text-4xl font-bold text-pink-600 text-center mb-8">
        About Us
      </h1>

      <p className="text-lg text-gray-600 leading-8 text-center">
        Glow Beauty is your trusted destination for premium cosmetics,
        skincare and beauty essentials. Our mission is to provide
        high-quality products that enhance your natural beauty while
        keeping beauty affordable for everyone.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <div className="bg-pink-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-pink-600">
            Premium Quality
          </h2>

          <p className="mt-3 text-gray-600">
            Carefully selected beauty products from trusted brands.
          </p>
        </div>

        <div className="bg-pink-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-pink-600">
            Affordable Prices
          </h2>

          <p className="mt-3 text-gray-600">
            Premium cosmetics at budget-friendly prices.
          </p>
        </div>

        <div className="bg-pink-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-pink-600">
            Customer Satisfaction
          </h2>

          <p className="mt-3 text-gray-600">
            Your beauty and happiness are our top priority.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;