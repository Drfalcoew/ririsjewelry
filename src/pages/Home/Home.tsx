import HeroPanel from '../../components/HeroPanel';
import './Home.css';


const Home = () => {

    return (
        <div className="home-container">
            <div className="home-title-container">
                <HeroPanel />
            </div>
        </div>
    );
}

export default Home;