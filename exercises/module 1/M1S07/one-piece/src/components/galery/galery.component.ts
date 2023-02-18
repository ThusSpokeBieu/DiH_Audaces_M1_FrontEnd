import { Component, Input } from '@angular/core';
import { Anime } from 'src/models/animes/anime.model';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})

export class GaleryComponent {

  @Input() public title: string = '';
  
  @Input() public animes: Anime[] = [];

  public currentPic = 0;

  public returnToFirst() {
    this.currentPic = this.first();
  }

  public goToLast() {
    this.currentPic = this.last();
  }

  public nextPicture(){
    if(this.currentPic < this.animes.length - 1){
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
    return this.animes.length -1
  }
}
