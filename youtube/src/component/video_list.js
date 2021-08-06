import React from 'react';
import VideoItem from './video_item';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, index) => {
    return (
      <VideoItem
        key={index}
        onClick={() => { onVideoSelect(video) }}
        video={video}
      />
    )
  })
  return (
    <div className="ui relaxed divided list">{renderedList}</div>
  )
}

export default VideoList;