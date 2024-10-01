import {Router, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StudentlistComponent} from "./components/studentlist/studentlist.component";
import {EmployeelistComponent} from "./components/employeelist/employeelist.component";
import {FormsModule} from "@angular/forms";


const  routes: Routes = [
  { path: '', component: StudentlistComponent},
  { path: 'employeelist', component: EmployeelistComponent},
]
@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    StudentlistComponent,
    EmployeelistComponent,
  ],
  providers: [

  ],

  bootstrap: [
    AppComponent,


  ],

})

export class AppModule { }

