import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from '@emotion/styled'

import ErrorPage from '../pages/ErrorPage.js'
import { Wrap, Button, Container } from '../styles/GlobalStyle'
import { addPost } from '../webAPI.js'
import { getAuthToken } from '../localStorageAPI.js'
import { AuthContext, LoadingContext } from '../contexts.js'

const NewPostWrap = styled(Wrap)`
  width: 100%;
  padding: 2rem 0;
`

const InputWrap = styled.form`
  width: clamp(25ch, 70%, 70ch);
  padding: 1rem;
  margin-top: 3rem;
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
  input[type=text], textarea {
    width: 100%;
    font-size: 1.2rem;
    background: ${({theme}) => theme.foregroundColor};
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.titleColor};
    border-radius: .3rem;
    padding-left: .5rem;
    height: 1.8rem;
    line-height: 1.2;
    &:focus {
      outline: none;
    }
  }
  textarea {
    padding-top: .5rem;
    height: auto;
    resize: vertical;
  }
  span {
    max-width: 100%;
    align-self: flex-end;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Input  = ({ user }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { setIsLoading } = useContext(LoadingContext)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    if (!title || !content) {
      return setErrorMessage('請輸入標題或內容')
    }
    if (!title.trim().length
      || !content.trim().length
    ) return setErrorMessage('標題或內容不得為空白')
    
    setIsLoading(true)
    const res = await addPost(getAuthToken(), title, content )
    if (!res) {
      setIsLoading(false)
      return setErrorMessage('新增失敗')
    }
    setIsLoading(false)
    history.push("/")
  }

  return (
    <InputWrap onSubmit={handleSubmit}>
      <h1>發布文章</h1><span> - {user.nickname}</span>
      {errorMessage && <div>{errorMessage}！</div>}
      <div className="title">標題：</div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="請輸入標題..."/>
      <div className="title">內容：</div>
      <textarea onChange={e => setContent(e.target.value)} rows="6" placeholder="請輸入內容...">{content}</textarea>
      <Button className="button">送出</Button>
    </InputWrap>
  )
}

const NewPost = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Wrap>
        <NewPostWrap>
          <Container>
            {user ? <Input user={user}/> : <ErrorPage title="Login first..." /> }
          </Container>
        </NewPostWrap>
      </Wrap>
    </>
  )
}

export default NewPost;
