import React from "react";

const Navbar = () => {
    let imgUrl = "https://tse3.mm.bing.net/th?id=OIP.wx-kT9kg76eAnbesGwvkogHaCD&pid=Api"
    return (
        <nav>
            <img 
            src={imgUrl} 
            alt="LogoPokedex"
            className="navbar-image" 
            />
        </nav>
    );
};

export default Navbar;