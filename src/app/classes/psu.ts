export interface Psu {

    // ID INFO
    id?: number;
    rank: number;
    brand: string;
    name: string;
    imageUrl: string;
    price: number;

    // SPECS
    output: number;
    modular: string;
    formfactor: string;
}
