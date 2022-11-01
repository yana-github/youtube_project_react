import moment from "moment";

import styles from "./styles/commentsItem.module.css";

const CommentsItem = (props) => {
  const { username, userEmail, content, id, date } = props;

  return (
    <>
      <div className={styles.commentsList} key={id}>
        <div> Пользователь {username}</div>
        <div> Email {userEmail}</div>
        <div>Дата комментария{`${moment(date).format("DD.MM.YYY HH:mm")}`}</div>
      </div>
      <div> Комментарий {content}</div>
    </>
  );
};

export default CommentsItem;
