import Footer from '../Footer'
import Resume from '../../Full Stack Resume 2024.pdf'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const textArea = document.getElementById('textArea');

    function welcomeMessage() {
      const message = "Welcome To My Portfolio!"
      let messageChar = message.split('')

      for (let i = 0; i < message.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.textContent = messageChar[i];

        if (messageChar[i] === ' ') {
          charSpan.innerHTML = '&nbsp;';
        }
        setTimeout(() => {
          textArea.appendChild(charSpan);
        }, i * 50);
      }
    }
    welcomeMessage();
  }, []);

  return (
    <div className='mainBody vh-100 overflow-hidden'>
      <section className='row container-fluid'>

        <div className='col vh-100 vw-50'>
          <div className='h-50 mt-5 d-flex justify-content-center align-items-center'>
            <div className='text-wrap'>
              <h3 className='neon-text text-center'>Hello, I'm Michael!</h3>
              <h2 className='neon-text text-center'>Junior Full Stack Developer</h2>
              <h1 className='neon-text text-center' id="textArea"></h1>
              <div className='d-flex my-4 justify-content-evenly rounded-4'>
                <Link to="/Projects" className='btn btn-primary'>Check Out My Projects</Link>
                <Link to="/Contact" className='btn btn-primary'>Contact Me</Link>

              </div>
              <div className='d-flex mt-5 justify-content-around rounded-4'>

                <a href="https://github.com/Msteven5" data-toggle="tooltip" data-bs-placement="top" title="Click here to check out my GitHub!"><i className="text-white fa-brands fs-1 fa-github"></i></a>
                <a href="https://linkedin.com/in/michaeldavidsondev" data-toggle="tooltip" data-placement="top" title="Click here to connect with me on LinkedIn!"><i className="fa-brands text-white fs-1 fa-linkedin"></i></a>
                <a href={Resume} download='Michael Davidson Resume' data-toggle="tooltip" data-placement="top" title="Click here to download my resume!"><i className="fa-solid fs-1 text-white fa-file"></i></a>
                <a href="https://michaeldavidson.slack.com/team/U06QDREG88P" data-toggle="tooltip" data-bs-placement="top" title="Click here to connect with me on Slack!"><i className="text-white fa-brands fs-1 fa-slack"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className='col-6 col-sm-6 vh-100 vw-50 d-flex justify-content-center pb-5 align-items-end'>
          <img src='/MichaelsAvatar.jpg' width='35%' id="myAvatar" height='15%' className='rounded-circle img-fluid mb-5 pb-5'></img>
        </div>



      </section>

    </div>

  );
}
