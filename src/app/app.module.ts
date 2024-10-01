import {Router, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StudentlistComponent} from "./components/studentlist/studentlist.component";
import {EmployeelistComponent} from "./components/employeelist/employeelist.component";
import {FormsModule} from "@angular/forms";
import {FruitComponent} from "./components/fruit/fruit.component";
import {CourseComponent} from "./components/course/course.component";
import {BookComponent} from "./components/book/book.component";
import {CityComponent} from "./components/city/city.component";
import {MovieComponent} from "./components/movie/movie.component";
import {CarComponent} from "./components/car/car.component";
import {ProductComponent} from "./components/product/product.component";
import {SubjectComponent} from "./components/subject/subject.component";


const  routes: Routes = [
  { path: '', component: StudentlistComponent},
  { path: 'employeelist', component: EmployeelistComponent},
  { path: 'fruit', component: FruitComponent},
  { path: 'course', component: CourseComponent},
  { path: 'book', component: BookComponent},
  { path: 'city', component: CityComponent},
  { path: 'movie', component: MovieComponent},
  { path: 'car', component: CarComponent},
  { path: 'product', component: ProductComponent},
  { path: 'subject', component: SubjectComponent},





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
    FruitComponent,
    CourseComponent,
    BookComponent,
    CityComponent,
    MovieComponent,
    CarComponent,
    ProductComponent,
    SubjectComponent,


  ],
  providers: [

  ],

  bootstrap: [
    AppComponent,


  ],

})

export class AppModule { }

