export async function fetchRepos(gitubLogin:string){
  const response = await fetch(`https://api.github.com/users/${gitubLogin}/repos`,  {method: 'GET', headers:{}})
  const repos = await response.json()
  return repos
}