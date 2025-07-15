import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "../../header/Header";

import "./loginPage.sass";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="loginPage">
        <h1 className="loginPage__title">Авторизация администратора</h1>
        <div className="loginPage__wrapper">
          <div className="loginPage__panel">
            <Formik
              initialValues={{ login: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (values.login.length > 20) {
                  errors.login = "Введите не более 20 символов";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => {
                return (
                  <Form>
                    <div className="loginPage__panel-form">
                      <label
                        className="loginPage__panel-form-labelLogin"
                        htmlFor="loginInput"
                      >
                        Логин
                      </label>
                      <Field
                        className="loginPage__panel-form-input"
                        type="text"
                        name="login"
                        id="loginInput"
                      />
                      <ErrorMessage name="login" component="div" />
                      <label
                        className="loginPage__panel-form-labelPassword"
                        htmlFor="passwordInput"
                      >
                        Пароль
                      </label>
                      <Field
                        className="loginPage__panel-form-input"
                        type="password"
                        name="password"
                        id="passwordInput"
                      />
                      <div className="loginPage__panel-error">
                        Неверный логин или пароль
                      </div>
                      <button type="submit" disabled={isSubmitting}>
                        Войти
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
