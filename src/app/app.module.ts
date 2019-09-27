import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconsModule } from './icons/icons.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NtkmeButtonModule } from '@ctrl/ngx-github-buttons';
import { AngularSplitModule } from 'angular-split';
import { MarkdownModule } from 'ngx-markdown';
import { MarkupComponent } from './components/markup/markup.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AddEmojiComponent } from './components/add-emoji/add-emoji.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MarkupComponent,
    AddEmojiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    ContenteditableModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    QRCodeModule,
    MatDialogModule,
    IconsModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    PickerModule,
    NtkmeButtonModule,
    MarkdownModule.forRoot(),
    KeyboardShortcutsModule.forRoot(),
    AngularSplitModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEmojiComponent]
})
export class AppModule { }
