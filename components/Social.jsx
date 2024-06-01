import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ugyentring",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ugyen-tshering-21430527a/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UC1vsaq6G0AKfWKD2JSrjfUg",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/ut_yuji/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
