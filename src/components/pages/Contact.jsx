export default function Contact() {
  return (
    <div>
      <h1 className="text-center">Contact Me</h1>
      <h5 className="form-label my-3 text-center">Send Me A Fun Message or Tell Me You Want To Hire Me!</h5>
      <div className="d-flex justify-content-center">

        <form className="border border-2 mb-5 p-4 w-75 my-4 rounded-4" id="contactForm" action="https://formsubmit.co/michaeldavidsonthedeveloper@gmail.com" method="POST">
          <input type="hidden" name="_next" value="https://magicians-guild-blog-910cd4061319.herokuapp.com" />
          <input type="hidden" name="_subject" value="Someone Sent You a Message From Your Portfolio!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box"></input>

          <div className="mb-3 text-center">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="text" className="form-control" name="email" placeholder="Email Address" aria-label="Email-address" aria-describedby="basic-addon1" required />
            </div>
            <div className="form-text text-white text-start" id="basic-addon4">Email Will NOT Be Shared With 3rd Parties</div>
          </div>


          <div className="input-group mb-3">
            <input type="text" className="form-control" name="name" placeholder="Name or Company" aria-label="User's name or company" aria-describedby="basic-addon2" required />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Your Message:</label>
            <input className="form-control" name="message" maxLength="200" id="messageText" required />
          </div>
        

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
