export interface Options {
    apiKey: string;
}

export interface ResponseOptions {
    sources?: string;
}

export interface ResponseArgs {
    endpoint: string;
    options?: ResponseOptions;
}
