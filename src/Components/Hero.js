import React from 'react';
import { Link } from 'react-router-dom';
import videoBg from '../Assets/videoBg.mp4';
import videoGameImage from '../Assets/videoGame3.png';
import ContactUs from '../Assets/unch.jpg';
import './Hero.css'; 
import Navbar from './Navbar';




const Hero = () => {
  return (
    <>
    <Navbar/>
      <div class="banner">
        <div className="bg">
          <div className="content">
            <h2>A new Home for <br /> Game Lovers</h2>
          </div>
          <video id="myVideo" src={videoBg} autoPlay loop muted/>
        </div>
      </div>

      <div className="about">
        <div className="contentBx">
          <h2>About Us</h2>
          <p>
            Welcome to Gamer's World, your ultimate destination for all things gaming! We're passionate about gaming and dedicated to providing a platform where gamers from all walks of life can view new and old entries into the world of games.
          </p>
          <p>
            At Gamer's World, we believe that gaming is more than just a hobby; it's a culture, a community, and a lifestyle. Whether you're a casual gamer, a hardcore competitor, or simply someone who enjoys immersing themselves in captivating game worlds, you'll find a home here.
          </p>
          <p>
            Our mission is to foster a welcoming and inclusive environment where gamers of all backgrounds feel valued, respected, and empowered. From the latest gaming reviews of new and old games to a section dedicated to commemorate previous Game Of the Year winners, Gamer's World is your go-to source for all things gaming-related.
          </p>
          <Link to="/about">Our Team...</Link>
        </div>
        <img id="myImage" src={videoGameImage}/>
      </div>

    </>
  );
};

export default Hero;
