import {User as IUser} from "../../store/definations";
import './index.scss'

interface Props {
    user: IUser
}

export const User = (props: Props) => {
    const {user} = props

    return <div className='user'>
        <img className='user__avatar' src={user?.avatar_url} alt="Avatar"/>
        <div className='user__info'>
            <a target='_blank' href={user?.html_url} className='user__info__name'>{user?.login}</a>
        </div>
    </div>
}
