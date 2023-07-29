
type Album = {
    artist: string;
    title: string;
    tracks?:number;
}

 function make_album(): Album[] {
    const music_albums: Album[] = [
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
      ]
      return music_albums
    }

    let a= make_album();
    console.log(a);




 