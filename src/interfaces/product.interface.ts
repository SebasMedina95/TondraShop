export interface IProduct {
    // id?: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    colors: ValidColors[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: ValidGender;
}

export type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';
export type ValidGender = 'men'|'women'|'kid'|'unisex';

export interface ValidColors {
    name: string;
    code: string;
}