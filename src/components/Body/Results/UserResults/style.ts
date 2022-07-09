import styled from "styled-components"

export const UserCardWrapper = styled.div`
  display: flex;
  max-width: 90%;
  min-width: 85%;
  margin-top: 3rem;
  
  @media(max-width: 400px) {
    height: 7rem;
  }
  @media(min-width: 400px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30rem;
  }
  display: flex;
  border-radius: 4px;
`

export const ProfilePic = styled.div`
flex: 1;
/* border: 2px solid #5D576B; */
max-height: 400px;
max-width: 400px;
border-radius: 4px;
margin-right: 4px;
`

export const ProfileInfo = styled.div`
flex: 2;
width: 100%;
max-width: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const StyledImg = styled.img`
height: 100%;
width: 100%;
border-radius: 4px;
`

export const UserCardHeader = styled.div`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* @media(max-width: 400px) {
    flex-direction: column;
  }
  @media (min-width: 400px) {
    flex-direction: row;
  } */
  background-color: #F4F1BB;
  margin-bottom: 4px;
`

export const UserCardBottom = styled.div`
  align-items: center;
  justify-content: center;
  
  align-content: center;
  width: 100%;
  flex: 2;
  display: flex;
  background-color: #5D576B;
`

export const GithubLogin = styled.span`
  flex: 9;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`

export const GithubName = styled.span`
  flex: 10;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 2px;
`

export const SeeRepositoriesButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: transparent;
  border: 0;
  margin: 0;
  width: 100%;
  font-size: 1.5rem;
  color: #E6EBE0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  :hover{
    cursor: pointer;
  }
`
