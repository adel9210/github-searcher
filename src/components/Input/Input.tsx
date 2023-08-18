
interface Props {
    onChange: (value: string) => void;
    defaultValue?:string
}

export const Input = (props: Props) => {
    return (
        <input
            defaultValue={props.defaultValue}
            onChange={(event) => props.onChange(event.target.value)}
            className="form-control form-control--input"
            placeholder="Start typing to search"
        />
    );
};
