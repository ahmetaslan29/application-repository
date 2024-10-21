import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './credit-calculator.component.html',
  styleUrls: ['./credit-calculator.component.css'],
})
export class CreditCalculatorComponent {
  krediTutari: number = 0;
  taksitler: number[] = [3, 6, 12, 24];
  taksitSayisi: number = 3;
  result: string = '';
  odemePlani: { taksitTutari: number; kalanGeriOdeme: number }[] = [];

  hesapla() {
    if (this.krediTutari <= 0) {
      this.result = 'Lütfen geçerli bir kredi tutarı giriniz.';
      this.odemePlani = [];
      return;
    }

    const taksitTutari = (this.krediTutari / this.taksitSayisi) * 1.29;
    let toplamGeriOdeme = taksitTutari * this.taksitSayisi;
    this.result = `Taksit Tutarı: ${taksitTutari.toFixed(2)} - Taksit Sayısı: ${
      this.taksitSayisi
    } - Toplam Geri Ödeme: ${toplamGeriOdeme.toFixed(2)}`;

    this.odemePlani = [];
    for (let i = 0; i < this.taksitSayisi; i++) {
      toplamGeriOdeme -= taksitTutari;
      const data = {
        taksitTutari: taksitTutari,
        kalanGeriOdeme: toplamGeriOdeme,
      };
      this.odemePlani.push(data);
    }
  }
}
