import styled from 'styled-components'

export const PDFContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PDF = styled.object`
`

export const ResumeDownload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ResumeDownloadLink = styled.a`
  margin: 1rem;
  display: block;

  background-color: #73aa77;
  border: 1px solid #73aa77;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 25px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  text-decoration: none;

  &:hover,
  &:focus {
    color: green;
  }
  &:active {
    color: darkgreen;
  }
`
