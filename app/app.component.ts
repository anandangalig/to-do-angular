//===============THE ROOT COMPONENT====================================
import { Component } from '@angular/core'; //pulls in extra functionality and definitions that our files need. Same as require for gulpfile and <script> for html.
// Component Annotation section:==================================
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <h3>One of my favorite bands is: {{ favoriteBand }}</h3>
    <p>If I had to choose a favorite painter it would be: {{ favoritePainter }}</p>
    <p>The number of slices of pie I would like is: {{ slicesOfPie }}</p>
    <h3>One of my favorite albums is: </h3>
    <p>{{ favoriteAlbum.title }}</p>
    <p>By {{ favoriteAlbum.artist }}</p>
    <p>Released in {{ favoriteAlbum.released }}</p>
    <h3>Here are my favorite pies!</h3>
    <div class="pie" *ngFor="let currentPie of favoritePies">
      <p>{{currentPie}}</p>
    </div>
    <h3>Here are my favorite albums!</h3>
    <div class="album" *ngFor="let album of albums">
      <p>{{album.title}}</p>
      <p>By {{album.artist}}</p>
      <p>Released in {{album.released}}</p>
    </div>
  </div>
  `
})
// Component Class Declarations section: includes the functionality of the component. When the HTML gets rendered, these Class exports provide the objects and the models.

export class AppComponent {
  favoriteBand: string = 'Ani DiFranco';
  favoritePainter: string = 'Van Gogh';
  slicesOfPie: number = 3;
  favoriteAlbum: Album = new Album("Disintegration", "The Cure", 1989);
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];
  albums: Album[] = [
      new Album("Pulse", "Pink Floyd", 1995),
      new Album("Funhouse", "The Stooges", 1970),
      new Album("Twilight of the Thunder God", "Amon Amarth", 2008),
      new Album("Dilate", "Ani DiFranco", 1996),
      new Album("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015),
      new Album("Axis Bold As Love", "The Jimi Hendrix Experience", 1967)
    ];
  }


export class Album {
  constructor (public title: string, public artist: string, public released: number) {  } //creating this Class and using it on line 25 to export the album in case we have many albums.

} // exports our components and makes it available for other components to use.
