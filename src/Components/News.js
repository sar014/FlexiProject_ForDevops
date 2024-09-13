import React from 'react'

import "./News.css"
import news1 from '../Assets/News/news1.jpg'
import news2 from '../Assets/News/news2.jpg'
import news3 from '../Assets/News/news3.jpg'
import news4 from '../Assets/News/news4.jpg'
import news5 from '../Assets/News/news5.jpg'
import news6 from '../Assets/News/news6.jpg'
import Navbar from './Navbar'


export const News = () => {
  return (
    <>
    <Navbar/>
    <div className="news-card-container">
      
    <div className="news-card">
        <img src={news2} className="news-card-img-top" alt="News 2" />
        <div className="news-card-body">
          <h5 className="news-card-title">Assassin’s Creed Mirage Review</h5>
          <p className="news-card-text">Marhaba! (9/10)</p>
          <a href="https://www.ign.com/articles/assassins-creed-mirage-review" className="news-btn btn-primary">Read More...</a>
        </div>
      </div>
      
      <div className="news-card">
        <img src={news1} className="news-card-img-top" alt="News 1" />
        <div className="news-card-body">
          <h5 className="news-card-title">Marvel’s Spider-Man 2 PS5 Review</h5>
          <p className="news-card-text">Beyond Amazing! (10/10)</p>
          <a href="https://in.ign.com/marvels-spider-man-2/195841/review/marvels-spider-man-2-review-truly-spectacular" className="news-btn btn-primary">Read More...</a>
        </div>
      </div>

      <div className="news-card">
        <img src={news4} className="news-card-img-top" alt="News 2" />
        <div className="news-card-body">
          <h5 className="news-card-title">Ghost of Tsushima Review</h5>
          <p className="news-card-text">The Rise of Ghost! (9/10)</p>
          <a href="https://in.ign.com/ghost-of-tsushima/149002/review/ghost-of-tsushima-review" className="news-btn btn-primary">Read More...</a>
        </div>
      </div>

      <div className="news-card">
        <img src={news5} className="news-card-img-top" alt="News 2" />
        <div className="news-card-body">
          <h5 className="news-card-title">Gran Turismo 7 Review</h5>
          <p className="news-card-text">Crazy Fast! (7/10)</p>
          <a href="https://www.ign.com/articles/gran-turismo-7-review" className="news-btn btn-primary">Read More...</a>
        </div>
      </div>

      <div className="news-card">
        <img src={news6} className="news-card-img-top" alt="News 2" />
        <div className="news-card-body">
          <h5 className="news-card-title">God of War Ragnarok Review</h5>
          <p className="news-card-text">The Saga Continues! (9/10)</p>
          <a href="https://www.ign.com/articles/god-of-war-ragnarok-review" className="news-btn btn-primary">Read More...</a>
        </div>
      </div>

      <div className="news-card">
        <img src={news3} className="news-card-img-top" alt="News 2" />
        <div className="news-card-body">
          <h5 className="news-card-title">Avatar: Frontiers of Pandora Review</h5>
          <p className="news-card-text">Spellbinding! (7/10)</p>
          <a href="https://in.ign.com/avatar-frontiers-of-pandora/198924/review/avatar-frontiers-of-pandora-review" className="news-btn btn-primary">Read More...</a>
        </div>
      </div>

    </div>
  </>

  )
}
