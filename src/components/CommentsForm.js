import React from "react";
import styles from "./styles/commentsForm.module.css";
import Notification from "./CommentsList";

class CommentsForm extends React.Component {
  state = {
    showNotification: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); //из какого нейма мы тянем данные, так как функция у нас единая.Нейм хранится в Е.Таргет.Будут созданы состояния
  };

  sendForm = (e) => {
    e.preventDefault(); //страница не обновляется
    e.target.reset(); //перезагрузить форму, очистить поля
    this.setState({ showNotification: true });
  };

  render() {
    const { name, email, message, showNotification } = this.state;

    return (
      <>
        {showNotification && (
          <Notification name={name} email={email} message={message} />
        )}
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
