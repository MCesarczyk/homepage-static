import { useEffect, useState } from "react";
import { fetchAPIData } from "./fetchAPIData";

export const useGithubReposData = () => {
  const [repos, setRepos] = useState({
    status: "loading",
    repos: []
  });

  const DEMO_DELAY = 2_500;

  const apiURL = 'https://api.github.com/users/MCesarczyk/repos?sort="updated"';

  useEffect(() => {
    const getRepos = async () => {
      try {
        const repos = await fetchAPIData(apiURL);

        if (!repos) {
          throw new Error("No repo data");
        }

        setRepos({
          status: "success",
          repos: repos
        });

      } catch (error) {
        setRepos({ status: "error" });
        console.error(error.message);
      }
    };

    setTimeout(getRepos, DEMO_DELAY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return repos;
};