import styles from "./styles/commentList.module.css";
import CommentsItem from "./CommentsItem";

const CommentsList = (props) => {
  const { comments } = props;

  const allComments = comments.map((comment) => (
    <CommentsItem key={comment.id} {...comment} />
  ));

  return (
    <div className={styles.listBlock}>
      <div className={styles.allComments}>{allComments}</div>
    </div>
  );
};

export default CommentsList;
