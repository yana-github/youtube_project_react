import moment from "moment";

import styles from "./styles/commentsItem.module.css";

const CommentsItem = (props) => {
  const { username, content, id, date } = props;

  return (
    <>
      <div className={styles.commentsList} key={id}>
        <div className={styles.commentsItem}>
          <p>
            <b>{username}</b>
          </p>
        </div>
        <div className={styles.commentsItem}>
          <p>{content}</p>
        </div>
        {`${moment(date).format("DD.MM.YYY HH:mm")}`}
      </div>
    </>
  );
};

export default CommentsItem;