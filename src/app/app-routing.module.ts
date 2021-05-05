import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPhraseComponent} from './core/components/add-phrase/add-phrase.component';
import {LearnPhraseComponent} from './core/components/learn-phrase/learn-phrase.component';
import {ListPhrasesComponent} from './core/components/list-phrases/list-phrases.component';

const routes: Routes = [
  { path: 'addPhrase', component: AddPhraseComponent },
  { path: 'learnPhrase', component: LearnPhraseComponent },
  { path: 'listPhrases', component: ListPhrasesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
