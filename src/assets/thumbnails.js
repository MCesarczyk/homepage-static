import { ReactComponent as GithubThumbnail } from "./githubThumbnail.svg";
import { ReactComponent as LinkedinThumbnail } from "./linkedinThumbnail.svg";
import { ReactComponent as UpworkThumbnail } from "./upworkThumbnail.svg";

import {
    GITHUB_ADRESS,
    LINKEDIN_ADRESS,
    UPWORK_ADRESS,
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
        testId: "upwork-icon-test",
        icon: <UpworkThumbnail />,
        url: UPWORK_ADRESS,
    },
];