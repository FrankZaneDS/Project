import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FilterComponent } from './main/filter/filter.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './search.pipe';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FilterComponent,
    LenovoComponent,
    SearchPipe,
    ShoppingCartComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([
      { path: 'lenovo/:id', component: LenovoComponent },
      { path: '', component: MainComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
