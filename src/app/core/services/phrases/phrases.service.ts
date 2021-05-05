import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {GetAllPhrasesRoot} from '../../models/responsePhraseInferences/get-all-phrases-root';

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {
  phrasesApiAdress = environment.backendEndpoint;
  constructor(private http: HttpClient) {

  }
  getAllPhrases() {
    return this.http.get<GetAllPhrasesRoot>(`${this.phrasesApiAdress}getAllPhrases`);
  }
}
