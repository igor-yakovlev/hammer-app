import React from "react";
import styles from "./CustomFileInput.module.css";

const CustomFileInput = ({ onChange }) => {
  return (
    <>
      <input
        type="file"
        id="file"
        multiple={false}
        onChange={onChange}
        className={styles.input__file}
      />
      <label htmlFor="file" className={styles.button}>
        Import
      </label>
    </>
  );
};

export default CustomFileInput;
