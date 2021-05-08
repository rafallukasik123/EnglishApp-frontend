import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {GetAllPhrasesRoot} from '../../models/responsePhraseInferences/get-all-phrases-root';
import {ReqAddPhrase} from '../../models/requestPhraseInterfaces/req-add-phrase';
import {ResAddPhrase} from '../../models/responsePhraseInferences/res-add-phrase';
import {GetPhraseRoot} from '../../models/responsePhraseInferences/get-phrase-root';

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

  addPhrase(english: string, polish: string) {
    return this.http.post<ResAddPhrase>(`${this.phrasesApiAdress}addPhrase`, {english, polish });
  }
  getPhrase() {
    return this.http.get<GetPhraseRoot>(`${this.phrasesApiAdress}getPhrase`);
  }
  passPhrase(id: string) {
    return this.http.post(`${this.phrasesApiAdress}passPhrase`, {id});
  }
  approvePhrase(id: string) {
    return this.http.post(`${this.phrasesApiAdress}approvePhrase`, {id});
  }
  removePhrase(id: string) {
    return this.http.post(`${this.phrasesApiAdress}removePhrase`, {id});
  }
  getPhraseById(id: string) {
    return this.http.post<GetPhraseRoot>(`${this.phrasesApiAdress}getPhraseById`, {id});
  }
}
