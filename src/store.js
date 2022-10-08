import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {
      firstName: "Dhiraj",
      lastName: "Shrotri",
      birthday: new Date(1995, 8, 4),
      startDescription: "Hello I’m Dhiraj",
      description:
      "I am based in Syracuse, New York.<br> I am a Full Stack Developer with 4+ years of experience developing software applications.",
      aboutMe:
      "I am currently pursuing a MS in Computer Engineering from Syracuse University.<br> I am passionate about Robotics, Web Dev, Machine Learning and Embedded Systems.<br> Outside of work, I enjoy cooking, reading and spend most of my time binge watching cartoons.",
    },
    technologies: {
      programming:  [
        { name: "Javascript (ES6)", level: 95 },
        { name: "Typescript", level: 80 },
        { name: "Rust", level: 80 },
        { name: "Python", level: 75 },
      ],
      frameworks: [
        { name: 'React', level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Node.js & Express.js", level: 90 },
      ],
      tools:[
        { name: "AWS" },
        { name: "Kubernetes" },
        { name: "Gradle" },
        { name: "Webpack" },
        { name: "Netlify" },
        { name: "Docker" },
        { name: "Selenium" }
      ]
    },
    socials: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dhiraj-shrotri/",
        icon: "linkedin"
      },
      {
        name: "Github",
        link: "https://github.com/dhirajshrotri",
        icon: "github"
      },
      {
        name: "Twitter",
        link: "https://twitter.com/DhirajShrotri",
        icon: "twitter"
      }
    ],
    companies: [
      {
        name: "Intralinks",
        role: "Software Developer Intern",
        description: "",
        startDate: "Jun 2022",
        endDate: 'Present',
        roles: [
          { description: "Integrated Zendesk single sign on into Intralinks API applications." },
          { description: "Led migration of screens from Intralinks admin application into Intralinks Tenant admin application." },
          { description: "Migration involved a total of 5 CRUD screens and was delivered within a single sprint." }
        ]
      },
      {
        name: "TruWeather Solutions",
        role: "Full Stack Developer",
        description: "",
        startDate: "May 2021",
        endDate: "May 2022",
        roles: [
          { description: "Collaborated with client stakeholders to add new features to frontend applications." },
          { description: "Improved user experience by making frontend applications responsive and compatible with all major browsers and mobile devices." },
          { description: "Improved user experience led to 30% more active users per month." },
          { description: "Implemented weather visualization data into mapping application using Leaflet JavaScript library." },
          { description: "Integrated payment gateway using Stripe into frontend application to manage invoices of clients." }
        ]
      },
      {
        name: "Cloudnaut Technologies",
        role: "Full Stack JavaScript Developer",
        description: "",
        startDate: "Sept 2018",
        endDate: "Dec 2020",
        roles: [
          { description: "Primary responsibilities included working directly with the client stakeholders to add features to main ATS product." },
          { description: "Created a component library of responsive and modular web components to be used across frontend applications." },
          { description: "Created a dashboard for socio-economic, time to fill and time to hire information." },
          { description: "The dashboard helped clients identify bottlenecks and make their hiring process more transparent." },
          { description: "Led the effort to build a video conferencing application and integrate it in the existing application using AWS Chime SDK." },
          { description: "The Video Conferencing application was the MVP as it enabled clients to make their hiring processes remote friendly at the start of the pandemic." },

        ]
      },
      {
        name: "Twintech Control Systems Pvt. Ltd.",
        role: "Project Intern",
        description: "",
        startDate: "May 2016",
        endDate: "May 2017",
        roles: [
          { description: "Led a 4 member undergraduate student team working on Bachelor's final year project." },
          { description: "Devised a low cost pick and place delta mechanism based robot for automated assembly of electronic printed circuit boards." },
          { description: "This mechanism was 2.5x cheaper than alternatives available in the market." },
          { description: "Published a paper on \"Delta Mechanism based Implementation for Automated PCB Population\" in International Journal of Engineering Technology, Management and Applied Sciences May 2017 edition." },
        ]
      },
      {
        name: "Joven Workforce Pvt. Ltd.",
        role: "Web Developer",
        description: "",
        startDate: "Jun 2015",
        endDate: "July 2016",
        roles: [
          { description: "As a web developer, I helped build and maintain the web app for the company. The app was built using Angular 1.5 and Ionic framework for the frontend and PHP and MySQL for the backend." },
        ]
      }
    ]
  },
  getters: {
    age: state => {
      let ageDiff = Date.now() - state.profile.birthDay;
      let ageDate = new Date(ageDiff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    profile: state => state.profile,
    technologies: state => state.technologies,
    companies: state => state.companies,
    socials: state => state.socials
  },
  mutations: {},
  actions: {},
});
