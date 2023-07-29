"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album() {
    const music_albums = [
        {
            artist: "Atif Aslam",
            title: `Tera Hone Laga Hoon`,
        },
        {
            artist: "Taylor Swift",
            title: "1989",
            tracks: 13,
        },
        {
            artist: "Ed Sheeran",
            title: "Divide",
            tracks: 16,
        },
    ];
    return music_albums;
}
let a = make_album();
console.log(a);
