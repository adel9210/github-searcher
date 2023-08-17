import {Input} from '../Input/Input';
import {Select} from '../Select/Select';
import GitHubLogo from '../../assets/github-logo.png';

import './index.scss';
import {debounce} from '../../helpers/debounce';
import {Entity} from "../../store/definations";

interface Props {
    onInputChange: (value: string) => void;
    onSelectChange: (value: Entity) => void;
}

export const Search = (props: Props) => {
    const {onInputChange, onSelectChange} = props;

    const handleChange = debounce((value: string) => {
        onInputChange(value);
    }, 1000);

    return (
        <section className="search-bar">
            <div className="search-bar__header">
                <img src={GitHubLogo} alt="Logo"/>
                <div>
                    <h2>Github Searcher</h2>
                    <p>Search users or repositories below</p>
                </div>
            </div>

            <div className="search-bar__search">
                <div className="search-bar__search__input">
                    <Input onChange={handleChange}/>
                </div>
                <div className="search-bar__search__select">
                    <Select onChange={onSelectChange}/>
                </div>
            </div>
        </section>
    );
};
