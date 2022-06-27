import { get } from "./services";

export const Category = () => {
    return get('category', false);
};

export const Product = () => {
    return get('products', false);
};
  