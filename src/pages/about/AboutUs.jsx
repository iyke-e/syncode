import React from 'react';

const AboutUs = () => {
  const reasons = [
    {number: "01", title: "Expert Instructors", description: "Our courses are led by industry experts with real-world experience."},
    {number: "02", title: "Flexible Learning", description: "We offer both in-person and online training options to fit your schedule."},
    {number: "03", title: "Custom Solutions", description: "Our consulting services are tailored to meet your unique business needs."},
    {number: "04", title: "Proven Success", description: "We have a track record of helping individuals and organizations achieve their tech goals."},
  ]

  return (
    <div id='about-page' className='pb-36'>
      
      {/* 
      ================================================================================================================================

        HEROSECTION SECTION
      ________________________________________________________________________________________________________________________________
      */}

      <div id="hero-section" className='px-8 py-12 flex flex-col gap-16 md:py-20 xl:flex-row lg:px-36 xl:gap-56'>
        <div id="text" className='flex flex-col gap-4  lg:py-6 lg:gap-8'>
          <h1 className='text-5xl text-[#1B40B3] font-extrabold lg:text-6xl'>About Us</h1>
          <h2 className='text-xl font-bold lg:text-4xl'>Training And Consulting Company</h2>
          
          <div id="images-herosection" className='bg-[#F2F2F2] py-8 rounded-lg self-center relative sm:max-w-[450px] lg:hidden'>
            <img src="/about-herosection-1.png" alt="about-herosection-1" className='relative -right-6 -top-4 md:-right-24' />
            <img src="/about-herosection-2.png" alt="about-herosection-1" className='relative -left-6 -bottom-4 md:-left-24'/>
          </div>
          
          <p className='text-sm leading-loose lg:text-lg lg:leading-[2.7rem]'>
            At ACME Software Lab, we are passionate about empowering individuals and organizations through innovative training and consulting
            services. As a leading provider in the tech industry, our mission is to bridge the gap between technology and talent, helping our 
            clients achieve their fullest potential.
          </p>
        </div>

        <div id="images-herosection" className='bg-[#F2F2F2] hidden rounded-lg self-center relative sm:max-w-[450px] lg:min-w-[450px] lg:block'>
          <img src="/about-herosection-1.png" alt="about-herosection-1" className='relative -right-6 -top-4 md:-right-24' />
          <img src="/about-herosection-2.png" alt="about-herosection-1" className='relative -left-6 -bottom-4 md:-left-24'/>
        </div>
      </div>
      
      {/* 
      ================================================================================================================================

        MISSION SECTION
      ________________________________________________________________________________________________________________________________
      */}

      <div id="mission" className='flex px-8 flex-col-reverse gap-12 py-8 xs:flex-row xl:flex-row lg:px-36 xl:gap-20'>
        <div id="images-mission" className='hidden bg-gray-100 relative rounded-lg px-2 sm:max-w-[450px] sm:self-center lg:block lg:min-w-[450px] xl:self-start'>
          <img src="/mission-about.png" alt="mission-section-img" className='relative top-5'/>
        </div>

        <div id='text' className='flex flex-col gap-4'>
          <div id="mission">
            <h2 className='text-2xl font-bold text-[#1B40B3]'>Our Mission</h2>

            <div className='w-full py-8 flex justify-center items-center self-center lg:hidden'>
              <div id="images-mission" className='bg-gray-100 relative rounded-lg px-2 sm:max-w-[450px] sm:self-center lg:min-w-[450px]'>
                <img src="/mission-about.png" alt="mission-section-img" className='relative top-5'/>
              </div>
            </div>

            <p className='text-sm py-4 leading-loose lg:text-base'>
              At ACME Software Lab, our mission is simple yet profound: to cultivate a community of tech-savvy professionals 
              equipped with the expertise needed to thrive in today's digital landscape. We strive to bridge the gap between 
              theoretical knowledge and practical application, ensuring our clients are not only well-versed in the latest 
              technologies but also capable of implementing them effectively.
            </p>
          </div>

          <div id="what-we-offer" className='flex flex-col gap-6'>
            <h2 className='text-2xl font-bold text-[#1B40B3]'>What We Offer</h2>

            <div id="offer-1">
              <h2 className='text-2xl font-bold'>1. Comprehensive Training Programs</h2>

              <p className='text-sm py-4 leading-loose lg:text-base'>
                Our training programs are designed to cater to a diverse range of needs, from beginners seeking foundational 
                skills to experienced professionals looking to upskill. We offer courses in:
              </p>

              <ul className='list-disc flex flex-col gap-2 px-4 text-sm lg:text-base'>
                <li>Software Development</li>
                <li>Data Science and Analytics</li>
                <li>Cloud Computing</li>
                <li>Cybersecurity</li>
                <li>Project Management</li>
              </ul>
            </div>

            <div id="offer-2">
              <h2 className='text-2xl font-bold'>2. Expert Consulting Services</h2>

              <p className='text-sm py-4 leading-loose lg:text-base'>
                Our team of seasoned consultants brings a wealth of experience across various industries. We provide tailored 
                consulting services to help organizations harness the full potential of technology. Whether you need strategic 
                advice, project management, or hands-on implementation, ACME Software Lab is your trusted.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
      ================================================================================================================================

        WHY CHOOSE US SECTION
      ________________________________________________________________________________________________________________________________
      */}

      <div id='why-choose-us' className='px-8 flex flex-col justify-center items-center w-full'>
        <h1 className='font-bold text-3xl text-center py-16 lg:text-4xl'>Why Choose Us?</h1>

        <div id="reasons" className='flex flex-col justify-center gap-4 md:flex-row md:flex-wrap lg:px-4 xl:grid xl:grid-cols-2 xl:justify-center xl:px-36 2xl:grid-cols-3'> 
          {reasons.map((reason, index) => (
            <div key={reason.number} id='reason' className='bg-[#F7FDF9] transition ease-out duration-300 cursor-pointer border border-gray-200 py-4 px-4 pb-10 
            rounded-lg flex flex-col gap-4 hover:bg-blue-100 hover:scale-[102%] md:h-[236px] md:w-[376px]'>
              <div id="number" className='relative'>
                {parseInt(reason.number) % 2 == 0? 
                  <img src='/ellipse-right.svg' className='z-0' height={54} width={54}/>
                : <img src='/ellipse-left.svg' className='z-0' height={54} width={54}/>}
                <span className='text-[#1B40B3] absolute z-10 top-1 left-2 text-4xl font-bold'>{reason.number}</span>
              </div>
              <h3 className='text-2xl'>{reason.title}</h3>
              <p className='text-sm'>{reason.description}</p>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AboutUs;