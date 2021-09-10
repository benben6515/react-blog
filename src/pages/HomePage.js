import React, { useState, useEffect, useContext }from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { LoadingContext } from '../contexts.js'
import PostStyled from '../styles/PostStyled.js'
import { Button, Wrap, Container } from '../styles/GlobalStyle'
import { getPosts } from '../webAPI.js'

const PostWrap = styled(Wrap)`
  width: 100%;
  padding: 2rem 0;
`

const PostsStyled = styled(PostStyled)`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1rem auto;
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content:first-letter {
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: .5rem;
    float: left;
  }
`

const PaginationButton = styled(Button)`
  margin: .5rem;
`

const Post = ({post}) => {
  const { id, title, createdAt, body } = post
  return (
    <PostsStyled>
      <Link className="title" to={`/post/${id}`} >{title}</Link>
      <p className="info"> - {new Date(createdAt).toLocaleString().replace(',','')}</p>
      <p className="content">{body.length > 60 ? `${body.slice(0,60)}...` : body}</p>
    </PostsStyled>
  )
}
Post.propTypes = {
  post: PropTypes.object
}

const Pagination = ({ page, setPage, lastPageNumber }) => {
  const isPageInFirst = page !== 1
  const isPageInLast = page !== lastPageNumber

  const handleNext = () => {
    if (page >= lastPageNumber) return
    setPage(() => page + 1)
  }

  const handlePrev = () => {
    if (page <= 1) return
    setPage(() => page - 1)
  }

  return (
    <div>
      <Container>
        {isPageInFirst && (
          <PaginationButton onClick={() => setPage(1)}>首頁</PaginationButton>
        )}
        {isPageInLast && (
          <PaginationButton onClick={handleNext}>下一頁</PaginationButton>
        )}
        {isPageInFirst && (
          <PaginationButton onClick={handlePrev}>上一頁</PaginationButton>
        )}
        {isPageInLast && (
          <PaginationButton onClick={() => setPage(lastPageNumber)}>
            最後一頁
          </PaginationButton>
        )}
      </Container>
      <Container>
        <div>
          頁數：{page} / {lastPageNumber}
        </div>
      </Container>
    </div>
  )
}

const HomePage = () => {
  const [page, setPage] = useState(1)
  const [lastPageNumber, setLastPageNumber] = useState(1)
  const [posts, setPosts] = useState([])
  const { setIsLoading } = useContext(LoadingContext)
  const { REACT_APP_PER_PAGE_ITEM:perPageItem } = process.env

  useEffect(() => {
    (async () => {
      await setIsLoading(true)
      const { data, lastPage } = await getPosts(page, perPageItem)
      await setPosts(data)
      await setLastPageNumber(lastPage)
      await setIsLoading(false)
    })()
  },[setIsLoading, page, perPageItem])

  return (
    <>
      <Wrap>
        <PostWrap>
          {posts.map((post) => <Post key={post.id} post={post} /> )}
          <Pagination page={page} setPage={setPage} lastPageNumber={lastPageNumber}/>
        </PostWrap>
      </Wrap>
    </>
  )
}

export default HomePage;
