import styled from 'styled-components'
import { Button } from '@mui/material'
import back from 'assets/images/back.jpg'

export const Container = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  ::before {
    content: '';
    background-image: url(${() => back});
    background-repeat: no-repeat;
    background-position: center;
    background-origin: content-box;
    background-size: 100% 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -2;
    height: 400px;
    width: 100%;
  }
  ::after {
    content: '';
    background-color: black;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

export const Filters = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: var(--main);
  padding: 10px;
  border-radius: 10px;
  gap: 15px;
`

export const Title = styled.div`
  color: var(--color);
  font-size: 30px;
  font-weight: bolder;
`

export const MyButton = styled(Button)`
  background-color: var(--color) !important;
  height: 40px;
  padding: 0 20px !important;
`
