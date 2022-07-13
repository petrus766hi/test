import { get, post } from "./services";

export const list = () => {
    return get('list', false);
};

export const login = (data) => {
    return post('login', data, false);
};

export const dashboard = (data) => {
    return post('dashboard', data, false);
};


