import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { MainComponent } from './core/components/main/main.component';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddPhraseComponent } from './core/components/add-phrase/add-phrase.component';
import { LearnPhraseComponent } from './core/components/learn-phrase/learn-phrase.component';
import { ListPhrasesComponent } from './core/components/list-phrases/list-phrases.component';
import {PhrasesService} from './core/services/phrases/phrases.service';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RemoveItemDialogComponent } from './core/components/remove-item-dialog/remove-item-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideNavComponent,
    AddPhraseComponent,
    LearnPhraseComponent,
    ListPhrasesComponent,
    RemoveItemDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        HttpClientModule,
        SharedModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDialogModule
    ],
  providers: [PhrasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
