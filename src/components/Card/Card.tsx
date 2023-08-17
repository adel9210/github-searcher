import './index.scss';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const Card = (props: Props) => {
    return <div className="card">{props.children}</div>;
};
