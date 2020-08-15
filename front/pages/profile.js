import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'

const Profile = () => {
  return( 
    <>
      <Head>
        <title>프로필</title>
      </Head>
      <AppLayout>
        <div> 프로필페이지</div>
      </AppLayout>
    </> 
  )
};

export default Profile;