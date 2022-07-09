import styled from "styled-components";

export const InputWrapper = styled.div`
display: flex;
max-width: 100%;
min-width: 60%;
height: 3rem;
`

export const Button = styled.button`
background-color: #5D576B;
border: 0;
margin: 0;
width: 100%;
height: 100%;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
:hover{
    cursor: pointer;
  }
`
export const Input = styled.input`
  width: 22rem;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 0px solid #5D576B;
  padding-left: 1rem;
  font-size: 14px;
  :focus{
  border-color: blue;
}
`

export const IconContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`