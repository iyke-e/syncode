import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section className="flex flex-col md:items-center min-h-[80vh] md:border-gray-50 md:border md:shadow-2xl p-4 w-full md:w-4/5 mx-auto  my-4 md:my-16">
      <h1 className="text-center font-semibold p-2 md:pt-12 text-blue-900 text-xl md:text-4xl underline">
        CONTACT US
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-10 p-2 md:p-12 space-y-6 md:space-y-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
