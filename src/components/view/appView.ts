import News from './news/news';
import Sources from './sources/sources';
import { NewsResults, SourceResults } from './types';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: NewsResults) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: SourceResults) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
