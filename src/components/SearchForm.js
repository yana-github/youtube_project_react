import { useState } from "react";
import styles from "./styles/form.module.css";

const SearchForm = (props) => {
  const { onSubmit } = props;
  const [searchFieldValue, setSearchFieldValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(searchFieldValue.trim()); //передали строку, обрезали пробелы
    e.target.reset();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchFieldValue(value);
  };

  return (
    <form className={styles.findVideo} onSubmit={submitForm}>
      <input
        type="text"
        name="textarea"
        placeholder="Что будем искать?"
        className={styles.searchField}
        autoComplete="off" //чтобы не предлагала что раньше искали
        onChange={handleChange}
      />
      <button className={styles.searchBtn}>Поиск</button>
    </form>
  );
};

export default SearchForm;
