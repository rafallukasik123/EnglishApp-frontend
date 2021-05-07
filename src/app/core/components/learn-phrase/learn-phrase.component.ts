import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {PhrasesService} from '../../services/phrases/phrases.service';
import {GetPhraseRoot} from '../../models/responsePhraseInferences/get-phrase-root';
import {GetPhrase} from '../../models/responsePhraseInferences/get-phrase';

@Component({
  selector: 'app-learn-phrase',
  templateUrl: './learn-phrase.component.html',
  styleUrls: ['./learn-phrase.component.scss']
})
export class LearnPhraseComponent implements OnInit {
  fontStyleControl = new FormControl('polish');
  phrase: GetPhrase;
  error = '';
  isChecked = false;
  constructor(private phrasesService: PhrasesService) { }

  ngOnInit(): void {
    this.getPhrase();
  }
  getPhrase(){
    this.phrasesService.getPhrase().subscribe(res => {
      this.phrase = res.data;
      console.log(res);
      return res;
    }, error => {
      this.error = error.error;
    });
  }
  getSelectedPhraseName(){
    if (this.phrase != undefined){
      if (this.fontStyleControl.value.polish){
        return this.phrase.polish;
      }else{
        return this.phrase.english;
      }
    }
  }
  checkPhrase(){
    this.isChecked = true;
  }
}
