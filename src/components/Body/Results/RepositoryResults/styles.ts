import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #F4F1BB;
  border-top: 1px solid #5D576B;
  border-bottom: 1px solid #5D576B;

  :hover{
    cursor: pointer;
  }
`

export const IconWrapper = styled.div`
flex: 1;
`
export const TextWrapper = styled.span`
flex: 8;
font-size: large;
font-weight: 500;
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CommitsContainer = styled.div`
  width: 100%;
  max-height: 15rem;
  display: flex;
  border-left: 1px solid #5D576B;
  flex-direction: column;
  background-color: transparent;
  scroll-behavior: smooth;
  overflow: scroll;
  gap: 0.5rem;
`