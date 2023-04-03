import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { userActions } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { api } from '../../services/axiosApi';
import './Login.scss';

/** @function manage the authentication of the user by communicating
 * with the database in order to verify the login infos (email/password).
 * If correct, it navigates to the profile page.
 *
 * @returns (<Login/>)
 */

const Login = () => {
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState();

  // useForm()
  const { register, formState, handleSubmit } = useForm();
  const navigate = useNavigate();

  // Validate Form
  const onSubmit = (data) => {
    api
      .login(data.username, data.password)
      .then((user) => {
        dispatch(userActions.login(user.body.token));
        api.getProfile().then((userInfos) => {
          dispatch(userActions.setUserInfos(userInfos.body));
          navigate('/profile');
        });
      })
      .catch((error) => setLoginError(error.message));
  };

  return (
    <main className="bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle">
          <FontAwesomeIcon icon={faUserCircle} />
        </i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              {...register('username', {
                required: true,
              })}
            />
            {formState.errors.username && (
              <p style={{ color: 'red' }}>Username is required</p>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register('password', { required: true })}
            />
          </div>
          {formState.errors.password && (
            <p style={{ color: 'red', textAlign: 'left' }}>Invalid password</p>
          )}
          {loginError && (
            <p style={{ color: 'red', textAlign: 'left' }}>{loginError}</p>
          )}

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
