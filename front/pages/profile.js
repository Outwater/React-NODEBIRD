import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "outWater" },
    { nickname: "Fanghoon" },
    { nickname: "hoonFang" },
    { nickname: "outWater" },
    { nickname: "Fanghoon" },
    { nickname: "hoonFang" },
  ];
  const followingList = [
    { nickname: "outWater" },
    { nickname: "Fanghoon" },
    { nickname: "hoonFang" },
  ];

  return (
    <>
      <Head>
        <title>프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={followingList} />
        <FollowList header="팔로워" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
