import React from 'react';

function Navigation() {
    return (
        <header>
            <h2>
                <a href='/'>
                    <title>Zack Greenfield's Portfolio</title>
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>
                            About Me
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a href='#portfolio'>
                            Portfolio
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a href='#contact'>
                            Contact
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a href='#resume'>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;