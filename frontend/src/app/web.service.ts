import { Http } from '@angular/http';
import { Injectable } from '@angular/core'
//import 'rxjs/add/operator/toPromise';
@Injectable()
export class WebService {
    constructor(private http: Http) {}
    getMessages(){
            return this.http.get('http://localhost:63145/api/messages').toPromise();
        }
    }
