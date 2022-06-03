export interface Game {

    // ID INFO
    id?: number;
    title: string;
    description: string;
    imageUrl?: string;
    genre: Array<string>;
    rating: string;
    developer: string;
    active: boolean;
}
