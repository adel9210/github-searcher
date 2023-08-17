import GithubImage from '../../assets/github-logo.png'
import './index.scss'


export const Loading = () => {
    return <div className="loader">
        <div className="loader__item">
            <img className="loader__item__logo" src={GithubImage} alt="Logo"/>
            <div/>
        </div>
    </div>
}
