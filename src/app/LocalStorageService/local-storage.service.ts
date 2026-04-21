import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

  setLocal(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocal(key: string):null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  setSession(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSession<T>(key: string): T | null {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}