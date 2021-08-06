import React, { useState, useEffect } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import KEY from '../apis/youtube';

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect((term) => {
    onTermSubmit(term);
  }, [])

  const onTermSubmit = async (term) => {
    const received = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${term}&type=video&key=${KEY}`)
      .then(response => response.json());
    console.log(received);
    setVideos(received.items);
    setSelectedVideo(received.items[0])
  }

  const onVideoSelect = video => {
    setSelectedVideo(video);
  }

  return (
    <div className="ui container">
      <div><SearchBar onTermSubmit={onTermSubmit} /></div>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
