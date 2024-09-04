import {RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { CourseslistComponent } from './courseslist/courseslist.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    {path:'', redirectTo:'/app', pathMatch:'full'},
    {path:'app', component:AppComponent},
    {path:'courses',component:CourseslistComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }