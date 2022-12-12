import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '94d75239dac2483192d785ebf3fee1a2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
