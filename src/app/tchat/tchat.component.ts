import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tchat } from '../model/tchat.model';
import { ServicesService } from '../service/services.service';
@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.scss']
})
export class TchatComponent implements OnInit , OnDestroy {

  constructor(public webSocketService: ServicesService) { }

  ngOnInit(): void {
    //this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
   // this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new Tchat(sendForm.value.user, sendForm.value.message);
   // this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }
}
