import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryTableComponent } from './entry-table/entry-table.component';
import { HeaderComponent } from './common/header/header.component';
import { DisplayHeaderComponent } from './component/display/display-header.component';
import { SlotsComponent } from './component/slots/slots.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './custom/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EntryTableComponent,
    HeaderComponent,
    DisplayHeaderComponent,
    SlotsComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
