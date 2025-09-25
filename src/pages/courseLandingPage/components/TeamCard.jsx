
const TeamCard = ({ card }) => {
    return (

        <div className="p-[18px] md:max-w-[328px] lg:max-w-[400px] shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-[#F9FAFB] w-full  grid gap-4" key={card.id}>
            <div className="">
                <img className="w-20 h-20 mx-auto mb-[20px]" src={card.passport} alt="" />
                <p className="text-[#101828] text-lg">{card.name}</p>
                <p className="text-[#1B40B3] mb-2">{card.role}</p>
                <p className="text-[#667085]">{card.desc}</p>
            </div>
            <div className="flex text-[#98A2B3] gap-4 justify-center items-center">
                {
                    card.socials?.map((handle, index) => (<div key={index} className="">{handle}</div>))
                }

            </div>

        </div>

    )
}

export default TeamCard