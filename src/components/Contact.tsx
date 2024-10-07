import Contacts from '../assets/icons/contact.svg'
import DarkContact from '../assets/icons/dark-contact.svg'

interface ContactProps{
    darkMode: boolean;
}
const Contact: React.FC<ContactProps> = ({darkMode}) =>{
    return(
        <img src={darkMode?DarkContact:Contacts}></img>
    );
}

export default Contact;