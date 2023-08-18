import {Card} from '../Card/Card';
import {ListType, User} from "../../store/definations";

export const UserCard = (props: ListType) => {
    const user = props as Extract<ListType, User>

    return (
        <Card>
            <h1>User Name: {user.login}</h1>
        </Card>
    );
};
