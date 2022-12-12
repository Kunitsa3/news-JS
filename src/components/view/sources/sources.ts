import { Source } from '../types';
import './sources.css';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as HTMLElement;
            const itemName = sourceClone.querySelector('.source__item-name');

            if (itemName) {
                itemName.textContent = item.name;
            }

            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
