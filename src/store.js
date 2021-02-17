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
      "I am based in Syracuse, New York.<br> I am a Full Stack Developer with more than 4 years of experience building websites and web applications.",
      aboutMe:
      "I am currently pursuing a MS in Computer Engineering from Syracuse University.<br> I am passionate about Robotics, Web Dev, Machine Learning and Embedded Systems.<br> Outside of work, I enjoy cooking, reading and spend most of my time binge watching cartoons.",
    },
    technologies: {
      programming:  [
        { name: "Python", level: 75 },
        { name: "Java", level: 62 },
        { name: "HTML & CSS", level: 92 },
        { name: "Javascript (ES6)", level: 80 },
        { name: "Typescript", level: 60 }
      ],
      frameworks: [
        { name: "Vue.js", level: 85 },
        { name: "Tailwind.css", level: 80 },
        { name: "Bootstrap", level: 70 },
        { name: "Node.js & Express.js", level: 72 },
        { name: "Ionic", level: 65 },
      ],
      tools:[
        { name: "git" },
        { name: "Webpack" },
        { name: "Netlify" },
        { name: "Docker" },
        { name: "AWS" },
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
        name: "Cloudnaut Technologies",
        role: "Full Stack JavaScript Developer",
        description: "Cloudnaut was the technological partner of hireful, a UK based company working in the recruitment domain. Most of my work at Cloudnaut was focused around developing and upgrade the hireful ATS product.",
        startDate: "Sept 2018",
        endDate: "Dec 2020",
        roles: [
          { description: "Collaborated with other team members to build a video conferencing application using Amazon's Chime Javascript SDK." },
          { description: "As part of the team, helped rebrand the ATS when EasyWeb Group officially changed to hireful. The complete ATS rebrand was tested and delivered in 5 days." },
          { description: "Developed a task management tool called \"Yojna\" using TypeScript, NestJs, NodeJs, MySQL for backend and VueJs, Vuex and for frontend." },
          { description: "Created a survey tool for company using VueJs, Vuex, Sass and D3.js for frontend and Serverless, MongoDB and NodeJS for backend." }
        ]
      },
      {
        name: "Vodafone Shared Services India Pvt. Ltd.",
        role: "Graduate Engineer Trainee",
        startDate: "Aug 2017",
        endDate: "Jun 2018",
        roles: [
          { description: "Wrote shell scripts, fixing data process pipelines, implementing change management requests and liaising with incident manager. Helped to maintain a MTTR of under 3 minutes for critical incidents." },
          { description: "Collaborated with team to automate certain data processing tasks carried out daily. Wrote shell scripts, python scripts and Macros in MS Excel. Automations helped improve productivity in the team." },
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
          { description: "Devised a low cost pick and place delta mechanism based robot for automated assembly of electronic printed circuit boards. Mechanism was 2.5x cheaper than alternatives available in the market." },
          { description: "Published a paper on \"Delta Mechanism based Implementation for Automated PCB Population\" in International Journal of Engineering Technology, Management and Applied Sciences May 2017 edition." },
        ]              
      },
      {
        name: "Joven Workforce Pvt. Ltd.",
        role: "Web Developer",
        description: "“Eventosis” is an online portal launched by Joven Workforce Pvt. Ltd. that provides manpower solutions to brands, event management companies, advertising agencies and startups who are looking to promote their products.",
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
