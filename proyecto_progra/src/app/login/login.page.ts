import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLinkDelegate, ToastController } from '@ionic/angular';
import { ApirestService } from '../apirest.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  datos: any
  user = "";
  datoUsuario: any;
  listadoposts:any[];

  constructor(
    private toastController: ToastController,
    private activatedRouter : ActivatedRoute, 
              private api : ApirestService,
              private router: Router) { }

ngOnInit() {    
 // this.leer()
}
async leer(dato:HTMLInputElement, password:HTMLInputElement)
{ 
  //Validacion Bret
  if(dato.value == "Bret" && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    toast.present();

  let id ="1"; 
  await this.api.getUser(id)
  this.datos =  this.api.datos;
  localStorage.setItem(dato.value,JSON.stringify(this.datos))
  console.log(this.datos)



  await this.api.getPost(id)
  this.datos =  this.api.datos;
  console.log(this.datos)

  this.router.navigateByUrl('listadoposts');
  




    }

    //Validacion Antonette 
 else if(dato.value == "Antonette" && password.value == "1234"){
  const toast = await this.toastController.create({
    message: 'Usuario encontrado' ,
    duration: 2000,
    color: "success",
  });
  toast.present();

    let id ="2"; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }

    //Validacion Validacion Samantha
  else if(dato.value == "Samantha" && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    toast.present();
    let id ="3"; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }

    //Karianne
  else if(dato.value == "Karianne" && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    toast.present();
    let id ="4"; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }

    //Validacion Kamren
  else if(dato.value == "Kamren" && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    toast.present();
    let id ="5"; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }

    //Validacion Leopoldo_Corkery
  else if(dato.value == "Leopoldo_Corkery" && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    toast.present();
    let id ="6"; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }

    //Validacion Elwyn.Skiles
  else if(dato.value == "Elwyn.Skiles" && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    toast.present();
    let id ="7"; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }

    //Validacion Maxime_Nienow
  else if(dato.value == "Maxime_Nienow" && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    toast.present();
    let id ="8"; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }

    //Validacion Delphine
  else if(dato.value == "Delphine" && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    toast.present();
    let id ="9"; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }

    //Validacion Moriah.Stanton
  else if(dato.value == "Moriah.Stanton" && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    toast.present();
    let id ="10"; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }

    //Validacion usuario sin dato
  else if(dato.value.trim().length == 0){
    const toast = await this.toastController.create({
      message: 'No especifico Nombre de Usuario' ,
      duration: 2000,
      color: "danger",
    });
    toast.present();
    dato.value=""


  }
      
    //Validacion contraseña sin dato
  else if(password.value.trim().length == 0){
    const toast = await this.toastController.create({
      message: 'No especifico Password' ,
      duration: 2000,
      color: "danger",
    });
    toast.present();
    password.value=""
  }
  
    //Validacion contraseña incorrecta
  else if(password.value != "1234"){
    const toast = await this.toastController.create({
      message: 'Password incorrecta' ,
      duration: 2000,
      color: "danger",
    });
    toast.present();
    password.value=""

  }

    //Validacion usuario exista
  else if(dato.value != "Moriah.Stanton" && dato.value != "Delphine" && dato.value != "Maxime_Nienow" && dato.value != "Elwyn.Skiles" && dato.value != "Leopoldo_Corkery" && dato.value != "Kamren" && dato.value != "Karianne" && dato.value != "Samantha" && dato.value != "Antonette" && dato.value != "Bret"){
    const toast = await this.toastController.create({
      message: 'Usuario NO encontrado' ,
      duration: 2000,
      color: "danger",
    });
    toast.present();

    }

}

}

/*
  if(dato.value.trim().length != 0 && password.value == "1234"){
    const toast = await this.toastController.create({
      message: 'Usuario encontrado' ,
      duration: 2000,
      color: "success",
    });
    
    toast.present();
    let id =dato.value; 
    await this.api.getUser(id)
    this.datos =  this.api.datos;
    localStorage.setItem(dato.value,JSON.stringify(this.datos))
    console.log(this.datos)
    }


  else if(dato.value.trim().length == 0){
    const toast = await this.toastController.create({
      message: 'No especifico id' ,
      duration: 2000,
      color: "danger",
    });
    toast.present();
    dato.value=""


  }
    else if(password.value.trim().length == 0){
      const toast = await this.toastController.create({
        message: 'No especifico Password' ,
        duration: 2000,
        color: "danger",
      });
      toast.present();
      password.value=""
  }


  else if(password.value != "1234"){
    const toast = await this.toastController.create({
      message: 'Password incorrecta' ,
      duration: 2000,
      color: "danger",
    });
    toast.present();
    password.value=""

  }
}*/