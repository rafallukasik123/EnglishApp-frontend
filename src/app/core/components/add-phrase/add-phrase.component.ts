import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PhrasesService} from '../../services/phrases/phrases.service';

@Component({
  selector: 'app-add-phrase',
  templateUrl: './add-phrase.component.html',
  styleUrls: ['./add-phrase.component.scss']
})
export class AddPhraseComponent implements OnInit {
  loading = false;
  submitted = false;
  error = '';
  succes = '';
  phraseForm = this.fb.group({
    polish: ['', Validators.required],
    english: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private phrasesService: PhrasesService) { }

  get getControlsPhraseForm() { return this.phraseForm.controls; }

  ngOnInit(): void {
  }
  submitForm = () => {
    this.submitted = true;
    this.error = '';
    this.succes = '';
    // stop here if form is invalid
    if (this.phraseForm.invalid) {
      return;
    }
    this.loading = true;
    this.phrasesService.addPhrase(this.getControlsPhraseForm.english.value, this.getControlsPhraseForm.polish.value).subscribe(res => {
      console.log(res);
      this.loading = false;
      this.succes = res.data;
      this.clearForm();
    }, err => {
      this.loading = false;
      this.error = err.error.error;
      console.log(err);
      });
  }

   clearForm(){
    this.phraseForm.reset();
    this.phraseForm = this.fb.group({
       polish: ['', Validators.required],
       english: ['', Validators.required],
     });
  }
}
