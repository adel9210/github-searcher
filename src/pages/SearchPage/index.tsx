import {Search} from '../../components/Search';
import {List} from '../../components/List';
import {UserCard} from '../../components/UserCard';
import {useEffect, useState} from 'react';
import {Entity, ListType} from '../../store/definations';
import {getList} from "../../services/client.service";
import {useSelector} from "react-redux";

import './index.scss';
import {RootState} from "../../store";
import {RepoCard} from "../../components/RepoCard";
import {IssueCard} from "../../components/IssueCard";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchPage = () => {
    const [items, setItems] = useState<ListType[]>();
    const {searchTerm = '', searchEntity} = useSelector((state: RootState) => state.app);
    const [totalCounts, setTotalCounts] = useState<number>(0)
    const [hasMoreData, setHasMoreData] = useState<boolean>(true)


    useEffect(() => {
        fetchData()
    }, [searchEntity, searchTerm]);


    const fetchData = () => {
        if (items && items.length >= totalCounts) {
            setHasMoreData(false)
            return false
        }

        (async () => {
            if (searchEntity && searchTerm) {
                const response = await getList(searchTerm, searchEntity);
                setItems(response.items);
                setTotalCounts(response.total_count)
            }
        })();
    };


    return (
        <section className={`search-page ${searchTerm ? 'has-search-value' : ''}`}>
            <Search/>

            <InfiniteScroll
                dataLength={items?.length || 0}
                next={fetchData}
                hasMore={hasMoreData}
                refreshFunction={() => null}
                loader={<h4>Loading...</h4>}
            >
                {searchEntity === Entity.USERS && <List<ListType> items={items} renderItem={UserCard}/>}
                {searchEntity === Entity.ISSUES && <List<ListType> items={items} renderItem={IssueCard}/>}
                {searchEntity === Entity.REPO && <List<ListType> items={items} renderItem={RepoCard}/>}
            </InfiniteScroll>

        </section>
    );
};

export default SearchPage;
