import React from 'react';

const Header = (props) => {
    return (<header className='flex justify-center px-4 py-2 bg-blue-100'>
        <h2>{props.text}</h2>
    </header>);
}

export default Header;