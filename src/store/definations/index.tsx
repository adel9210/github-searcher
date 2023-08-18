export interface Issue {
  id: number;
  url: string;
  repository_url: string;
  title: string;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

export interface Repo {
  id: number;
  full_name: string;
  description: string;
  url: string;
  score: number;
  owner: User;
}

export type ListType = User | Issue | Repo


export enum Entity {
    USERS = 'users',
    REPO = 'repositories',
    ISSUES = 'issues'
}
