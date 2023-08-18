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
    const [items, setItems] = useState<ListType[]>([]);
    const {searchTerm = '', searchEntity} = useSelector((state: RootState) => state.app);
    const [totalCounts, setTotalCounts] = useState<number>(1)
    const [hasMoreData, setHasMoreData] = useState<boolean>(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchData()
    }, [searchEntity, searchTerm]);

    const fetchData = () => {
        if (items.length >= totalCounts) {
            setHasMoreData(false)
            return false
        }

        if (!searchTerm) {
            setItems([])
        }

        (async () => {
            if (searchEntity && searchTerm) {
                const response = await getList(searchTerm, searchEntity);
                setItems(response.items);
                setTotalCounts(response.total_count)
                setPage(1)
            }
        })();
    };

    const nextPage = () => {
        (async () => {
            if (searchEntity && searchTerm) {
                const updatedPage = page + 1
                const response = await getList(searchTerm, searchEntity, updatedPage);
                setItems([...items, ...response.items]);
                setPage(updatedPage)
            }
        })()
    }

    return (
        <section className={`search-page ${searchTerm ? 'has-search-value' : ''}`}>
            <Search/>

            <InfiniteScroll
                dataLength={items.length}
                next={nextPage}
                hasMore={hasMoreData}
                refreshFunction={() => null}
                loader={<h4>Loading...</h4>}
                scrollThreshold={1}
            >
                {searchEntity === Entity.USERS && <List<ListType> items={items} renderItem={UserCard}/>}
                {searchEntity === Entity.ISSUES && <List<ListType> items={items} renderItem={IssueCard}/>}
                {searchEntity === Entity.REPO && <List<ListType> items={items} renderItem={RepoCard}/>}
            </InfiniteScroll>

        </section>
    );
};

export default SearchPage;
