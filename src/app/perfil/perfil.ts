import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../LocalStorageService/local-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css'], // 🔥 corrige também (é styleUrls)
})
export class Perfil implements OnInit {

  email: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit() {
    const emailRota = this.route.snapshot.paramMap.get('email');
    const emailSalvo = this.storage.getSession('email');

    if (emailRota && emailSalvo && emailRota === emailSalvo) {
      this.email = emailRota;
    } else {
      this.router.navigate(['/login']);
    }
  } 

  sair() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}