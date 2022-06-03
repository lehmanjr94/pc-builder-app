export interface Gpu {

    // ID INFO
    id?: number;
    rank: number;
    brand: string;
    name: string;
    imageUrl: string;
    price: number;

    // SPECS
    length: number;
    width: number;
    height: number;
    weight: number;
    slots: number;
    speed: number;
    ram: number;
    power: number;
}
