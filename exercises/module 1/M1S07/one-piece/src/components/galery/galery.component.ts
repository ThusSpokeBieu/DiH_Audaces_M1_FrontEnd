import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {

  public title: string = 'Galeria de imagens';
  public anime1 = {
    name: 'Hunter x Hunter',
    img: 'https://i.imgur.com/8xwe9nx.png'
  }

  public anime2 = {
    name: 'Jojo Bizarre Adventure',
    img: 'http://img1.ak.crunchyroll.com/i/spire4/7b3f67f0faeadcd03f4f97d4680287481481854940_full.jpg'
  }
  public pictures = [this.anime1, this.anime2];

  public currentPic = 0;

  public returnToFirst() {
    this.currentPic = this.first();
  }

  public goToLast() {
    this.currentPic = this.last();
  }

  public nextPicture(){
    if(this.currentPic < this.pictures.length - 1){
      return ++this.currentPic
    }

    return this.currentPic;
  }

  public previousPicture(){
    if(this.currentPic > 0){
      return --this.currentPic;
    }

    return this.currentPic;
  }

  public first(){
    return 0;
  }

  public last(){
    return this.pictures.length -1
  }
}
