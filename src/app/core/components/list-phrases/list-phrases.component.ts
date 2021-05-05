import { Component, OnInit } from '@angular/core';
import {PhrasesService} from '../../services/phrases/phrases.service';
import {GetAllPhrasesRoot} from '../../models/responsePhraseInferences/get-all-phrases-root';
import {Subscription} from 'rxjs';
import {GetAllPhrases} from '../../models/responsePhraseInferences/get-all-phrases';

@Component({
  selector: 'app-list-phrases',
  templateUrl: './list-phrases.component.html',
  styleUrls: ['./list-phrases.component.scss']
})
export class ListPhrasesComponent implements OnInit {
  listOfPhrases: GetAllPhrases[];
  constructor(private phrasesService: PhrasesService) { }

  ngOnInit(): void {
    this.getAllPhrases();
  }
  getAllPhrases() {
   this.phrasesService.getAllPhrases().subscribe(res => {
      this.listOfPhrases = res.data;
      console.log(res);
      return res;
    });
  }

}
