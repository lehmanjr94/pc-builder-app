import { Game } from "./classes/game";

export const GAMES: Game[] = [
    {
        id: 1,
        title: "Star Citizen",
        description: "BDSSE",
        imageUrl: '../../assets/gameImages/starcitizen.png',
        genre: ["mmo", "rpg", "space", "sim", "fps"],
        rating: "M",
        developer: "Cloud Imperium Games",
        active: false
    },
    {
        id: 2,
        title: "Apex Legends",
        description: "Fast-paced battle royale with unique playable legends.",
        imageUrl: '../../assets/gameImages/apexlegends.png',
        genre: ["fps", "battle royale", "competitive"],
        rating: "M",
        developer: "Respawn",
        active: false
    },
    {
        id: 3,
        title: "World of Warcraft",
        description: "Fantasy adventure game with PVE and PVP elements.",
        imageUrl: '../../assets/gameImages/worldofwarcraft.png',
        genre: ["third-person", "mmo", "rpg"],
        rating: "T",
        developer: "Blizzard",
        active: false
    },
    {
        id: 4,
        title: "Valheim",
        description: "Viking fantasy adventure.",
        imageUrl: '../../assets/gameImages/valheim.png',
        genre: ["third-person", "rpg", "survival"],
        rating: "T",
        developer: "Iron Gate AB",
        active: false
    },
    {
        id: 5,
        title: "Fortnite",
        description: "Third-person battle royale with building.",
        imageUrl: '../../assets/gameImages/fortnite.png',
        genre: ["third-person", "shooter", "battle-royale", "building"],
        rating: "E",
        developer: "Epic Games",
        active: false
    }
]
