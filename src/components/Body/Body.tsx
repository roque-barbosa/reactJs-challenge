import React from "react"
import { fetchRepos } from "../../api/fetchRepos"
import { RepositoryCard } from "./Results/RepositoryResults/RepositoryCard"
import { UserCard } from "./Results/UserResults/UserCard"
import {  SearchInput } from "./SearchInput/SearchInput"
import { BodyWrapper, ErrorMessage, InputWrapper, ReposContainer } from "./styles"

interface IGithubUser {
  avatar_url: string
  login: string
  name: string
}

interface IGithubRepo {
  name: string
  description?: string
  html_url: string
}

const Body: React.FC = () => {

  const inputRef = React.useRef<HTMLInputElement>(null)

  const [githubUserState, setGithubUserState] = React.useState<null | IGithubUser>(null)
  const [githubUserReposState, setGithubUserReposState] = React.useState<any>(null)
  const [errors, setErrors] = React.useState(null);

  const handleClickRepos = async () => {
    const repos = await fetchRepos(githubUserState!.login)
    setGithubUserReposState(repos)
    console.log(githubUserReposState)
  }

  const handleClick = async () => {

    setErrors(null)
    setGithubUserReposState(null)

    const userName = inputRef.current!.value

    if (inputRef.current!.value != "") {

      fetch(`https://api.github.com/users/${userName}`,  {method: 'GET', headers:{}})
      .then(response => response.json())
		  .then(data => {
        if (data.message) {
          setErrors(data.message)
        }else{
          setGithubUserState(data)
          console.log(data)
        }
      })
		  .catch(error => setErrors(error.message));
    }
  }

  return(
    <BodyWrapper>

      <InputWrapper>
        <SearchInput ref={inputRef} handleClick={handleClick}/>
      </InputWrapper>

      {errors != null && <ErrorMessage>Sorry, something went wrong</ErrorMessage>}

      {githubUserState != null &&
        <UserCard
          profilePicUrl={githubUserState.avatar_url}
          login={githubUserState.login}
          name={githubUserState.name}
          fechRepos={handleClickRepos}
        />
      }

      {githubUserReposState != null &&
        <ReposContainer>
          {githubUserReposState.map((repo: IGithubRepo) => (
            <RepositoryCard
              key={repo.html_url}
              githubLogin={githubUserState!.login}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
            />
          ))}
        </ReposContainer>
      }

    </BodyWrapper>
  )
}
export {Body}