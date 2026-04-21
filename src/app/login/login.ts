import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../LocalStorageService/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './login.css',
})
export class Login {

  usuario: any = {};

  constructor(
    private storage: StorageService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {

       console.log('CLICOU');
      this.storage.setSession('email', this.usuario.email);

     
      this.router.navigate(['/perfil', this.usuario.email]);

    } else {
      console.log("Formulário inválido");
    }
  }
}