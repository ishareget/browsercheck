import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url: any = {
    ishare: 'http://www.ishareget.org/#/home',
    download: 'https://www.google.com.tw/chrome/'
  }

  constructor(
    private deviceService: Ng2DeviceService
  ) { }

  ngOnInit() {
    Cookie.get('checkBrowser') ? window.location.href = this.url.ishare : this.checkBrowser();
  }


  public checkBrowser() {
    setTimeout(() => {
      switch (this.deviceService.getDeviceInfo().browser) {
        case 'chrome':
          Cookie.set('checkBrowser', 'checkOK', 0.040972255);
          window.location.href = this.url.ishare;
          break;
        case 'firefox':
        case 'ms-edge':
          alert('建議使用Google Chrome瀏覽器進行瀏覽'); {
            Cookie.set('checkBrowser', 'checkOK', 0.040972255);
            window.location.href = this.url.ishare;
          }
          break;
        case 'ie':
          window.location.href = this.url.download;
          break;
        default:
          alert('建議使用Google Chrome瀏覽器進行瀏覽');
          break;
      }
    }, 5000);
  }
}
