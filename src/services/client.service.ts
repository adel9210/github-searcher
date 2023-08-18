import {httpInstance} from '../adapters';
import {Entity, Issue, Repo, User} from "../store/definations";

interface BaseResponse<T> {
    items: T,
    total_count: number
}

export const getList = async (searchTerm: string, searchEntity: Entity, page = 1) => {
    const response = await httpInstance.get<BaseResponse<Issue[] | User[] | Repo[]>>(`/search/${searchEntity}?q=${searchTerm}&per_page=20&page=${page}`);

    return {
        items: response.data.items,
        total_count: response.data.total_count
    };
};
