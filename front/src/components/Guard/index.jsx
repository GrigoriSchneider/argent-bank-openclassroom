import React from 'react';
import { Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';


/** @function protect user authentication
 *
 * @component
 * @returns (<Guard/>)
 */

const Guard = () => {
  const { token } = useSelector((state) => state.user);

  return token !== null ? <Outlet /> : <Navigate to="/login" />;
};

export default Guard;
