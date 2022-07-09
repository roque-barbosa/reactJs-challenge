export async function fetchCommits(gitubLogin:string, repoName: string){
  const response = await fetch(`https://api.github.com/repos/${gitubLogin}/${repoName}/commits`,  {method: 'GET', headers:{}})
  const commits = await response.json()
  return commits
}