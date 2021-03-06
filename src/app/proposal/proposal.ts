export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours: number = 0,
    public hourly_rate: number = 0,
    public weeks_to_complete?: number,
    public client_email?: string
  ) {
  }
}

// Sample Record:
// 1, 'Abc Company', 'http://jeremyhastings.co.uk', 'Ruby on Rails', 150, 120, 15, 'jeremy.hastings@mac.com'
