import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./styles/app.module.css";

import SearchForm from "./SearchForm";
import YoutubePlayer from "./YoutubePlayer";
import PreviewList from "./PreviewList";
import CommentsItem from "./CommentsItem";
import CommentsForm from "./CommentsForm";

const YoutubeApp = () => {
  console.log(localStorage.getItem("videos"));

  const [videos, setVideos] = useState(
    localStorage.getItem("videos")
      ? JSON.parse(localStorage.getItem("videos"))
      : []
  );
  console.log(videos);

  const [activeVideoId, setActiveVideoId] = useState(
    localStorage.getItem("activeVideoId")
      ? localStorage.getItem("activeVideoId")
      : ""
  );

  const searchVideo = (searchPhrase) => {
    if (searchPhrase) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB6C4Zh2hEiM6N5yn-RdXyEZqsh2kXIBeY&q=${searchPhrase}&type=video`
        )
        .then((response) => {
          const videos = response.data;
          console.log({ videos });
          console.log(videos.items);
          const firstVideo = videos.items[0].id.videoId;
          setVideos(videos.items); //сразу вставили в массив айтемы
          setActiveVideoId(firstVideo);
        });
    } else {
      alert("Вы еще ничего не ввели");
    }
  };

  const selectVideo = (videoId) => {
    setActiveVideoId(videoId);
  };

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem("activeVideoId", activeVideoId);
  }, [activeVideoId]);

  console.log(localStorage.getItem("comments"));

  const [comments, setComments] = useState(
    localStorage.getItem("comments")
      ? JSON.parse(localStorage.getItem("comments"))
      : []
  );
  console.log(comments);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <SearchForm onSubmit={searchVideo} />
      {videos && (
        <div className={styles.mainBlock}>
          <YoutubePlayer videoId={activeVideoId} />
          <button
            onClick={() => {
              setVideos([]);
              setActiveVideoId("");
            }}
          >
            CLICK
          </button>
          <br />
          {comments.map((comment) => <CommentsItem {...comment}/>)}
          <br />
          
          <CommentsForm
            onCommentSubmit={(comment) => {
              setComments([...comments, comment]);
            }}
          />
          <br />
          <PreviewList videos={videos} onClick={selectVideo} />
        </div>
      )}
    </>
  );
};

export default YoutubeApp;
