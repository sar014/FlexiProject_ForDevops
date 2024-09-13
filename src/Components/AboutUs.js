import React from 'react'
import './aboutUs.css';
import profile1 from '../Assets/profile1.jpg';
import profile2 from '../Assets/profile2.avif';
import profile3 from '../Assets/profile3.jpg';
import Navbar from './Navbar';


export const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <section>
  <div className="row">
    <h1>Our Team</h1>
  </div>
  <div className="row">
    {/* Column 1*/}
    <div className="column">
      <div className="card">
        <div className="img-container">
          <img src={profile1} />
        </div>
        <h3>Sangeet</h3>
        <p>Founder</p>
        <div className="icons">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#">
            <i className="fab fa-github" />
          </a>
          <a href="#">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </div>
    {/* Column 2*/}
    <div className="column">
      <div className="card">
        <div className="img-container">
          <img src={profile2} />
        </div>
        <h3>Sarothi</h3>
        <p>Developer</p>
        <div className="icons">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#">
            <i className="fab fa-github" />
          </a>
          <a href="#">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </div>
    {/*Column 3*/}
    <div className="column">
      <div className="card">
        <div className="img-container">
          <img src={profile1} />
        </div>
        <h3>Omar</h3>
        <p>Developer</p>
        <div className="icons">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#">
            <i className="fab fa-github" />
          </a>
          <a href="#">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </div>
    
    {/* Column 4*/}
    <div className="column">
      <div className="card">
        <div className="img-container">
          <img src={profile3} />
        </div>
        <h3>Saylee</h3>
        <p>Designer</p>
        <div className="icons">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#">
            <i className="fab fa-github" />
          </a>
          <a href="#">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</>

  )
}
