import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  email:string='';
  password:String='';

  emailR:String='';
  passwordR1:String='';
  passwordR2:String='';
  usernameR:string='';

   isvalide:boolean=false;
  constructor(private router: Router,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
   
  }
  cambiar_login()
  {
 console.log(this.email +" Ah hAMMA"+ this.password);
 this.isvalide=true;
 if(!this.isvalide)
 this._flashMessagesService.show(' Invalid try again ', { cssClass: 'alert-danger', timeout: 4000 });
else
this._flashMessagesService.show('Welcome Logged in as '+this.email , { cssClass: 'alert-success', timeout: 4000 });

  }

  cambiar_sign_up()
  {
    console.log(this.emailR +" "+this.usernameR +" "+this.passwordR1+" "+this.passwordR2)
    if(!this.isvalide)
    this._flashMessagesService.show(' Invalid try again ', { cssClass: 'alert-danger', timeout: 4000 });
   else
   this._flashMessagesService.show('Welcome try to login now '+this.usernameR , { cssClass: 'alert-success', timeout: 4000 });
   
  }
}
