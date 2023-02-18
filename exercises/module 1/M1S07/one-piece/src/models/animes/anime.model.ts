interface IAnime {
  name: string;
  img: string;
  link?: string;
}

export class Anime implements IAnime {
  name: string;
  img: string;
  link?: string;
  
  constructor(anime: IAnime){
    this.name = anime.name;
    this.img = anime.img;
    this.link = anime.link;
  }
}