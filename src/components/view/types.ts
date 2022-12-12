import { Article } from './news/types';

export interface NewsResults {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface SourceResults {
    status: string;
    sources: Source[];
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

