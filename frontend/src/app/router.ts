import { Routes } from "@angular/router";

export const routes:Routes = [
    {
        path:"",
        loadComponent:()=>import("./components/layouts/layouts.component").then(l=>l.LayoutsComponent),
        children:[
            {
                path:"login",
                loadComponent:
                ()=>import("./components/auth/components/login/login.component")
                .then(l=>l.LoginComponent)
            },
            {
                path:"register",
                loadComponent:
                ()=>import("./components/auth/components/register/register.component")
                .then(r=>r.RegisterComponent)
            },
            {
                path:"",
                loadComponent:
                ()=>import("./components/home/home.component")
                .then(h=>h.HomeComponent)
            },
            {
                path:"categories",
                loadComponent:()=>import("./components/categories/categories.component").then(c=>c.CategoriesComponent)
            }
        ]
    }
]