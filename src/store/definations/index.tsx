export interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: User
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface Repo {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  owner: User;
  topics: string[]
}

export type ListType = User | Issue | Repo


export enum Entity {
    USERS = 'users',
    REPO = 'repositories',
    ISSUES = 'issues'
}
