import React from "react";


function Footer () {
    const links = [{name: 'github', link: 'https://github.com/yks2728'}, {name: 'linkedIn', link: 'https://www.linkedin.com/in/zack-greenfield-1052923b/'}, {name: 'twitter', link: 'https://twitter.com/baseballbuff'}]
    return(
        <footer>
            {links.map(link => (
                <a href={link.link}>
                    {link.name}
                </a>
            ))}
        </footer>
    );
}



export default Footer;