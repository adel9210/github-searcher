import {Search} from '../../components/Search';
import {List} from '../../components/List';
import {UserCard} from '../../components/UserCard';
import {useEffect, useState} from 'react';
import {Entity, Issue, Repo, User} from '../../store/definations';
import {getIssuesList, getReposList, getUsersList} from "../../services/client.service";
import {IssueCard} from "../../components/IssueCard";
import {RepoCard} from "../../components/RepoCard";

import './index.scss';

const SearchPage = () => {
    const [searchEntity, setSearchEntity] = useState<Entity>(Entity.USERS);
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState<User[]>();
    const [repos, setRepos] = useState<Repo[]>();
    const [issues, setIssues] = useState<Issue[]>();

    useEffect(() => {
        fetchLists()
    }, [searchEntity, searchTerm]);

    const getUsers = () => {
        (async () => {
            const response = await getUsersList(searchTerm);
            setUsers(response);
        })();
    };

    const getIssues = () => {
        (async () => {
            const response = await getIssuesList(searchTerm);
            setIssues(response);
        })();
    };

    const getRepos = () => {
        (async () => {
            const response = await getReposList(searchTerm);
            setRepos(response);
        })();
    };

    const fetchLists = () => {
        if (!searchEntity || !searchTerm) {
            return;
        }

        switch (searchEntity) {
            case Entity.USERS:
                getUsers();
                break;
            case Entity.ISSUES:
                getIssues();
                break
            case Entity.REPO:
                getRepos()
        }
    }

    return (
        <section className={`search-page ${searchTerm ? 'has-search-value' : ''}`}>
            <Search onInputChange={(value) => setSearchTerm(value)}
                    onSelectChange={(entity) => setSearchEntity(entity)}/>

            <List<User> items={users} renderItem={UserCard}/>
            <List<Issue> items={issues} renderItem={IssueCard}/>
            <List<Repo> items={repos} renderItem={RepoCard}/>

        </section>
    );
};

export default SearchPage;
