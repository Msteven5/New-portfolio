

export default function Projects() {
  return (
    <div>
      <article className="row">
        <div className="row p-3 m-1 d-flex justify-content-center" id="project1">
          <div className="p-2 col-md-8, col-sm-7">
            <h3 className="row m-2 justify-content-center align-items-center">Spotlight Project!</h3>
            <img src="/translate app screenshot.png" id="firstProject"
              className="card-img-top rounded-4 border border-5 border-warning" alt="A screenshot of a translation app" />
            <div className="card-body mw-50">
              <h5 className="card-title my-2">The DaTA (Daily Translation App)</h5>
              <p className="card-text">This was my first collaborative project where we created a translation app using API calls to allow a user to translate words of their choice, random words, or phrases they chose dsafgiasjdfl;ghkjasdf;ljgha;sljdhfglkadjfbglk;as</p>
              <a href="https://johndennis2.github.io/translateAPP/" className="btn btn-primary">Let's Go See It!</a>
            </div>
          </div>
        </div>
      </article>

      <div className="row justify-content-center">
        <h4 className="row m-2 justify-content-center align-items-center">Other Projects for Consideration!</h4>

        <div className="m-4 p-4 otherProjects">
          <img src="/weather viewing app screenshot.png" height="150px" className="card-img-top rounded-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title my-2">Weather Viewing App</h5>
            <p className="card-text">This application was created to allow the user to check the weather forecast in a simple and easy to digest way. It utilizes RESTful API to generate the data and was styled using custom CSS and Bootstrap.</p>
            <a href="https://msteven5.github.io/Weather-Viewing-App/" className="btn btn-primary">Let's Go See It!</a>
          </div>
        </div>

        <div className="m-4 p-4 otherProjects">
          <img src="/timed coding quiz screenshot.png" height="150px" className="card-img-top rounded-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title my-2">Timed Coding Quiz</h5>
            <p className="card-text">This application was created as a fun way to test one's knowledge of javascript. It utilizes localStorage to allow the user to save their score, and was one of my initial JavaScript projects.</p>
            <a href="https://msteven5.github.io/Timed-Coding-Quiz/" className="btn btn-primary">Let's Go See It!</a>
          </div>
        </div>

        <div className="m-4 p-4 otherProjects" id="lastProject">
          <img src="/README Generator Screenshot.png" height="150px" className="card-img-top rounded-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title my-2">README Generator</h5>
            <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
              to answer prompts and have a README generated for their project. There is no front end, so this link brings you to my GitHub to checkout the code!</p>
            <a href="https://github.com/Msteven5/README-Generator.git" className="btn btn-primary">Let's Go See It!</a>
          </div>
        </div>
      </div>
    </div>
  );
}
