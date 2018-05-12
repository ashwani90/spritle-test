import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  validateLogin(email: string, password: string) {
    const body = new FormData();
    body.append('email', email);
    body.append('pass', password);
    return this.http.post('http://localhost/codeigniter/spritle_test/index.php/Welcome/login_api', body);
  }
  registerNewUser(email: string, pass: string, name: string) {
    const body = new FormData();
    body.append('email', email);
    body.append('pass', pass);
    body.append('username', name);
    return this.http.post('http://localhost/codeigniter/spritle_test/index.php/Welcome/register', body);
  }
}
