import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  
  listadoUsuarios=[];
  constructor(private api: ApirestService) { }

  ngOnInit() {
   
  }

  listar(){
    this.api.getUsers();
    this.listadoUsuarios= this.api.listadoApi;
    console.log(this.listadoUsuarios)
  }
enviar(){
  
}

}
