import {Card} from '../Card/Card';
import {ListType, User} from "../../store/definations";

export const RepoCard = (props: ListType) => {
    const repo = props as Extract<ListType, User>

    return (
        <Card>
            <h1>Repo Card</h1>
        </Card>
    );
};
