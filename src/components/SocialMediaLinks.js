import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SocialMediaLinks() {
  const styles = {
    largeIcon: { fontSize: 40 },
  };
  return (
    <div className="flex flex-row justify-start space-x-3 my-3">
      <a href="mailto:r4chelsle@gmail.com" target="_blank">
        <EmailIcon style={styles.largeIcon} />
      </a>
      <a href="https://github.com/r-s-lee" target="_blank">
        <GitHubIcon style={styles.largeIcon} />
      </a>
      <a
        href="https://www.linkedin.com/in/rachel-lee-5293a71b2/"
        target="_blank"
      >
        <LinkedInIcon style={styles.largeIcon} />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
