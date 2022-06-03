export interface Case {

    // ID INFO
    id?: number;
    rank: number;
    brand: string;
    name: string;
    imageUrl: string;
    price: number;

    // SPECS
    formfactor: string;
    volume: number;
    length: number;
    width: number;
    height: number;
    weight: number;
}
