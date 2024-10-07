import GitIcon from '../assets/icons/github-smallIcon.svg'
import DarkGitIcon from '../assets/icons/git-dark-icon.svg'

interface GitIconProps{
    darkMode: boolean;
}

const  GitSmallIcon: React.FC<GitIconProps> = ({darkMode}) =>{
    return(
        <img src={darkMode?DarkGitIcon:GitIcon}></img>
    );
}

export default GitSmallIcon;