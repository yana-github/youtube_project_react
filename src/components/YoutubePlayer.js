const YoutubePlayer = (props) => {
  const { videoId } = props;
  if (!videoId) return null;
  return (
    <iframe
      width="560"
      height="315"
      src={"https://www.youtube.com/embed/" + videoId}
    ></iframe>
  );
};
export default YoutubePlayer;
