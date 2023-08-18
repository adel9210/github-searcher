import {Card} from '../Card/Card';
import {ListType, User as IUser} from "../../store/definations";
import {User} from "../User";

export const UserCard = (props: ListType) => {
    const user = props as Extract<ListType, IUser>

    return (
        <Card>
            <User user={user}/>
        </Card>
    );
};
