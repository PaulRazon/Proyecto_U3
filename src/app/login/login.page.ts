import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  public usuarios:User[]=[]
  public userForm:FormGroup;
  constructor(private user:UserService,private formBuilder:FormBuilder,private router:Router,private toastController:ToastController) { 
    this.userForm = this.formBuilder.group({
      username:[''],
      password:[''],
    });
    this.usuarios=user.getUsers();
  }
  public userLog(){
    const user = this.userForm.value;
    this.user.usuarioOnline = this.user.getUser(user.username);
    if(this.user.pos!==-1){
      this.router.navigate(['/tabs']);
    }
  }

  async mensajeOlvide(){
    const toast = await this.toastController.create({
      message: "Todavia no se programa:p",
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }
  
  


}
