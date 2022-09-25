import React from 'react';

let resumeData = {
    "imagebaseurl":"https://rbhatia46.github.io/",
    "name": "Ajinkya Bhosale",
    "role": "Software Developer",
    "linkedinId":"ajinkyabhosale-",
    "skypeid": "Your skypeid",
    "roleDescription": "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/ajinkyabhosale-",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"https://github.com/Ajinkya-B",
          "className":"fa fa-github"
        },
        {
          "name":"mail",
          "url":"mailto:ajinkya.bhosale85@gmail.com",
          "className":"fa fa-envelope"
        }
      ],
    "aboutme":"I began as a self-tought programmer and now am learning the art at the University of Toronto. My passion for software development stems from my curiosity about learning how video games work and wondering how lines of code can achieve such incredible feats. This curiosity led to hours of researching, learning, and experimenting by collaborating with others to create intuitive programs during hackathons.",
    "address":"Ontario, Canada",
    "website":"https://rbhatia46.github.io",
    "education":[
      {
        "UniversityName":"University of Toronto - St.George Campus",
        "specialization":"Honors Bachelor of Science - Computer Science Major",
        "MonthOfPassing":"Sept 2021 - Aug",
        "YearOfPassing":"2025",
        "Achievements":"• Part of a select cohort of students in the Technology Leadership Initiative program. \n• Leader of a Registered Study Group \n• cGPA: 3.94/4.00".split('\n').map(str => <p style={{marginBottom:"0"}}>{str}</p>)
      },
      {
        "UniversityName":"North Park Secondary School",
        "specialization":"Ontario Secondary School Diploma",
        "MonthOfPassing":"Sept 2017 - Jul",
        "YearOfPassing":"2021",
        "Achievements":"• Trainer in the school Photography Club \n• Part of North Park Hack Club and Varsity Cricket team.".split('\n').map(str => <p style={{marginBottom:"0"}}>{str}</p>)
      }
    ],
    "work":[
      {
        "CompanyName":"UofT Seismic Design Team",
        "specialization":"Webmaster",
        "MonthOfLeaving":"Aug 2022 -",
        "YearOfLeaving":"Present",
        "Achievements":"• Developed new features and functionalities on the teams website using React and MERN stack \n• Optimized analytical tools to improve the team's design process and improved 3D architectural rendering program using PyQt \n• Automated the deployment of the website to the server using GitHub Actions".split('\n').map(str => <p style={{marginBottom:"0"}}>{str}</p>)
      },
      {
        "CompanyName":"HIPPOS Software Inc.",
        "specialization":"Software Developer and QA Tester",
        "MonthOfLeaving":"Sept - Dec",
        "YearOfLeaving":"2019",
        "Achievements":"• Designed and developed a mobile application using JavaScript, React Native, and Galio, which provides quick access to sales reports for all the client-owned businesses \n• Reported over 20 critical bugs by creating clear and detailed repro steps on Microsoft Azure scrum board \n• Coordinated closely with the supervisor to recommend and test new features for the HIPPOS Restaurant and CloudSync application".split('\n').map(str => <p style={{marginBottom:"0"}}>{str}</p>)
      }
    ],
    "certifications":[
      {
        "Course":"Data Structures & Algorithms in Python",
        "Organization":"Udemy",
      },
      {
        "Course":"Introduction to Machine Learning",
        "Organization":"Duke University, Coursera",
      },
      {
        "Course":"Data Science Math Skills",
        "Organization":" Duke University, Coursera",
      }
    ],
    "skillsDescription":"Your skills here",
    "skills":[
      {
        "skillname":"HTML5"
      },
      {
        "skillname":"CSS"
      },
      {
        "skillname":"Reactjs"
      }
    ],
    "portfolio":[
      {
        "name":"Discord Bots",
        "description":"Application",
        "imgurl":"images/portfolio/discord-logo.png"
      },
      {
        "name":"COVID-19 Trends",
        "description":"Application",
        "imgurl":"images/portfolio/covid-trends.png"
      },
      {
        "name":"Brick Breaker",
        "description":"Desktop Game",  
        "imgurl":"images/portfolio/Bricks-Breaker.webp"
      },
      {
        "name":"TODO List",
        "description":"Website",
        "imgurl":"images/portfolio/todo-website.png"
      }
    ],
    "testimonials":[
      {
        "description":"This is a sample testimonial",
        "name":"Some technical guy"
      },
      {
        "description":"This is a sample testimonial",
        "name":"Some technical guy"
      }
    ]
  }
  
  export default resumeData