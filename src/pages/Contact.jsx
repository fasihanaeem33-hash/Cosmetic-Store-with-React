const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">

      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Contact Us
      </h1>

      <form className="bg-white shadow-lg rounded-xl p-8">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg mb-5"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg mb-5"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border p-3 rounded-lg mb-5"
        ></textarea>

        <button
          className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700"
        >
          Send Message
        </button>

      </form>

    </div>
  );
};

export default Contact;