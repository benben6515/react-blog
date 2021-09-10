import React, { useState, useEffect, useContext }from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import PostStyled from '../styles/PostStyled.js'
import { Wrap } from '../styles/GlobalStyle'
import { getPost } from '../webAPI.js'
import { LoadingContext } from '../contexts'

const PostWrap = styled(Wrap)`
  width: 100%;
  padding: 2rem 0;
`

const Post = ({post}) => {
  const { id, title, createdAt, body } = post
  return (
    <PostStyled>
      <Link className="title" to={`/post/${id}`} >{title}</Link>
      <p className="info">{new Date(createdAt).toLocaleString().replace(',','')}</p>
      <p className="content" style={{
        marginTop: '2rem',
        lineHeight: 2,
        letterSpacing: '3px',
        whiteSpace: 'pre-wrap',
      }}>{body}</p>
    </PostStyled>
  )
}
Post.propTypes = {
  post: PropTypes.object
}

const PostPage = () => {
  const { setIsLoading } = useContext(LoadingContext)
  let { slug } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const data = await getPost(slug)
      setPost(data)
      setIsLoading(false)
    })()
  },[setIsLoading, slug])
  return (
    <>
      <Wrap>
        <PostWrap>
          <Post post={post} /> 
        </PostWrap>
      </Wrap>
    </>
  )
}

export default PostPage;
