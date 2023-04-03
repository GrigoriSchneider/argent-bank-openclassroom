import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';

/** @function show routes Parents/children 
 *
 * @returns (<MainLayout/>)
 */


const MainLayout = () => {
  
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
