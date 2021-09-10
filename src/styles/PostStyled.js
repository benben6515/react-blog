import styled from '@emotion/styled'

const PostStyled = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: .5rem;
  background: ${({theme}) => theme.foregroundColor};
  border-right: 1px solid ${({theme}) => theme.infoColor};
  border-bottom: 1px solid ${({theme}) => theme.infoColor};
  box-shadow: ${({theme}) => theme.boxShadow};
  border-radius: 0 0 .4rem 0;
  display: grid;
  grid-template-rows: 3rem 1rem auto;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    border-bottom: .6rem solid transparent;
    border-left: 1.6rem solid ${({theme}) => theme.bodyColor};
    transition: .4s;
  }
  &:hover:before{
    width: 1.6rem;
    height: .6rem;
    border-top: 2px solid ${({theme}) => theme.infoColor};
    border-left: 2px solid ${({theme}) => theme.infoColor};
  }

  .title {
    max-width: 100%;
    display: block;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.3rem;
    color: ${({theme}) => theme.titleColor};
    position: relative;
    grid-row-start: 1;
    grid-row-end: 2;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-self: center;
    justify-self: start;
  }
  .info {
    font-size: .8rem;
    color: ${({theme}) => theme.infoColor};
    grid-row-start: 2;
    grid-row-end: 3;
    align-self: center;
    justify-self: flex-end;
  }
  .content {
    grid-row-start: 3;
    grid-row-end: 4;
    overflow: hidden;
    text-overflow: hidden;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 0 1rem;
  }
  .title:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({theme}) => theme.infoColor};
    width: 0;
    height: 1px;
    transition: .4s;
  }
  .title:hover:after {
    width: 100%;
  }
  @media screen and (max-width: 840px) {
    width: 100%;
    justify-content: flex-start;
    grid-template-columns: 100%;
    grid-template-rows: 3rem 1rem auto;
    .title {
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .info {
      grid-row-start: 2;
      grid-row-end: 3;
      justify-self: flex-end;
    }
    .content {
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }
`

export default PostStyled