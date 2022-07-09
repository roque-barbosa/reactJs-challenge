import React from "react";
import { CardWrapper, IconWrapper, TextWrapper, ContentContainer, CommitsContainer } from "./styles";
import { FolderOpenIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";
import { fetchCommits } from "../../../../api/fetchCommits";
import { CommitCard } from "../CommitResults/CommitCard";

interface IRepoCard {
  name: string
  description?: string
  html_url: string
  githubLogin: string
}

interface ICommit {
  commit: {
    message:string
  }
  sha:string
}

export const RepositoryCard: React.FC<IRepoCard> = ({name, description, html_url, githubLogin}) => {

  const [hiddenCommitsState, setHiddenCommitsState] = React.useState(false)
  const [commitsState, setCommitsState] = React.useState<any>(null)

  async function changeHiddenState(){
    setHiddenCommitsState(!hiddenCommitsState)
    if (hiddenCommitsState) {
      setCommitsState(null)
    } else {
      const commits = await fetchCommits(githubLogin, name)
      setCommitsState(commits)
    }

  }

  return(
    <ContentContainer>
      <CardWrapper onClick={changeHiddenState}>
        <IconWrapper><FolderOpenIcon height={30} color="#5D576B"/></IconWrapper>
          <TextWrapper>{name}</TextWrapper>
        <IconWrapper><ArrowCircleRightIcon height={30} color="#5D576B"/></IconWrapper>
      </CardWrapper>
      {hiddenCommitsState && commitsState!= null &&
        <CommitsContainer>
          {commitsState.map((commit:ICommit) => (
            <CommitCard
              key={commit.sha}
              message={commit.commit.message}
            />
          ))}
        </CommitsContainer>
      }
    </ContentContainer>
  )
}
