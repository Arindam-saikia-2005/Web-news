import React, { useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { NewsContext } from "../components/Context API/NewsContext";
import "./News.css";

import gsap from "gsap";

function News() {
  const { newsData } = useContext(NewsContext);
  console.log(newsData);
  const cursorRef = useRef(null);
  const mainRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const main = mainRef.current;
    const Card = cardRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.6,
      });
    };

    const handleMouseEnter = (e) => {
      gsap.to(cursor, {
        scale: 3,
      });
    };

    main.addEventListener("mousemove",handleMouseMove);
    // Card.addEventListener("mouseenter",handleMouseEnter)
    
  }, newsData);

  const readMore = (url) => {
    window.open(url);
    console.log(url);
  };

  return (
    <div className="news-container" ref={mainRef}>
      <div id="cursor" ref={cursorRef}></div>
      <Outlet />
      {newsData.map((currItem, index) => {
        return (
          <div ref={cardRef} className="card" key={index}>
            <img src={currItem.urlToImage} alt="news" />
            <div className="content">
              <a onClick={() => readMore(currItem.url)} className="title">
                {currItem.title}
              </a>
              <p className="description">{currItem.description}</p>
              <button onClick={() => readMore(currItem.url)} className="btn">
                Read more
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default News;
