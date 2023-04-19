import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  booked: boolean;
  booked1: boolean;
  NoOfSeats: any;
  NoOfSeats1: any;
  ngonInit() {
    this.NoOfSeats = 0;
    this.booked = false;
    this.booked1 = false;
  }
  name = 'Customer';

  //seats: number[80];
  seats: number[] = new Array(80);
  BookTickets() {
    console.log('here');
    if (this.NoOfSeats > 7) {
      alert('you cannot book seats greater than 7');
      return;
    }
    this.booked = false;
    let seat = this.NoOfSeats;
    let i = 0,
      j = 0,
      aval = 0;
    for (i = 0; i < 11; i++) {
      for (j = 0; j < 7; j++) {
        if (this.seats[i * 7 + j] == 0 || this.seats[i * 7 + j] == undefined) {
          aval++;
        }
        if (seat <= aval) {
          this.booked = true;
          for (let k = 0; k < seat; k++) {
            this.seats[i * 7 + k] = 1;
          }
          break;
        }
      }
      if (this.booked == true) {
        break;
      }
    }
    if (seat <= 3 && this.booked == false) {
      for (let p = 77; p < 80; p++) {
        if (this.seats[p] == 0 || this.seats[p] == undefined) {
          aval++;
        }
        if (seat <= aval) {
          this.booked = true;
          for (let k = 77; k < 80; k++) {
            if (this.seats[k] == 0 || this.seats[k] == undefined)
              this.seats[k] = 1;
          }
          break;
        }
      }
    }
    if (this.booked == false) {
      this.booked1 = true;
    } else {
      this.booked1 = false;
    }
    console.log(this.seats);
    this.NoOfSeats1 = this.NoOfSeats;
  }
}
