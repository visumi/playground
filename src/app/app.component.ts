import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TestService } from './services/test.service';
import { Card } from './models/test.model';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CurrencyPipe, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  document = new FormControl('', Validators.required);
  cardsData: Card[] = [];
  loading = false;
  documentValid = true;

  constructor(private service: TestService) {}

  handleGetCards(): void {
    if (
      this.document.value &&
      this.checkIfDocumentIsValid(this.document.value)
    ) {
      this.documentValid = true;
      this.loading = true;
      this.service.getUserCardByDocument(this.document.value).subscribe({
        next: (res) => {
          this.loading = false;
          if (res?.data?.cartoes.length > 0) {
            this.cardsData = this.sortCards(res.data.cartoes);
          } else {
            this.cardsData = [];
          }
        },
        error: (err) => {
          console.log(err);
          this.cardsData = [];
          this.loading = false;
        },
      });
    } else {
      this.documentValid = false;
    }
  }

  sortCards(cards: Card[]): Card[] {
    return cards.sort((a, b) => {
      if (a.tipo === 'ambos' && b.tipo === 'credito') {
        return -1;
      } else if (a.tipo === 'credito' && b.tipo === 'debito') {
        return -1;
      }
      return 0;
    });
  }

  checkIfDocumentIsValid(document: string): boolean {
    let sum;
    let rest;
    sum = 0;
    if (document == '00000000000') return false;

    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(document.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(document.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(document.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(document.substring(10, 11))) return false;
    return true;
  }
}
