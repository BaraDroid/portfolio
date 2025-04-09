import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navdots',
  imports: [CommonModule],
  templateUrl: './navdots.component.html',
  styleUrl: './navdots.component.scss'
})
export class NavdotsComponent {
  @Input()whiteColor: boolean = false;
  isWhitePlaceholder: boolean = false; //prozatimni placeholder
  sectionIndex: number = -1;
  dotSrc: string = '';
  whiteDotSrc: string = './assets/sidebar/dot_white.svg';
  blackDotSrc:string = './assets/sidebar/dot_black.svg'
  dotAboutAndContactSrc: string = './assets/sidebar/dot_about+contact.svg';
  dotOrangePlainSrc: string = './assets/sidebar/dot_orange_plain.svg';

  allIds = [
    { name: 'above-the-folder', id: 'portfolio' },
    { name: 'about-me', id: 'about' },
    { name: 'competences', id: 'competences' },
    { name: 'work', id: 'work' },
    { name: 'reviews', id: 'references' },
    { name: 'contact', id: 'contact' }
  ];

  //funguje, ale jen na milisekundu pri refresnuti. Proste musim ty flags implementovat.
  // ngOnInit() {
  //   this.dotSrc = this.whiteDotSrc;

    //tohle musim napsat primo do html:
    //a klidne tam jeste muzu udelat if sectionflag ==id.id, tak id s tim stejnym indexem zmeni na:orangePlain atd.
    //nebo hardcode:
    // if(inWork && isWhite) {id[$index].dotSrc = this.dotOrangePlainSrc}
  //}

}
