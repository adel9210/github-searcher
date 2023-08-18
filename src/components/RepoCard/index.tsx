import {Card} from '../Card/Card';
import {ListType, Repo} from "../../store/definations";
import './index.scss'
import {Chip} from "../Chip";
import {User} from "../User";

export const RepoCard = (props: ListType) => {
    const repo = props as Extract<ListType, Repo>

    return (
        <Card>
            <div className="repo">
                <a href={repo.html_url} target='_blank' className='repo__name'>{repo.full_name}</a>
                <p className='repo__description'>{repo.description}</p>
                <User user={repo.owner}/>
                <ul className='repo__topics'>
                    {repo.topics?.map(topic => <Chip text={topic} key={topic}/>)}
                </ul>
            </div>
        </Card>
    );
};
