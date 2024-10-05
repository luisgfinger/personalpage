import Button from '../components/Button';
import GitSmallIcon from './GitSmallIcon';
import "../styles/projects.css"

interface ProjectProps {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    languages: string[];
    acessUrl: string;
    gitUrl: string;
    darkMode: boolean;
}

const Projects: React.FC<ProjectProps> = ({ id, image, title, subtitle, languages, acessUrl, gitUrl, darkMode}) => {
    return (
        <div className="project flex-column">
            <div className="project-inside flex-column">
                <span className="desktop-group">
                    <img src={image} />
                </span>
                <div className="titles">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <div className="languages flex-column">
                    {languages.map((language, index) => (
                        <p key={index}>{language}</p>
                    ))}
                </div>
                <span className="acess-button">
                    <Button text="Acess Now" href={acessUrl} />
                </span>
                <div className="gitCall flex-row">
                    <GitSmallIcon darkMode={darkMode}/>
                    <a href={gitUrl}>GitHub Repo</a>
                </div>
            </div>
        </div>


    );

}

export default Projects;