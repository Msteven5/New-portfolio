import Resume from '../../Full Stack Resume 2024.pdf'

export default function About() {
  return (
    <div className="homePage">
      <article className="container">
        <section className="row">

          <section className="my-2 col-md-4 col-lg-4 order-md-2 aboutMeContainer bg-dark vh-100">
            <div className="d-flex flex-column justify-content-center h-100 align-items-center">
            <h3 className="text-center mt-5">Meet The <span className='text-primary'>Developer</span></h3>
              <img className="rounded-5 img-fluid" height="75%" src="./headshot B&W.jpg" />
            </div>
          </section>

          <section className="my-2 aboutMeContainer px-3 bg-white text-dark col-lg-8 col-md-8 order-md-vh-100">
            <div className="h-50">
              <h3 className="text-center my-5 fw-semibold aboutMeTitle">A Little <span className='text-warning'>Background</span> of Me</h3>
              <div className="d-flex aboutMe justify-content-start mx-5">
                <p className=" aboutMe mx-5 pb-5"><span className='text-dark ms-5 fs-4'>A</span>fter many years of considering that coding was outside the realm of possibility for myself, I'm finally breaking into the tech industry as a <span className='text-danger'>Full Stack Developer</span>. My background has been mainly retail & sales. Careful <span className='text-success'>consideration</span>, planning, and attention to detail allowed me to make the leap into a coding bootcamp to change my career path into something I'm <span className='text-info'>passionate</span> about. Now with the bootcamp complete and a fresh set of tools and skills at my disposal, I intend to go as far as I can into the tech world. If you have not already, please click the <span className='text-warning'>"Projects"</span> section of the portfolio and see my journey from where I began to where I am now.
                </p>
              </div>
              <h4 className="text-center mb-5 fw-semibold aboutMeTitle">How To <span className='text-success'>Contact</span> Me</h4>
              <div className="aboutMe d-flex justify-content-start mx-5 align-items-center">
                <p className="mx-5 aboutMe"><span className='text-dark ms-5 fs-4'>Y</span>ou can reach out to me in <span className='text-info'>several</span> ways to inquire about my work, connect professionally, or even express interest in business opportunities. The easiest and perhaps most direct way is clicking on the <span className='text-danger'>"Contact Me"</span> section of this portfolio, and filling out the form to send an email to me directly. Otherwise, I have my <span className='text-warning'>Social Media</span>, <span className='text-success'>GitHub</span>, and <span className='text-info'>Resume</span> available below to provide additional points of contact as well as learn more about me and what I do! </p>
              </div>

              <h5 className="text-center my-4">Connect With Me On LinkedIn:<a href="https://linkedin.com/in/michaeldavidsondev"><i className="fa-brands text-warning mx-3 fs-4 fa-linkedin"></i></a></h5>

              <h5 className="text-center my-4">Feel Free to Checkout My GitHub:<a href="https://github.com/Msteven5"><i className="mx-3 text-success fa-brands fs-4 fa-github"></i></a></h5>


              <h5 className="text-center my-4">Here's A Downloadable Version of My Resume:<a href={Resume} download='Michael Davidson Resume'><i class="fa-solid mx-3 fs-4 text-info fa-file"></i></a></h5>

            </div>
          </section>




        </section>

      </article>
    </div>
  );
}
