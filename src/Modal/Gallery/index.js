import "./style.css";
import { useGithubReposData } from "../../assets/useGithubReposData";

const Gallery = () => {
  const { status, repos } = useGithubReposData();
  const deployedRepos = repos.filter(({homepage}) => homepage?.length > 0);

  return (
    <>
      {repos && deployedRepos.map(repo => (
        <div key={repo.id} className="gallery__tile">
          <div className="tile__space">
            <span className="tile__label">
              Repository:
            </span>
            <a href={repo.html_url} target="_blank" rel="noreferrer noopener" className="tile__link">
              <h4>{repo.name}</h4>
            </a>
          </div>
          <p className="tile__space">
            <span className="tile__label">
              Demo:
            </span>
            <a href={repo.homepage} target="_blank" rel="noreferrer noopener" className="tile__link">
              {repo.homepage || "not deployed"}
            </a>
          </p>
          <p className="tile__paragraph">
            {repo.description}
          </p>
          <p className="tile__paragraph">
            <span className="tile__label">
              Main language:
            </span>
            {repo.language || "n/a"}
          </p>
          {repo.topics.length > 0 && <div className="tile__paragraph">
            <span className="tile__label">
              Topics:
            </span>
            <ul className="tile__list">
              {repo.topics.map(topic => (
                <li key={topic} className="tile__listItem">
                  {topic}
                </li>
              ))}
            </ul>
          </div>}
        </div>
      ))}
    </>
  )
};

export default Gallery;