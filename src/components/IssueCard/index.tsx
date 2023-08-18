import {Card} from '../Card/Card';
import {Issue, ListType} from "../../store/definations";
import './index.scss'
import {User} from "../User";

export const IssueCard = (props: ListType) => {
    const issue = props as Extract<ListType, Issue>

    return (
        <Card>
            <div className='issue'>
                <a href={issue?.html_url} target='_blank' className='issue__title'>{issue.title}</a>

                <User user={issue.user}/>
            </div>
        </Card>
    );
};
