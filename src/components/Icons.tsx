import Icon from '../assets/icons/icons group.svg'
import DarkIcon from '../assets/icons/icons-dark-group.svg'

interface IconsProps {
   darkMode: boolean;
}

const  Icons: React.FC<IconsProps> = ({darkMode}) =>{
    return(
        <img src={darkMode?DarkIcon:Icon}></img>
    );
}

export default Icons;
