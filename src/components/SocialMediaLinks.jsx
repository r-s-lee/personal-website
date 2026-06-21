import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SocialMediaLinks({ size }) {
  const styles = {
    smallIcon: { fontSize: 20 },
    mediumIcon: { fontSize: 30 },
    largeIcon: { fontSize: 40 },
  };

  const iconStyle =
    size === "small"
      ? styles.smallIcon
      : size === "medium"
        ? styles.mediumIcon
        : styles.largeIcon;
  return (
    <div className="flex flex-row justify-start space-x-3 my-3">
      <a href="mailto:r4chelsle@gmail.com" target="_blank">
        <EmailIcon style={iconStyle} />
      </a>
      <a href="https://github.com/r-s-lee" target="_blank">
        <GitHubIcon style={iconStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/rachel-lee-5293a71b2/"
        target="_blank"
      >
        <LinkedInIcon style={iconStyle} />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
