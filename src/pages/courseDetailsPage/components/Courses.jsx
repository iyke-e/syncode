import { Card } from './Card';

export const Courses = () => {
const arrayTopics =[
    {
        id:"01",
        title:"Introduction to Data Analysis",
        topics:[
            ["Basics of Data and Information", "Lesson 01"],
            ["Importance of Data Analysis in Decision Making", "Lesson 02"]
        ]
    },
    {
        id:"02",
        title:"Data Collection and Cleaning",
        topics:[
            ["Methods of Data Collection", "Lesson 01"],
            ["Data Cleaning Techniques", "Lesson 02"]
        ]
    },
    {
        id:"03",
        title:"Exploratory Data Analysis (EDA)",
        topics:[
            ["Descriptive Statistics", "Lesson 01"],
            ["Visualization Techniques", "Lesson 02"]
        ]
    },
    {
        id:"04",
        title:"Statistical Analysis with Excel",
        topics:[
            ["Basic and Advanced Functions in Excel", "Lesson 01"],
            ["Statistical Analysis using Excel", "Lesson 02"]
        ]
    },
    {
        id:"05",
        title:"Introduction to Power BI",
        topics:[
            ["Overview and Interface", "Lesson 01"],
            ["Connecting to Data Sources", "Lesson 02"]
        ]
    },
]

    return(
        <section className='grid md:grid-cols-2 gap-10 mx-auto'>
            {arrayTopics.map((item, index) => {
                return <Card key={`course-${index}`}
                id = {item.id}
                 title ={item.title}
                 topics={item.topics} />
            })}
      </section>
    )
  };