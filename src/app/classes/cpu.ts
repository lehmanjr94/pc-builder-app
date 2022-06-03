export interface Cpu {

    // ID INFO
    id?: number;
    rank: number;
    brand: string;
    name: string;
    imageUrl: string;
    price: number;

    // SPECS
    cores: number;
    baseSpeed: number;
    boostSpeed: number;
    power: number;
    connection: string;
}
