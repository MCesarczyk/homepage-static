import { ReactComponent as GithubThumbnail } from "./githubThumbnail.svg";
import { ReactComponent as LinkedinThumbnail } from "./linkedinThumbnail.svg";
import { ReactComponent as CodepenThumbnail } from "./codepenThumbnail.svg";

import {
    GITHUB_ADRESS,
    LINKEDIN_ADRESS,
    CODEPEN_ADRESS,
} from "./adresses";

export const thumbnails = [
    {
        id: 1,
        testId: "github-icon-test",
        icon: <GithubThumbnail />,
        url: GITHUB_ADRESS,
    },
    {
        id: 2,
        testId: "linkedin-icon-test",
        icon: <LinkedinThumbnail />,
        url: LINKEDIN_ADRESS,
    },
    {
        id: 3,
        testId: "codepen-icon-test",
        icon: <CodepenThumbnail />,
        url: CODEPEN_ADRESS,
    },
];