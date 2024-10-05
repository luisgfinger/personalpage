import Contacts from '../assets/contact.svg'
import DarkContact from '../assets/dark-contact.svg'

interface ContactProps{
    darkMode: boolean;
}
const Contact: React.FC<ContactProps> = ({darkMode}) =>{
    return(
        <img src={darkMode?DarkContact:Contacts}></img>
    );
}

export default Contact;