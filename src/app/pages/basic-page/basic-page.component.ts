import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocales, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
 
})
export default class BasicPageComponent {
  localService=inject(LocaleService);
  currentLocale=signal(inject(LOCALE_ID))
 nameLower=signal('silvia');
 nameupper=signal('SILVIA');
 fullname=signal('siLVia PatIno');

 customDate = signal(new Date());
 tickingDateEffect = effect((onCleanup)=>{
   const interval = setInterval(()=>{
    this.customDate.set(new Date());
    console.log('tick');
   },1000);
   onCleanup(()=>{
     clearInterval(interval);
   });
 })

 chnageLocale(locale:AvailableLocales){
  console.log('locale changed to',locale);
  this.localService.changeLocale(locale);
 }
}
