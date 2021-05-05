import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPhraseComponent} from './core/components/add-phrase/add-phrase.component';
import {LearnPhraseComponent} from './core/components/learn-phrase/learn-phrase.component';
import {ListPhrasesComponent} from './core/components/list-phrases/list-phrases.component';

const routes: Routes = [
  { path: 'addPhrase', component: AddPhraseComponent },
  { path: 'learnPhrase', component: LearnPhraseComponent },
  { path: 'listPhrases', component: ListPhrasesComponent },
  { path: '',   redirectTo: '/learnPhrase', pathMatch: 'full' },
  { path: '**', component: LearnPhraseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
