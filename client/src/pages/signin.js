import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import SignIn from '../components/SignIn'

const SigninPage = ({ setUser }) => {
  return (
    <>
      <ScrollToTop />
      <SignIn setUser={setUser} />
    </>
  )
}

export default SigninPage