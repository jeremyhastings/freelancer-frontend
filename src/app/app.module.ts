import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    HomepageComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
