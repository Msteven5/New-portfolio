import Footer from '../Footer'

export default function Projects() {
  return (
    <div className="row container-fluid justify-content-center">
      <h3 className="text-center mt-5">Time Line of Projects</h3>
      <h4 className="text-center mb-5">(In Descending Order)</h4>

      <article className="row">

        <div className="col">
          <div className="m-4 p-4 otherProjects" data-aos="fade-right">
            <h5 className="text-center mb-3">Most Recent Project</h5>
            <a href="https://radiant-oasis-spa-4df905e0f97b.herokuapp.com/">
              <img src="/Radiant-oasis.PNG" height="35%" className="border-light border border-5 card-img-top rounded-3" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title mt-3 mb-2">Radiant Oasis Spa Website (Group Project)</h5>
              <h6 className="mb-3">| MERN | Bootstrap CSS | JWT | NoSQL | Node | Vite | </h6>
              <p className="card-text">A full stack application to mimic the experience of a spa website, including service descriptions, meet the staff, and booking which features a confirmation page and booking history.</p>
              <p><span className="text-warning">Spotlight feature: </span>The booking page that filters based on your choices!</p>
            </div>
          </div>
          <div className="col">
          <div className="m-5 p-5 otherProjects hiddenCard" data-aos="fade-left">
            <img src="/README Generator Screenshot.png" height="35%" className="card-img-top rounded-3" alt="..." />
            <div className="card-body m-5">
              <h5 className="card-title my-2">README Generator</h5>
              <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
                to answer prompts and have a README generated for their project. There is no front end, so this link brings you to my GitHub to checkout the code!</p>
            </div>
          </div>
          </div>
          <div className="col">
            <div className="m-4 p-4 otherProjects" data-aos="fade-right">
              <a href="https://tinder-for-jobs-53eebacc42f4.herokuapp.com">
                <img src="/tinderforjobs.PNG" height="35%" className="border border-white border-2 card-img-top rounded-3" alt="..." />
              </a>
              <div className="card-body">
                <h5 className="card-title mt-3 mb-2">Tinder for Jobs (Group Project)</h5>
                <h6 className="mb-3">| Handlebars | Bootstrap CSS | Session Authentication | MySQL & Sequelize | Node | </h6>
                <p className="card-text">This application is a fun play on the common dating app, but instead of love, we're looking for a job. The user is able to sign up and log in, set up a profile to let us know how to filter their jobs, then swipe left or right on a card stack full of job options.</p>
                <p><span className="text-warning">Spotlight feature: </span>The cards with jobs actually swipe and bring in new ones when the pile runs out!</p>
              </div>
            </div>
            <div className="col">
            <div className="m-5 p-5 otherProjects hiddenCard" data-aos="fade-left">
            <img src="/README Generator Screenshot.png" height="35%" className="card-img-top rounded-3" alt="..." />
            <div className="card-body m-5">
              <h5 className="card-title my-2">README Generator</h5>
              <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
                to answer prompts and have a README generated for their project. There is no front end, so this link brings you to my GitHub to checkout the code!</p>
            </div>
          </div>
            </div>
          </div>
          <div className="m-4 p-4 otherProjects" data-aos="fade-right">
            <a href="https://johndennis2.github.io/translateAPP/">
              <img src="/translate app screenshot.png" height="35%" className="card-img-top rounded-3 border border-2 border-white" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title mt-3 mb-2">The DaTA (Daily Translation App) (Group Project)</h5>
              <h6 className="mb-3">| Bulma & Tailwind | Custom CSS3 | RESTful API | JavaScript ES6+ | jQuery | HTML5 </h6>
              <p className="card-text">A "pocket" translator application utilizing API calls to translate text on the fly. A user can choose their words and language choice, or have them randomly generated on both sides. Responsive on mobile screens to allow this to be used anywhere it's needed.</p>
              <p><span className="text-warning">Spotlight feature: </span>Any language inputted will be automatically identified and translated accordingly!</p>
            </div>
          </div>
          <div className="col">
          <div className="m-5 p-5 otherProjects hiddenCard" data-aos="fade-left">
            <img src="/README Generator Screenshot.png" height="35%" className="card-img-top rounded-3" alt="..." />
            <div className="card-body m-5">
              <h5 className="card-title my-2">README Generator</h5>
              <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
                to answer prompts and have a README generated for their project. There is no front end, so this link brings you to my GitHub to checkout the code!</p>
            </div>
          </div>
          </div>
          <div className="col">
            <div className="m-4 p-4 otherProjects" data-aos="fade-right">
              <a>
              <img src="/README Generator Screenshot.png" height="35%" className="card-img-top rounded-3 border border-2 border-white" alt="..." />
              </a>
              <div className="card-body">
              <h5 className="card-title mt-3 mb-2">README Generator (Independent Project)</h5>
                <p className="card-text"></p>
                  <h6 className="mb-3">| JavaScript ES6+ | Node | File Writing using fs | </h6>
                  <p className="card-text">A CLI application that utilizes back-end technologies such as Node to allow the user
                  to answer prompts and have a README generated for their project. There is no front end, so clicking this image brings you to my GitHub to checkout the code!</p>
                  <p> <span className="text-warning">Spotlight feature: </span>Inluded in the README will be a badge specific to whichever license the user chooses in the prompts!</p>
              </div>
            </div>
            <div className="col">
            <div className="m-5 p-5 otherProjects hiddenCard" data-aos="fade-left">
            <img src="/README Generator Screenshot.png" height="35%" className="card-img-top rounded-3" alt="..." />
            <div className="card-body m-3">
              <h5 className="card-title my-2">README Generator</h5>
              <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
                to answer prompts and have a README generated for their project. There is no front end, so this link brings you to my GitHub to checkout the code!</p>
            </div>
          </div>
            </div>
          </div>
        </div>


        <div className="col">
        <div className="m-5 p-5 otherProjects hiddenCard" data-aos="fade-left">
            <img src="/README Generator Screenshot.png" height="35%" className="card-img-top rounded-3" alt="..." />
            <div className="card-body m-3">
              <h5 className="card-title my-2">README Generator</h5>
              <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
                to answer prompts and have a README generated for their project. There is no front end, so this link brings you to my GitHub to checkout the code!</p>
            </div>
          </div>

          <div className="col">
            <div className="m-4 p-4 otherProjects spacing" data-aos="fade-left">
              <a href="https://magicians-guild-blog-910cd4061319.herokuapp.com">
                <img src="/magiciansguild.PNG" height="35%" className="border border-white border-2 card-img-top rounded-3" alt="..." />
              </a>
              <div className="card-body">
                <h5 className="card-title mt-3 mb-2">Magician's Guild Blog (Independent Project)</h5>
                <h6 className="mb-3">| Handlebars | Bootstrap CSS | Session Authentication | MySQL & Sequelize | Node | </h6>
                <p className="card-text">This is a proof of concept for a simple social media blog application. It features session-based authentication which allows a user to sign up or log in. Along with the fun "Magicians" theme, there are some quirky fine details to suit the theme, check them out yourself.</p>
                <p> <span className="text-warning">Spotlight feature: </span>The homepage features all posts, but your profile will only show your posts and comments while allowing for deletion!</p>
              </div>
            </div>
          </div>

          <div className="col">
          <div className="m-5 p-5 otherProjects hiddenCard" data-aos="fade-left">
            <img src="/README Generator Screenshot.png" height="35%" className="card-img-top rounded-3" alt="..." />
            <div className="card-body m-5">
              <h5 className="card-title my-2">README Generator</h5>
              <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
                to answer prompts and have a README generated for their project. There is no front end, so this link brings you to my GitHub to checkout the code!</p>
            </div>
          </div>

            <div className="col">
              <div className="m-4 p-4 otherProjects spacing" data-aos="fade-left">
                <a href="https://msteven5.github.io/Weather-Viewing-App/">
                  <img src="/weather viewing app screenshot.png" height="35%" className="card-img-top border border-2 border-white rounded-3" alt="..." />
                </a>
                <div className="card-body">
                  <h5 className="card-title mt-3 mb-2">Weather Forecast App (Independent Project)</h5>
                  <h6 className="mb-3">| Bootstrap | Custom CSS3 | RESTful API | JavaScript ES6+ | jQuery | HTML5 </h6>
                  <p className="card-text">A weather app that allows a user to search any city in the country to find out the current weather and the next 5 day forecast. This application utilizes API calls to fill in data sorted through vanilla Javascript and jQuery.It has been optimized for mobile and is fully responsive to use on the go.</p>
                  <p> <span className="text-warning">Spotlight feature: </span>After searching a city, it will be saved, simply click the name and it will be searched for you!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="m-5 p-5 otherProjects hiddenCard" data-aos="fade-left">
            <img src="/README Generator Screenshot.png" height="35%" className="card-img-top rounded-3" alt="..." />
            <div className="card-body m-5">
              <h5 className="card-title my-2">README Generator</h5>
              <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
                to answer prompts and have a README generated for their project. There is no front end, so this link brings you to my GitHub to checkout the code!</p>
            </div>
          </div>

          <div className="col">
            <div className="m-4 p-4 otherProjects spacing" data-aos="fade-left">
              <a href="https://msteven5.github.io/Timed-Coding-Quiz/">
                <img src="/timed coding quiz screenshot.PNG" height="35%" className="card-img-top border border-2 border-white rounded-3" alt="..." />
              </a>
              <div className="card-body">
              <h5 className="card-title mt-3 mb-2">Timed Coding Quiz (Independent Project)</h5>
                  <h6 className="mb-3">| CSS3 | HTML5 | JavaScript ES6+ | localStorage </h6>
                  <p className="card-text">A short timed coding quiz written in vanilla HTML, CSS, and JavaScript. Once the quiz begins, the user has 60 seconds to answer the questions before being given the "Time's Up" message and asked to refresh the page. Each wrong answer removes 5 seconds from the clock.</p>
                  <p> <span className="text-warning">Spotlight feature: </span>Once the quiz is complete, you'll be prompted to put in your initials to save on a scoreboard!</p>
              </div>
            </div>
          </div>

          <div className="col">
          <div className="m-5 p-5 otherProjects hiddenCard" data-aos="fade-left">
            <img src="/README Generator Screenshot.png" height="35%" className="card-img-top rounded-3" alt="..." />
            <div className="card-body m-5">
              <h5 className="card-title my-5">README Generator</h5>
              <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
                to answer prompts and have a README generated for their project. There is no front end, so this link brings you to my GitHub to checkout the code!</p>
            </div>
          </div>

            <div className="col">
              <div className="m-4 p-4 otherProjects spacing" data-aos="fade-left">
                <h5 className="text-center mb-3">My First Project</h5>
                <a href="https://msteven5.github.io/Professional-Portfolio/">
                  <img src="/originalportfolio.PNG" height="35%" className="card-img-top rounded-3 border border-white border-5" alt="..." />
                </a>
                <div className="card-body">
                  <h5 className="card-title mt-3 mb-2">Original Portfolio (Independent Project)</h5>
                  <h6 className="mb-3">| HTML5 | Custom CSS3 |</h6>
                  <p className="card-text">This was my first coding project that I had to create from scratch. I have certainly come a long way since this, but I treasure this application greatly and remember putting my heart and soul into something I was proud of.</p>
                  <p> <span className="text-warning">Spotlight feature: </span>A really fantastic first attempt at a coding project, if I do say so myself! Also, most of the contact links work!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    <Footer />
    </div>
    
  );
}
