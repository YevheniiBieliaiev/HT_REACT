import React, { useState, useContext } from 'react';
import { UserAuthContext } from '../../context/UserAuthContext';
import { Link } from 'react-router-dom';
import LoginButton from '../button/login-button/LoginButton';
import LoginModal from '../login-modal/LoginModal';
import CheckUser from '../login-modal/CheckUser';

function AppPublicNav() {
  const [loginModal, setLoginModal] = useState(false);
  const { isUserLogin, setIsUserLogin } = useContext(UserAuthContext);

  const closeLoginModal = () => {
    setLoginModal(false)
  }

  function logOut() {
    if (isUserLogin) setIsUserLogin(false)
  }

  return (
    <div className="navbar" >
      <Link to="/aboutus">ABOUT US</Link>

      <Link to="/licenseagreement">LICENSE AGREEMENT</Link>

      <LoginButton onClick={() => {
        setLoginModal(true);
        logOut()
      }}>
        {!(isUserLogin) ? "LOGIN" : "LOGOUT"}
      </LoginButton>

      <LoginModal visible={loginModal} setVisible={setLoginModal}>
        <CheckUser closeModal={closeLoginModal} />
      </LoginModal>
    </div>
  );
}

export default AppPublicNav;