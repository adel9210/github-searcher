import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Entity, ListType} from "./definations";

interface ListParams {
    searchTerm: string,
    searchEntity: Entity,
    page: number
}

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
    endpoints: (builder) => ({
        getList: builder.mutation<{ items: ListType[], total_count: number }, ListParams | undefined>({
            query: (q) => `/search/${q?.searchEntity}?q=${q?.searchTerm}&per_page=20&page=${q?.page}`,
        }),
    }),
})

export const {useGetListMutation} = appApi
