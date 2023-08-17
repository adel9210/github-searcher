import {Card} from '../Card/Card';
import {User} from "../../store/definations";

export const UserCard = (user: User) => {

    return (
        <Card>
            <h1>User Name: {user.login}</h1>
        </Card>
    );
};
