import { Component, signal } from '@angular/core';
import { CardComponent} from '../../components/card/card.component'
import { 
  I18nPluralPipe, 
  I18nSelectPipe,
  JsonPipe,
  SlicePipe,
  UpperCasePipe,
  KeyValuePipe,
  TitleCasePipe,
  AsyncPipe} from '@angular/common';
import { interval, map, tap } from 'rxjs';
const client1 ={
  name:'Silvia',
  gender:'Femenino',
  age: 30,
  address:'Calle falsa 123'
}
const client2 ={
  name:'Carlos',
  gender:'Masculino',
  age: 25,
  address:'Calle real 456'
}
@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe, 
    TitleCasePipe,
  AsyncPipe],
  templateUrl: './uncommon-page.component.html'
})
export default class UncommonPageComponent {

  //i18n select
  client= signal(client1);

  invitationMap={
    'Femenino': 'Estimada',
    'Masculino': 'Estimado'
  }
  changeClient(){
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }
    this.client.set(client1);

  }

  // i18n Plural 

  clientsMap=signal({
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'
  })
  clients = signal([
    'Maria',
    'Pedro',
    'Juan',
    'Ana',
    'Luis',
    'Andrea',
    'Camilo',
    'Sofia',
    'Francisco',
    'Valentina',
    'Diego'
  ])

deleteClient() {
  // esto borra la primera persona de la lista de clientes
this.clients.update(prev=>prev.slice(1));
}

//key value pipe 
profile={
  name:'Fernando',
  age:36,
  address:'Ottawa, Canada'
}

// async pipe
promiseValue:Promise<string> = new Promise((resolve,reject)=>{
  setTimeout(()=>{
   // reject('tenemos un error en la data');
    resolve('Tenemos data en la promesa')
    console.log('Promesa finalizada')
  },3500)
});

// el pipe permite conectar diferentes operadoes a esta 
// el observable solo funciona si alguien se suscribe 
myObservableTimer= interval(2000)
.pipe(
  map((map)=>map+1),
  tap((value)=>console.log('tap:',value)))



}
