import computerBasics from "../courseLandingPage/assets/computerBasics.png";
import dataAnalysis from "../courseLandingPage/assets/dataAnalysis.png";
import webdev from "../courseLandingPage/assets/webdev.png";
import jane from "../courseLandingPage/assets/jane.png";
import wilson from "../courseLandingPage/assets/wilson.png";
import howard from "../courseLandingPage/assets/howard.png";

export const coursesData = [
    {
        id: 1,
        type: "Computer basics ",
        title: "Computer Proficiency",
        info: "Learn Basics of Computer Hardware and Software and Operating Systems Overview. ",
        rating: 4.3,
        star: 5,
        vote: 16325,
        passport: jane,
        teacher: "Jane Cooper",
        enrolled: 200,
        fee: 50000,
        image: computerBasics,
    },
    {
        id: 2,
        type: "Data",
        title: "Data Analysis",
        info: "Learn Data and Information, Analysis in Decision Making. ",
        rating: 3.9,
        star: 5,
        vote: 832,
        passport: wilson,
        teacher: "Jenny Wilson",
        enrolled: 2001,
        fee: 60000,
        image: dataAnalysis,
    },
    {
        id: 3,
        type: "Design",
        title: "Web Design",
        info: "Learn HTML and its Structure, Creating Web Pages with HTML. ",
        rating: 4.2,
        star: 5,
        vote: 125,
        passport: howard,
        teacher: "Esther Howard",
        enrolled: 2001,
        fee: 60000,
        image: webdev,
    },
];
