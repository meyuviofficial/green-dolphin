import { BsGithub, BsLinkedin, BsMedium, BsTwitterX } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const social_media_links = [
  {
    name: "GitHub",
    url: "https://github.com/meyuviofficial/",
    icon: <BsGithub className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/meyuviofficial/",
    icon: <BsLinkedin className="w-6 h-6" />,
  },
  {
    name: "Medium",
    url: "https://medium.com/@meyuviofficial",
    icon: <BsMedium className="w-6 h-6" />,
  },
  {
    name: "Twitter",
    url: "https://x.com/meyuviofficial",
    icon: <BsTwitterX className="w-6 h-6" />,
  },
  {
    name: "Website",
    url: "https://dev.to/yuvaraj_selvarajan",
    icon: <CgWebsite className="w-6 h-6" />,
  },
];

export default social_media_links;
