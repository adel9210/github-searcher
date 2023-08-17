import {Entity} from "../../store/definations";

interface Props {
    onChange: (value: Entity) => void;
}

export const Select = (props: Props) => {

    const handleChange = (value: string) => {
        const entity = value as Entity
        props.onChange(entity)
    }


    return (
        <select
            className="form-control form-control--select"
            onChange={(event) => handleChange(event.target.value)}>
            <option value="users">Users</option>
            <option value="repositories">Repo</option>
            <option value="issues">Issue</option>
        </select>
    );
};

