import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from '@emotion/styled'

import { AuthContext, LoadingContext } from '../contexts'
import { register, login, getMe } from '../webAPI'
import { setAuthToken, getAuthToken } from '../localStorageAPI'
import { Wrap, Button, Container } from '../styles/GlobalStyle'

const LoginWrap = styled(Wrap)`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputWrap = styled.form`
  width: clamp(25ch, 40%, 35ch);
  padding: 1rem;
  box-shadow: ${({theme}) => theme.navBoxShadow};
  border: 1px solid ${({theme}) => theme.infoColor};
  border-radius: .4rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .button {
    align-self: center;
    justify-content: center;
    margin: 2rem 0 1rem;
    width: clamp(3rem, 30%, 6rem);
  }
  .title {
    align-self: flex-start;
    margin: 1rem 0;
    font-size: 1.2rem;
  }
  input[type=text], input[type=password] {
    width: 100%;
    background: ${({theme}) => theme.foregroundColor};
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.titleColor};
    border-radius: .3rem;
    padding-left: .5rem;
    height: 1.5rem;
    line-height: 1.2;
    &:focus {
      outline: none;
    }
  }
`

const Input  = ({ userMethod }) => {
  const { setUser } = useContext(AuthContext)
  const { setIsLoading } = useContext(LoadingContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const handleLogin = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    if (!username || !password) {
      return setErrorMessage('請輸入帳號或密碼')
    }
    if (!username.trim().length
      || !password.trim().length
    ) return setErrorMessage('帳號或密碼不得為空白')

    setIsLoading(true)
    const loginRes = await login(username, password)
    if (!loginRes.ok) return setErrorMessage('帳號或密碼錯誤')
    setAuthToken(loginRes.token)

    const getMeRes = await getMe(getAuthToken())
    if (!getMeRes.ok) {
      setAuthToken(null)
      setIsLoading(false)
      return setErrorMessage('帳號或密碼錯誤')
    }
    setUser(getMeRes.data)
    setIsLoading(false)
    history.push("/")
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    if (!nickname || !username || !password || !passwordAgain) {
      return setErrorMessage('請輸入暱帳號、密碼或再次確認密碼')
    }
    if (!nickname.trim().length
      || !username.trim().length
      || !password.trim().length
      || !passwordAgain.trim().length
    ) return setErrorMessage('暱帳號、密碼或再次確認密碼 不得為空白')

    setIsLoading(true)
    const loginRes = await register(nickname, username, password)
    if (!loginRes.ok) return setErrorMessage('註冊失敗')
    setAuthToken(loginRes.token)

    const getMeRes = await getMe()
    if (!getMeRes.ok) {
      setAuthToken(null)
      setIsLoading(false)
      return setErrorMessage('帳號或密碼錯誤')
    }
    setUser(getMeRes.data)
    setIsLoading(false)
    history.push("/")
  }

  return (
    <InputWrap onSubmit={
      userMethod === "登入"
      ? handleLogin
      : handleRegister
    }>
      <h1>{userMethod}</h1>
      {errorMessage && <div>{errorMessage}！</div>}
      {userMethod === "註冊" && (
        <>
          <div className="title">暱稱：</div>
          <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} />
        </>
      )}

      <div className="title">帳號：</div>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <div className="title">密碼：</div>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

      {userMethod === "註冊" && (
        <>
          <div className="title">再次確認密碼：</div>
          <input type="password" value={passwordAgain} onChange={e => setPasswordAgain(e.target.value)} />
        </>
      )}
      <Button className="button">{userMethod}</Button>
    </InputWrap>
  )
}

const UserPage = ({ userMethod }) => {
  return (
    <Wrap>
      <Container>
        <LoginWrap>
          <Input userMethod={userMethod}/>
        </LoginWrap>
      </Container>
    </Wrap>
  )
}

export default UserPage;
