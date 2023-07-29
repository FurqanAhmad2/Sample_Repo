import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import clip from "../../assets/clip.mp4"
import ReactPlayer from 'react-player'
import './Coursepage.css';
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const navigate = useNavigate();
  const progress  = 40;

  const videos = [
    {
      url: 'https://example.com/video1.mp4',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxSu07IFRv6ba5yandWA_jYmrmA2-iRrEqg&usqp=CAU',
      name: 'Video Music 01'
    },
    {
      url: 'https://example.com/video2.mp4',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxSu07IFRv6ba5yandWA_jYmrmA2-iRrEqg&usqp=CAU',
      name: 'Video Music 02'
    },
    {
      url: 'https://example.com/video3.mp4',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxSu07IFRv6ba5yandWA_jYmrmA2-iRrEqg&usqp=CAU',
      name: 'Video Music 03'
    },
    {
      url: 'https://example.com/video3.mp4',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxSu07IFRv6ba5yandWA_jYmrmA2-iRrEqg&usqp=CAU',
      name: 'Video Music 04'
    },
    {
      url: 'https://example.com/video3.mp4',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxSu07IFRv6ba5yandWA_jYmrmA2-iRrEqg&usqp=CAU',
      name: 'Video Music 05'
    },
    {
      url: 'https://example.com/video3.mp4',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxSu07IFRv6ba5yandWA_jYmrmA2-iRrEqg&usqp=CAU',
      name: 'Video Music 06'
    },
    {
      url: 'https://example.com/video3.mp4',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxSu07IFRv6ba5yandWA_jYmrmA2-iRrEqg&usqp=CAU',
      name: 'Video Music 07'
    },
    // Add more videos and thumbnails as needed
  ];

  return (
    <div>
      <Navbar />
<div className="login-page">
      <div className="main">
        <h2 className="heading">Flute Course</h2>
        <hr className="column-separator" />

        <div className="menu-screen">
           
           <div className="thumb-list">
              <div className="video-slider">
                <h4 style={{ marginBottom: '5%'}}>Music Course</h4>
                {videos.map((video, index) => (
                  <div key={index} className="video-slide">
                    <img src={video.thumbnail} alt={`Thumbnail ${index + 1}`} width={70} height={70}/>
                    <h5>{video.name}</h5>
                  
                  </div>
                ))}
              </div>
           </div>
                    
          <div className="video-Player">
          <h3>Sample Heading</h3>
          <ReactPlayer url={clip} controls={true} className="video-div-player" width="90%" height="auto" style={{marginLeft: '5%', marginTop: '3%'}}/>
          <h6 style={{marginLeft: '5%',marginTop: '1%'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h6>

          <div className="progress" style={{ marginLeft: '5%', marginTop:'3%',marginRight: '4%', height: '5%'}}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progress}%
            </div>
          </div>
          </div>


        </div>
      </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default CoursePage;
