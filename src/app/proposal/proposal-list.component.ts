import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(
    1, 'Abc Company', 'http://jeremyhastings.co.uk', 'Ruby on Rails', 150, 120, 15, 'jeremy.hastings@mac.com'
  )
  proposalTwo: Proposal = new Proposal(
    2, 'Abc Company', 'http://jeremyhastings.co.uk', 'Ruby on Rails and Angular', 250, 200, 25,
    'jeremy.hastings@mac.com'
  )
  proposalThree: Proposal = new Proposal(
    3, 'Abc Company', 'http://jeremyhastings.co.uk', 'Ruby', 300, 240, 30, 'jeremy.hastings@mac.com'
  )

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}
