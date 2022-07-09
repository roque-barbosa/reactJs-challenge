import React from "react"
import { ProfilePic, UserCardWrapper, ProfileInfo, StyledImg, UserCardHeader, GithubLogin, GithubName, UserCardBottom, SeeRepositoriesButton } from "./style"
import {ArrowCircleRightIcon} from "@heroicons/react/solid"

interface ICardProps {
  profilePicUrl: string
  login: string
  name: string
  fechRepos: Function
}

export const UserCard: React.FC<ICardProps> = ({profilePicUrl, login, name, fechRepos}) => {

  console.log(profilePicUrl)
  return(
    <UserCardWrapper>
      <ProfilePic>
        <StyledImg src={profilePicUrl} alt="" />
      </ProfilePic>
      <ProfileInfo>
        <UserCardHeader>
          <GithubLogin>{login}</GithubLogin>
          <GithubName>{name}</GithubName>
        </UserCardHeader>
        <UserCardBottom>
        <SeeRepositoriesButton onClick={()=>{fechRepos()}}>
          Repositories
          <ArrowCircleRightIcon height={30} width={30}/>
        </SeeRepositoriesButton>
        </UserCardBottom>
      </ProfileInfo>
    </UserCardWrapper>
  )
}