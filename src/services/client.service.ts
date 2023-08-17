import {httpInstance} from '../adapters';
import {Issue, Repo, User} from "../store/definations";

interface BaseResponse<T> {
    items: T
}

export const getUsersList = async (searchTerm: string) => {
    const response = await httpInstance.get<BaseResponse<User[]>>(`/search/users?q=${searchTerm}`);

    return response.data.items;
};

export const getReposList = async (searchTerm: string) => {
    const response = await httpInstance.get<BaseResponse<Repo[]>>(`/search/repositories?q=${searchTerm}`);

    return response.data.items;
};

export const getIssuesList = async (searchTerm: string) => {
    const response = await httpInstance.get<BaseResponse<Issue[]>>(`/search/issues?q=${searchTerm}`);

    return response.data.items;
};
