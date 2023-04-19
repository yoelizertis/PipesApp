import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string ='yoel';
  public nameUpper: string ='YOEL';
  public nameFull: string ='yOeL FeRnAndEZ';
  
  public customDate: Date= new Date();
  
}
