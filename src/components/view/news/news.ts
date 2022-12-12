import './news.css';
import { Article } from './types';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const metaPhoto = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            const metaAuthor = newsClone.querySelector('.news__meta-author');
            const metaDate = newsClone.querySelector('.news__meta-date');
            const descriptionTitle = newsClone.querySelector('.news__description-title');
            const descriptionSource = newsClone.querySelector('.news__description-source');
            const descriptionContent = newsClone.querySelector('.news__description-content');

            if (metaPhoto) {
                metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            if (metaAuthor) {
                metaAuthor.textContent = item.author || item.source.name;
            }

            if (metaDate) {
                metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            if (descriptionTitle) {
                descriptionTitle.textContent = item.title;
            }

            if (descriptionSource) {
                descriptionSource.textContent = item.source.name;
            }

            if (descriptionContent) {
                descriptionContent.textContent = item.description;
            }

            newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
        }
        document.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
