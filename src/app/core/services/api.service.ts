import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  title = 'Super TV Bingo';

  getShows() {
    return [
      {
        showTitle: 'Survivor',
        gameTitle: 'Got Nothing For Ya',
        centerSquare: 'This is Survivor',
        phrases: [
          'Come on in guys',
          'Want to see what you\'re playing for?',
          'I\'ll go tally the votes',
          'One in X chance...',
          'Tribal (Council)',
          'The tribe has spoken'
        ]
      },
      {
        showTitle: 'Toddlers and Tiaras',
        gameTitle: 'Blingo',
        centerSquare: 'This is Survivor',
        phrases: [
          'Total Package',
          'Ultimate (Grand Supreme)',
          'Grand Supreme',
          'Pull (a title)',
          'The Judges',
          'Practice (your routine)',
          'F-bomb'
        ]
      }
    ];
  }
}
