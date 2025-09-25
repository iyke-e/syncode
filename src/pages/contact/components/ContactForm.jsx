const ContactForm = () => {
  return (
    <div className="w-full">
      <h2 className="md:text-2xl text-xl font-bold mb-4">Leave us a message</h2>
      <form className="space-y-5">
        <div className="relative">
          {/* <label className="absolute -top-3 left-3 bg-white px-1 text-gray-500 text-xl">
            Name
          </label> */}
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:shadow-lg transition duration-150"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
