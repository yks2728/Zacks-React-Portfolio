import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/yks2728"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/zack-greenfield-1052923b/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/17252899/zack/"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;