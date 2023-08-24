import { Component } from '@angular/core';
import {QrCodeService} from "../../services/qr-code.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-qr-generation',
  templateUrl: './qr-generation.component.html',
  styleUrls: ['./qr-generation.component.scss']
})
export class QrGenerationComponent {
  states = new Map([
    ['getState', 1],
    ['setState', 2],
  ]);

  activeState: number | undefined;
  userCode: string = '0';

  qrcodeSubscription$: Subscription;

  constructor(
    private qrCodeService: QrCodeService
  ) {
  }

  getQR() {
    if(this.activeState === this.states.get('getState'))  {
      this.qrcodeSubscription$ = this.qrCodeService.fetchGettingData(this.userCode).subscribe (
        result => {
          // Handle result
          console.log(result)
        },
        error => {

          console.log(error)

        },
        () => {
          // No errors, route to new page
        })
    } else {
      this.qrcodeSubscription$ = this.qrCodeService.fetchSendingData(this.userCode).subscribe (
        result => {
          // Handle result
          console.log(result)
        },
        error => {
          console.log(error)
        },
        () => {
          // No errors, route to new page
        }
      )
    }
  }

  setState1() {
    this.activeState = this.states.get('getState');
    console.log('this.activeState', this.activeState);
  }

  setState2() {
    this.activeState = this.states.get('setState');
    console.log('this.activeState', this.activeState);
  }

  changeCodeValue(e: any) {
    this.userCode = e.target.value;
    console.log(this.userCode);
  }

  ngOnDestroy(){
    this.qrcodeSubscription$.unsubscribe();
  }
}
