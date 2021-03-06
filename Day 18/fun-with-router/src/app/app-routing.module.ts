import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAComponent } from "./components/page-a/page-a.component";
import { PageBComponent } from "./components/page-b/page-b.component";
import { PageCComponent } from "./components/page-c/page-c.component";

const routes: Routes = [
    { path: 'a', component: PageAComponent}, 
    { path: 'b', component: PageBComponent}, 
    { path: 'c', component: PageCComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {

}