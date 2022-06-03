export interface Monitor {

    // ID INFO
    id?: number;
    rank: number;
    brand: string;
    name: string;
    imageUrl: string;
    price: number;

    // SPECS
    ratio: string;
    panel: string;
    connections: Array<string>
    refresh: number;
    size: number;
    weight: number;
    curved: boolean;
    vesa: boolean;
    hdr: boolean;
}
