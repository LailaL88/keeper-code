import React from 'react';

function Footer() {
    let date = new Date();
    let year = date.getFullYear();


    return <footer>
        <p>	&#169; {year}</p>
    </footer>
}

export default Footer;