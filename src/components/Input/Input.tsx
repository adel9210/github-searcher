import './index.scss';

interface Props {
    onChange: (value: string) => void;
}

export const Input = (props: Props) => {
    return (
        <input
            onChange={(event) => props.onChange(event.target.value)}
            className="form-control form-control--input"
            placeholder="Start typing to search"
        />
    );
};
