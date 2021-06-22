import React from "react";
import { Formik } from "formik";
import s from "./Dialogs.module.css";

const validateTextDialog = (values) => {
  const errors = {};
  if (!values.text || values.text.length > 200) {
    errors.text = "Длина не может быть меньше 1 символа или больше 200";
  }
  return errors;
};

const DialogForm = (props) => {
  const onAddPostValue = (value) => {
    props.addMessage(value.text);
  };
  return (
    <Formik
      initialValues={{ text: "" }}
      validate={validateTextDialog}
      onSubmit={onAddPostValue}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            className={s.dialogInput}
            type="text"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />

          <div>
            <button type="submit" className={s.buttonAddPost}>
              Add Message
            </button>
            <div className={s.errorsText}>
              {errors.text && touched.text && errors.text}
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default DialogForm;
