import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: any = [];
  // wikipedia will be added as a 'private' property automatically to the instance of App component
  // wikipedia will be the type of: WikipediaService
  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string){
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search
    })
  }
}
