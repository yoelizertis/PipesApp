import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select

public name : string ='Yoel';
public gender: 'male'| 'female' = 'male';

public invitationMap = {
  'male': 'invitarlo',
  'female': 'invitarla'
}

changeClient():void {
  this.name= 'Melissa';
  this.gender='female';
}

//i18nPlral
public clients:string[] = ['Maria','Pedro','Yoel','Cristiano','Eduardo','Melissa','Natalia'];

public clientsMap = {
  '=0': 'no tenemos ninguún cliente esperando',
  '=1': 'tenemos 1 cliente esperando',
  'other': 'tenemos # clientes esperando'
}
deleteClient():void {
  this.clients.shift();
}

//KeyValue Pipe
public person = {
  name: 'Yoel',
  age:21,
  address:'Ottawa Canada'

}

//Async Pipe
public myObservableTimer= interval(2000).pipe(
  tap( value => console.log('tap:', value) )
);

public promiseValue : Promise<string>= new Promise (( resolve,reject)=>{
  setTimeout(()=>{
    resolve('Tenemops data en la promesa');
  },3500);
})


}
