import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsResults, SourceResults } from '../view/types';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) =>
                this.controller.getNews(e, (data?: NewsResults) => this.view.drawNews(data))
            );
        this.controller.getSources((data?: SourceResults) => this.view.drawSources(data));
    }
}

export default App;
