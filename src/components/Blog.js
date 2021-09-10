import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom" 
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

import HomePage from '../pages/HomePage.js'
import AboutPage from '../pages/AboutPage.js'
import UserPage from '../pages/UserPage.js'
import PostPage from '../pages/PostPage.js'
import NewPostPage from '../pages/NewPostPage.js'
import LoadingPage from '../pages/LoadingPage.js'
import ErrorPage from '../pages/ErrorPage.js'

import Nav from './Nav'
import Footer from './Footer'
import theme from '../styles/theme'
import { AuthContext, LoadingContext } from '../contexts'
import { getMe } from '../webAPI'
import { getAuthToken, getTheme } from '../localStorageAPI.js'

const Container = styled.div`
  background-color: ${({theme}) => theme.bodyColor};
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 4.6rem);
`

function Blog() {
  const [currentTheme, setCurrentTheme] = useState(getTheme())
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState('')

  useEffect(() => {
    (async() => {
      if (!getAuthToken()) return
      setIsLoading(true)
      const res = await getMe()
      if (res.ok) setUser(res.data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
    <ThemeProvider theme={theme[currentTheme]}>

      <Router basename="/blog">
        <Nav currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        <Container>
          {isLoading && <LoadingPage />}
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/login">
              <UserPage userMethod="登入"/>
            </Route>
            <Route exact path="/register">
              <UserPage userMethod="註冊"/>
            </Route>
            <Route exact path="/new-post">
              <NewPostPage />
            </Route>

            <Route exact path="/post/:slug">
              <PostPage isLoading={isLoading} setIsLoading={setIsLoading}/>
            </Route>

            <Route exact path="*">
              <ErrorPage title="404 not found..."/>
            </Route>

          </Switch>
        </Container>
        <Footer />
      </Router>

    </ThemeProvider>
    </LoadingContext.Provider>
    </AuthContext.Provider>
  );
}

export default Blog;
