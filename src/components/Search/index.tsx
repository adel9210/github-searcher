import {Input} from '../Input/Input';
import {Select} from '../Select/Select';
import GitHubLogo from '../../assets/github-logo.png';

import './index.scss';
import {debounce} from '../../helpers/debounce';
import {Entity} from "../../store/definations";
import {useDispatch, useSelector} from "react-redux";
import {setSearchEntity, setSearchTerm} from "../../store/app.slice";
import {RootState} from "../../store";


export const Search = () => {
    const dispatch = useDispatch();
    const {searchTerm, searchEntity} = useSelector((state: RootState) => state.app);

    const handleSearchTermChange = debounce((value: string) => {
        if (value.length > 2) {
            dispatch(setSearchTerm(value));
        } else {
            dispatch(setSearchTerm(''));
        }
    }, 1000);

    const handleEntityChange = (value: Entity) => {
        dispatch(setSearchEntity(value));
    }

    return (
        <section className="search-bar">
            <div className="search-bar__header">
                <img src={GitHubLogo} alt="Logo"/>
                <div>
                    <h2>Github Searcher</h2>
                    <p className='search-bar__header__slogan'>Search users or repositories below</p>
                </div>
            </div>

            <div className="search-bar__search">
                <div className="search-bar__search__input">
                    <Input defaultValue={searchTerm} onChange={handleSearchTermChange}/>
                </div>
                <div className="search-bar__search__select">
                    <Select defaultSelect={searchEntity} onChange={handleEntityChange}/>
                </div>
            </div>
        </section>
    );
};
