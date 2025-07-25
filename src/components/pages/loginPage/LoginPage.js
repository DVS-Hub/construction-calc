import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "../../header/Header";
import { useHttp } from "../../../hooks/http.hook";
import { useNavigate } from "react-router";

import "./loginPage.sass";

const LoginPage = () => {
  const [errorLogin, setErrorLogin] = useState(false);
  const { request } = useHttp();
  const navigate = useNavigate();
  const onRequest = async (values) => {
    const response = await request("http://localhost:3001/admin");
    if (
      response.login === values.login &&
      response.password === values.password
    ) {
      navigate("/admin");
      localStorage.setItem("login", true);
    } else {
      setErrorLogin(true);
    }
  };
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
                const login = values.login.trim();
                const password = values.password.trim();
                setSubmitting(false);
                setErrorLogin(false);
                onRequest({ login, password });
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
                      <ErrorMessage
                        className="errorMessage"
                        name="login"
                        component="div"
                      />
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
                      {errorLogin ? (
                        <div className="loginPage__panel-error">
                          Неверный логин или пароль
                        </div>
                      ) : null}
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
