interface AudioPlayer {
    audioVlume: number;
    songDuration:number;
    song:string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVlume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Song';

const {song:anotherSong, songDuration:duration} = audioPlayer;
const {author} = audioPlayer.details;

console.log('Song: ', anotherSong)
console.log('Duration: ', duration)
console.log('Author: ', author)

const dbz: string[] = ['Goku', 'Vegueta'];
//const trunks = dbz[3] || 'Personaje no encontrado';

const[p1, p2, trunks = 'Not found'] = dbz;

console.error('Personaje 3: ', trunks)