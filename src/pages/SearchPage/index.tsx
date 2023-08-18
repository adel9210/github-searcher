import {Search} from '../../components/Search';
import {List} from '../../components/List';
import {UserCard} from '../../components/UserCard';
import {useEffect, useState} from 'react';
import {Entity, ListType} from '../../store/definations';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {RepoCard} from "../../components/RepoCard";
import {IssueCard} from "../../components/IssueCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {useGetListMutation} from "../../store/api";
import './index.scss';
import {Loading} from "../../components/Loading";

const SearchPage = () => {
    const [items, setItems] = useState<ListType[]>([]);
    const {searchTerm = '', searchEntity = Entity.USERS} = useSelector((state: RootState) => state.app);
    const [totalCounts, setTotalCounts] = useState<number>(1)
    const [hasMoreData, setHasMoreData] = useState<boolean>(true)
    const [page, setPage] = useState(1)
    const [fetchList, {data, isLoading}] = useGetListMutation()

    const fetchData = () => {
        if (items.length >= totalCounts) {
            setHasMoreData(false)
            return;
        }

        if (!searchTerm) {
            setItems([]);
            return;
        }

        fetchList({searchTerm, searchEntity, page})
    };

    useEffect(() => {
        fetchData()
    }, [searchEntity, searchTerm, page]);

    useEffect(() => {
        const itemsData = items.concat(data?.items || [])
        setItems(itemsData)
        setTotalCounts(data?.total_count || 1)

    }, [data?.items])

    useEffect(() => {
        setItems([])
    }, [searchEntity])

    const nextPage = () => {
        setPage((oldValue) => oldValue + 1)
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

            {isLoading && <Loading/>}
        </section>
    );
};

export default SearchPage;
