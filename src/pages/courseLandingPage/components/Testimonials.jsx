
import Star from "../utility/Star"
import { Testimonial } from "../utility/Data"



const Testimonials = () => {
    return (
        <div className="bg-[#F9FCFF] mt-20 px-padding-inline  py-[91px]">
            <div className="flex items-center justify-center gap-4 mb-[18px]">
                <div className="bg-[#1B40B3] w-[72px] h-1"></div>
                <p className="text-[#1A2434]">Testimonial</p>
            </div>
            <h3 className="font-semibold mb-[91px] text-[40px] text-center text-[#1A2434]">Student Testimonial</h3>
            <div className="flex flex-col md:flex-row items-center justify-center flex-wrap xl:flex-nowrap md:gap-8 gap-4">

                {
                    Testimonial.map((card) => (
                        <div className="bg-white p-9 shadow-[0_0_10px_rgba(0,0,0,0.1)] md:max-w-[500px] lg:max-w-[420px] rounded-xl" key={card.id}>
                            <div className="flex gap-4 items-center">
                                <img src={card.image} alt="" />
                                <div>
                                    <p className="text-[#1A2434] font-bold text-[22px]">{card.name}</p>
                                    <p className="text-[18px] text-[#1A2434]">{card.course}</p>
                                    <div className="flex gap-2 text-xl text-[#FFB31F] items-center">
                                        <Star num={card.star} />
                                        <p className="text-[#1A2434] text-base font-bold">{card.rate}</p>
                                    </div>

                                </div>
                            </div>

                            <p className="text-[#1A2434] mt-[18px] leading-[1.5]">
                                {card.testimony}
                            </p>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Testimonials