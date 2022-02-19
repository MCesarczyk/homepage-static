import { useGithubData } from "../../assets/useGithubData";

const Gallery = () => {
  const { status, repos } = useGithubData();
  console.log(status);
  console.log(repos);

  return (
    <>
      {repos && repos.map(repo => (
        <p style={{ marginBottom: '2rem', border: '1px solid currentColor', padding: '1rem' }}>
          Repo id: {repo.id} <br />
          Name: {repo.name} <br />
          Description: {repo.description} <br />
          Demo: {repo.homepage} <br />
          Repo url: {repo.html_url} <br />
          Language: {repo.language} <br />
          Topics:
          <ul style={{display: 'flex', flexWrap: 'wrap'}}>
            {(repo.topics).map(topic => (
              <li style={{margin: '0.5rem', breakWord: 'none'}}>
                <div>{topic}</div>
                </li>
            ))}
          </ul>
        </p>
      ))}
    </>
  )
};

export default Gallery;