import React, { useState, useCallback } from 'react'
import { Button, Form, Input } from 'antd'


const LoginForm = () => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
 
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e)=> {
    setPassword(e.target.value)
  },[]);

  return (
    <div>
      <Form>
        <div>
          <div>이메일</div>
          <Input value={id} onChange={onChangeId} />
        </div>
        <div>
          <div>비밀번호</div>
          <Input value={password} onChange={onChangePassword} />
        </div>
        <div>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm;