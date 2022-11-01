import React from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import styles from "./styles/commentsForm.module.css";

class CommentsForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    time: "",
    isPublished: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  sendForm = (e) => {
    e.preventDefault();
    e.target.reset();
    this.setState({ isPublished: true });

    const comment = {
      username: this.state.name,
      userEmail: this.state.email,
      content: this.state.message,
      id: uuidv4(),
      date: moment().toISOString(true),
    };

    this.props.onCommentSubmit(comment)
  };



  render() {
    return (
      <>
        <form className={styles.commentsForm} onSubmit={this.sendForm}>
          <p>
            <b>Введите ваш отзыв:</b>
          </p>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className={styles.commentsFormField}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            className={styles.commentsFormField}
            onChange={this.handleChange}
          />
          <textarea
            rows="5"
            cols="45"
            name="message"
            className={styles.commentsFormField}
            onChange={this.handleChange}
          />
          <button className={styles.submitBtn}>Опубликовать</button>
        </form>
      </>
    );
  }
}

export default CommentsForm;
