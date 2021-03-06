import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../components/hooks/useInput";
import { loginAction } from "../reducers/index";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    dispatch(
      loginAction({
        id,
        password,
      })
    );
    console.log(id, password);
  }, [id, password]);

  return (
    <div>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">이메일</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
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

export default LoginForm;
