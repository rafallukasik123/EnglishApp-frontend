import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PhrasesService} from '../../services/phrases/phrases.service';
import {GetPhraseRoot} from '../../models/responsePhraseInferences/get-phrase-root';
import {GetPhrase} from '../../models/responsePhraseInferences/get-phrase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {
  phraseData: GetPhrase;
  phraseForm = this.fb.group({
    polish: ['', Validators.required],
    english: ['', Validators.required],
    isApproved : [false]
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data, private phrasesService: PhrasesService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.getItem(this.data.id);

  }
  getItem(id: string){
    this.phrasesService.getPhraseById(id).subscribe(res => {
      this.phraseData = res.data;
      this.phraseForm = this.fb.group({
        polish: [this.phraseData.polish, Validators.required],
        english: [this.phraseData.english, Validators.required],
        isApproved : [this.phraseData.isApprove]
      });
    }, error => {
      console.log(error);
    });
  }
  get getControlsPhraseForm() { return this.phraseForm.controls; }


  getValuesFromForm(){
    let data = {
      english : this.getControlsPhraseForm.english.value,
      polish : this.getControlsPhraseForm.polish.value,
    };
    return data;
  }
}
