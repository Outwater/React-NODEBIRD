import React from "react";
import PropTypes from "prop-types";
import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ListWrapper = styled(List)`
  margin-bottom: 20px;
`;
const ListItemWrapper = styled(List.Item)`
  margin-top: 20px;
`;
const LoadmoreWrapper = styled.div`
  text-align: center;
  margin: 10px 0;
`;

const FollowList = ({ header, data }) => {
  return (
    <ListWrapper
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <LoadmoreWrapper>
          <Button>더 보기</Button>
        </LoadmoreWrapper>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <ListItemWrapper>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </ListItemWrapper>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
