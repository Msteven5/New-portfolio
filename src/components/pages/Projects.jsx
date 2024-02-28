

export default function Projects() {
  return (
    <div>
      <article className="row justify-content-center">
        <div className="row p-3 m-1 w-auto" id="project1">
          <div className="p-2 w-auto">
            <h3 className="row m-2 justify-content-center align-items-center">Spotlight Project!</h3>
            <img src="/translate app screenshot.png" id="firstProject"
              className="card-img-top rounded-4 border border-5 border-warning" alt="A screenshot of a translation app" />
            <div className="card-body">
              <h5 className="card-title my-2">The DaTA (Daily Translation App)</h5>
              <p className="card-text">This was my first collaborative project where we coded a translation app using API
                calls to allow a user to translate </p>
              <a href="#" className="btn btn-primary">Let's Go See It!</a>
            </div>
          </div>
        </div>
      </article>

      <div className="row justify-content-center">
        <h4 className="row m-2 justify-content-center align-items-center">Other Projects for Consideration!</h4>

        <div className="m-4 p-4 otherProjects">
          <img src="/weather viewing app screenshot.png" height="150px" className="card-img-top rounded-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title my-2">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" className="btn btn-primary">Let's Go See It!</a>
          </div>
        </div>

        <div className="m-4 p-4 otherProjects">
          <img src="/timed coding quiz screenshot.png" height="150px" className="card-img-top rounded-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title my-2">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" className="btn btn-primary">Let's Go See It!</a>
          </div>
        </div>

        <div className="m-4 p-4 otherProjects" id="lastProject">
          <img src="/README Generator Screenshot.png" height="150px" className="card-img-top rounded-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title my-2">README Generator</h5>
            <p className="card-text">A CLI application that utilizes back-end technologies such as Node.js to allow the user
              to answer prompts and have a README generated for their project.</p>
            <a href="#" className="btn btn-primary">Let's Go See It!</a>
          </div>
        </div>
      </div>
    </div>
  );
}
