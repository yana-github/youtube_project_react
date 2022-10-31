import Moment from "moment";

import styles from "./styles/commentsItem.module.css";

const CommentsItem = (props) => {
  const { id, name, message, time } = props;

  return (
    <>
      <div className={styles.commentsList}>
        <div> Пользователь {name}</div>
        <div>
          Дата комментария {time}
          {/*         <Moment format="YYYY-MM-DD HH:mm" interval={1000} /> */}
          {`${Moment(time * 1000).format("DD.MM.YYY HH:mm")}`}
        </div>
      </div>
      <div> Ваше сообщение {message}</div>
    </>
  );
};

export default CommentsItem;
