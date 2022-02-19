import { useEffect, useState } from "react";
import { fetchAPIData } from "./fetchAPIData";

export const useGithubData = () => {
  const [repos, setRepos] = useState({
    status: "loading",
    repos: null
  });

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
        console.log(error.message);
      }
    };

    setTimeout(getRepos, 2_000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return repos;
};