import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../components/hooks/useInput";
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [name, onNameChange] = useInput("");

  const onSubmitForm = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <div>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-name">이름</label>
          <br />
          <Input
            name="user-name"
            value={name}
            onChange={onNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user-id">이메일</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">이메일</label>
          <br />
          <Input
            name="user-password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </div>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
