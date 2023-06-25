import React from 'react'
import { redirect } from 'react-router';

export async function action() {

    return redirect(`/auth/ForgotPassword`);
}
const ForgotPassword = () => {
  return (
    <div>ForgotPassword</div>
  )
}

export default ForgotPassword