import React from 'react';

// Don't need to call the param `props`, we can use ES6 syntax sugar
// to get JUST the video property. E.G. `props.video`
const VideoDetail = ({video}) => {
  const videoId = video.id.videoId; // A little confusing. Gee whiz.
  const url = `https://www.youtube.com/embed/${videoId}`; // More ES6 syntax

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;