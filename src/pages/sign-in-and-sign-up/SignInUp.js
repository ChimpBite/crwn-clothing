import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/signup/SignUp';

import './SignInUp.scss';

const SignInUp = () => {
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
