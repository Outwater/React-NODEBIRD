import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="point">
          point
          <br />
          10
        </div>,
        <div key="message">
          쪽지
          <br /> 3
        </div>,
        <div key="follower">
          팔로워
          <br /> 1
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>아바타</Avatar>} title="Outwater"></Card.Meta>
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.node.isRequired,
};

export default UserProfile;
