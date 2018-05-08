const HomeTemplate = `
    <div class="centered-text">
      <h1 class="primary-header">Donovan J LaDuke</h1>
      <h4 class="primary-sub-header">Software Developer by Passion and Trade</h4>
    </div>
`

const AboutTemplate = `
<div class="mdl-grid mdl-grid--no-spacing full-height">
    <div class="summary-container mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
        <img class="about-image" src="src/images/Donovan.jpg" />
        <div class="summary-text-container">
            <h3>About Me</h3>
            <p class="summary-text">I'm a software developer with a passion for learning and developing aesthetically pleasing applications that
                help people live simpler more meaningful lives.<br/><br/>I first learned to program in high school and after
                the first time the console printed out 'Hello World!' I was hooked. From there I went to Kent State to pursue
                a degree in computer science. Along the way I experienced an array of different technologies from assorted
                personal projects and internships. After graduating, I took a job with, a consulting company where I help
                build software for manufacturing companies.<br/><br/>Since then I've taken it upon myself to learn from both
                the projects I do at work, but also in my personal time. When I'm not at work, you can probably find me at
                home working on Android projects or learning more from podcasts, articles, and videos. When I'm not writing
                software I enjoy spending time with my fiancee and our cat, hiking, and listening to baseball games.</p>
        </div>
    </div>
    <div class="summary-container mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
        <div class="summary-text-container">
            <h2 class="tier1-header">Overview</h2>
            <h4 class="tier2-header">Technologies</h4>
            <h6 class="tier3-header">Experienced</h6>
            <p class="quick-facts-content">C#, .NET, HTML, CSS, JavaScript, TFS, Git, Visual Studio</p> 
            <h6 class="tier3-header">Proficient</h6>
            <p class="quick-facts-content">Java, Kotlin, Android XML, Android, Android Studio, AngularJS</p>
            <h6 class="tier3-header">Knowledgeable</h6>
            <p class="quick-facts-content">Swift, iOS, Storyboards, Xcode</p>
            
            <h4 class="tier2-header">Experience</h4>
            <h6 class="tier3-header">Work</h6>
            <p class="quick-facts-content">The RoviSys Company (May '15 - Present) - Software Developer</p> 
            <h6 class="tier3-header">School</h6>
            <p class="quick-facts-content">Kent State University - B.S. Computer Science, Graduated Magna Cum Laude</p>
            <h6 class="tier3-header">Other</h6>
            <p class="quick-facts-content">Google Certified Associate Android Developer - <a href="https://www.credential.net/d0ws7uom?key=d20774a996791e793589340506c252898cb6326f75f1e2527aaa0db5129820b8">Badge</a></p>
            <p class="quick-facts-content">Member of RoviSys GBS Software Congress</p>
            <p class="quick-facts-content">RoviSys Monthly Hackathon Winner May 2015 and April 2016</p>
            
            <h4 class="tier2-header">Fun Facts</h4>
            <ul>
                <li class="fun-fact">Drove a Bus in College for PARTA</li>
                <li class="fun-fact">First Programming Language was Java</li>
                <li class="fun-fact">Favorite Baseball Team is the Detroit Tigers</li>
            </ul>
        </div>
    </div>
</div>
`

const ContactTemplate = `
  <div class="mdl-grid mdl-grid--no-spacing full-height">
    <a href="mailto:donovan.j.laduke@gmail.com" class="contact-block email-block mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
        <svg viewBox="0 0 24 24" class="icon" id="email-icon">
          <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path>
        </svg>
        <label class="contact-label" for="email-icon">Email Me</label>
    </a>
    <a href="https://www.linkedin.com/in/dladukedev" class="contact-block linkedin-block mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
        <svg viewBox="0 0 24 24" class="icon" id="linkedin-icon">
          <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"></path>
        </svg>
        <label class="contact-label" for="linkedin-icon">Recruit Me</label>
    </a>
    <a href="https://twitter.com/arcanepotato" class="contact-block twitter-block mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
        <svg viewBox="0 0 24 24" class="icon" id="twitter-icon">
          <path d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"></path>
        </svg>
        <label class="contact-label" for="twitter-icon">Follow Me</label>
    </a>
    <a href="https://github.com/dladukedev" class="contact-block github-block mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
        <svg viewBox="0 0 24 24" class="icon" id="github-icon">
          <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
        </svg>
        <label class="contact-label" for="github-icon">Fork Me</label>
    </a>
  </div>
`


const Home = { template: HomeTemplate }
const About = { template: AboutTemplate }
const Contact = { template: ContactTemplate }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')