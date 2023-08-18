import {Card} from '../Card/Card';
import {Issue, ListType} from "../../store/definations";

export const IssueCard = (props: ListType) => {
    const issue = props as Extract<ListType, Issue>

    return (
        <Card>
            <h3>{issue.title}</h3>
        </Card>
    );
};
