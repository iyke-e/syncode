import { useRef, useState } from 'react';

export const Accordion = ({ faq }) => {
  const questionBtn = useRef()
  const [show, setShow] = useState(false);
  const { question, answer } = faq;





  return (
    <div>
      <h2 id="accordion-flush-heading-1" className='border border-[#F1F1F3] p-4 md:py-6 md:px-10 rounded-lg bg-white grid gap-10'>
        <button
          ref={questionBtn}
          onClick={() => { setShow(!show) }}
          type="button"
          className="flex items-center justify-between w-full font-medium text-left "
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"

        >
          <span className="pointer-events-none text-base md:text-lg text-[#262626] ">{question}</span>
          {!show && (
            <svg className='shrink-0' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="6" fill="#EAEFFF"/>
              <path d="M16 22H22M28 22H22M22 22V16M22 22V28" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          )}
          {show && (
            <svg className='shrink-0' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="6" fill="#EAEFFF"/>
              <path d="M16.7573 27.2426L21.9999 22M27.2426 16.7574L21.9999 22M21.9999 22L16.7573 16.7574M21.9999 22L27.2426 27.2426" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          )}
        </button>
      {show && (
        <div
          id="accordion-flush-body-1"
          className=""
          aria-labelledby="accordion-flush-heading-1"
        >
          <div>
            <p className="text-base text-[#4C4C4D] text-wrap">
              {answer}
            </p>
          </div>
        </div>
      )}
      {
        show && (
          <button
            id="accordion-flush-body-2"
            className=" py-3 flex justify-between w-full px-6 bg-[#F7F7F8]"
            aria-labelledby="accordion-flush-heading-2"
          >
            <span className="pointer-events-none text-base text-[#333333] ">Enrollment Process for Different Courses</span>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="white"/>
              <path d="M18 24H30.5M30.5 24L24.5 18M30.5 24L24.5 30" stroke="#4C4C4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        )
      }
      </h2>
    </div>
  );
};
