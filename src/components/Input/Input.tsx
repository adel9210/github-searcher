interface Props {
    onChange: (value: string) => void;
    defaultValue?: string
}

export const Input = (props: Props) => {
    const {onChange, defaultValue} = props

    return (
        <input
            defaultValue={defaultValue}
            onChange={(event) => onChange(event.target.value)}
            className="form-control form-control--input"
            placeholder="Start typing to search"
        />
    );
};
