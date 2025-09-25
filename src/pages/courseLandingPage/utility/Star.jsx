import { IoMdStar } from "react-icons/io";


const Star = ({ num }) => {
    // Create an array with a length of `num` and map over it to render the Star component
    const stars = Array.from({ length: num }, (_, index) => (
        <IoMdStar key={index} />
    ));

    return (
        <>
            {stars}
        </>
    );
};

export default Star;