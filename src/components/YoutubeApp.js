import { useState } from "react";
import axios from "axios";

import styles from "./styles/app.module.css";

import SearchForm from "./SearchForm";
import YoutubePlayer from "./YoutubePlayer";
import PreviewList from "./PreviewList";

const YoutubeApp = () => {
  const [videos, setVideos] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(null);

  const searchVideo = (searchPhrase) => {
    if (searchPhrase) {
      axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB6C4Zh2hEiM6N5yn-RdXyEZqsh2kXIBeY&q=${searchPhrase}&type=video`
        )
        .then((response) => {
          const videos = response.data;
          console.log(videos);
          const firstVideo = videos.items[0].id.videoId;
          setVideos(videos);
          setActiveVideoId(firstVideo);
        });
    } else {
      alert("Вы еще ничего не ввели");
    }
  };

const selectVideo = (videoId) => {
  setActiveVideoId(videoId);

}

  return (
    <>
      <SearchForm onSubmit={searchVideo} />
      {videos && (
        <div className={styles.mainBlock}>
          <YoutubePlayer videoId={activeVideoId}/>
          <PreviewList videos={videos} onClick={selectVideo}/>
        </div>
      )}
    </>
  );
};

export default YoutubeApp;