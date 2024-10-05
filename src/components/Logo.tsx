import Logotype from '../assets/logo-group.svg'
import DarkLogo from '../assets/logo-dark-group.svg'

interface LogoProps{
    darkMode: boolean;
}


const Logo: React.FC<LogoProps> = ({darkMode}) =>{
    return(
        <img src={darkMode?DarkLogo:Logotype}></img>
    );
}

export default Logo;