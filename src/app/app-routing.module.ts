import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentsComponent } from './documents/documents.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'documents', component: DocumentsComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'proposals', component: ProposalListComponent },
  { path: 'proposals/new', component: ProposalNewComponent },
  { path: 'proposal/:id', component: ProposalShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

