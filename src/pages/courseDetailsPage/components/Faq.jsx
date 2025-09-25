import { Accordion } from "./Accordion";

const Faq = () => {
    const faqs = [
        {
            id: 1,
            question: "Can I enroll in multiple courses at once?",
            answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        },
        {
            id: 2,
            question: "What kind of support can I expect from instructors?",
            answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        },
        {
            id: 3,
            question:
                "Are the courses self-paced or do they have specific start and end dates?",
            // answer: "1. Visit an accredited driving school and complete the mandatory drivers training.2. Obtain a driving school certificate number from the accredited driving school to be used to initiate a fresh application.3. Access the nigeriadriverslicence.frsc.gov.ng, click on DL Application tab and select New Driver’s Licence Application.4. Provide your Certificate Number (Which is the number on the certificate provided from the driving school attended) and click on submit.5. Fill in your application details and submit and make payment.",
            answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        },
        {
            id: 4,
            question:
                "Are there any prerequisites for the courses?",
            answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        },
        {
            id: 5,
            question: "Can I download the course materials for offline access?",
            answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        },
    ];

    return (
                <div
                    className="w-full grid gap-3"
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="bg-white text-gray-900 "
                    data-inactive-classes="text-gray-500 "
                >
                    {faqs.map((faq) => (
                        <Accordion key={faq.id} faq={faq} />
                    ))}
                </div>
    );
};

export default Faq;
