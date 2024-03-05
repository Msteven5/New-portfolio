export default function Home() {
  return (
    <div>
      <h2 className="my-3 text-center">Full Stack Web Developer</h2>
      <h4 className="text-center">Technical Skills</h4>
      <article className="container d-flex justify-content-center">
        <div className="row d-flex mb-5 border border-4 p-4 rounded-4 m-3 w-75 fs-4">

          <ul className='col-lg-4, skills'>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">HTML5</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">CSS3</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">JavaScript ES6+</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">Bootstrap</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">Tailwind</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">Bulma</li>
            </ul>

            <ul className='col-lg-4, col-md-6 skills'>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">jQuery</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">React.js</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">Handlebars</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">Node.js</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">npm</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">VS Code</li>
            </ul>

            <ul className='col-lg-4, col-md-6 skills'>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">Express</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">RESTful API</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">MySQL & NoSQL</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">Jest & Vitest</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">GraphQL</li>
            <li className="d-flex justify-content-center p-2 m-2 text-responsive rounded-4">MongoDB</li>
          </ul>
        </div>

      </article>
    </div>
  );
}
