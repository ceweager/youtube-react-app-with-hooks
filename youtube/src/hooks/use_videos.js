import { useState, useEffect } from 'react';
import KEY from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm])

  const search = async (term) => {
    const received = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${term}&type=video&key=${KEY}`)
      .then(response => response.json());
    setVideos(received.items);
  };

  return [videos, search];
};

export default useVideos;