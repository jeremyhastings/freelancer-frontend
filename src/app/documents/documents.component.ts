import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: 'My First Document',
      description: 'This is dummy data until we connect to the API',
      file_url: 'http://google.com',
      updated_at: 'October 20th, 2021',
      image_url: 'https://i2.wp.com/sendtask.io/wp-content/uploads/2017/12/freelance-websites.jpg?w=2280&ssl=1'
    },
    {
      title: 'My Second Document',
      description: 'This is dummy data until we connect to the API',
      file_url: 'http://google.com',
      updated_at: 'October 20th, 2021',
      image_url: 'https://i2.wp.com/sendtask.io/wp-content/uploads/2017/12/freelance-websites.jpg?w=2280&ssl=1'
    },
    {
      title: 'My Last Document',
      description: 'This is dummy data until we connect to the API',
      file_url: 'http://google.com',
      updated_at: 'October 20th, 2021',
      image_url: 'https://i2.wp.com/sendtask.io/wp-content/uploads/2017/12/freelance-websites.jpg?w=2280&ssl=1'
    }
  ]
}
