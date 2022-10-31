import PreviewItem from "./PreviewItem";

const PreviewList = (props) => {
  const { videos, onClick } = props; //это другой onClick!

  const items = videos.map((video) => ( //сразу передали массив, был undefind
    //создаем для каждой видюшки превью через мапание массива
    <PreviewItem key={video.id.videoId} {...video} onClick={onClick} />
  ));

  return <ul>{items}</ul>;
};

export default PreviewList;