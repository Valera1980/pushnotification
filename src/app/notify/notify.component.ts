import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.check();
    this.registerServiceWorker();
    this.askPermission().then(()=>{
      console.log('perm ');
    })
  }
  check() {
    if (('serviceWorker' in navigator)) {
      // Service Worker isn't supported on this browser, disable or hide UI.
      console.log('... is service worker');
    }

    if (('PushManager' in window)) {
      // Push isn't supported on this browser, disable or hide UI.
      console.log('... is PushManager');
    }
  }
  registerServiceWorker() {
    return navigator.serviceWorker.register('/assets/service-worker.js')
    .then(function(registration) {
      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey:  'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
        
      };
  
      return registration.pushManager.subscribe(subscribeOptions);
    })
    .then(function(pushSubscription) {
      console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
      return pushSubscription;
    });
  }

   askPermission() {
    return new Promise((resolve, reject) =>{
      const permissionResult = Notification.requestPermission((result) => {
        resolve(result);
      });
  
      if (permissionResult) {
        permissionResult.then(resolve, reject);
      }
    })
    .then((permissionResult) => {
      if (permissionResult !== 'granted') {
        throw new Error('We weren\'t granted permission.');
      }
    });
  }

}
