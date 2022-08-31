import './header.css';
import {Component} from "react"

class Header extends Component {
    
    render(){ 
    return (
        <div className="header">
            <div className='head'>
            <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/c/c6/Dora_the_Explorer_RU.svg/1200px-Dora_the_Explorer_RU.svg.png'></img>
            <h1>InfoDora</h1>
            </div>
        </div>
    );
}

}
export default Header;