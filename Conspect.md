## Add Angular
    yarn add @angular/cli
## Create Angular app 
    ng new app-name --skip-install
    cd ./app-name
    npm i  //loooong
## Runn server
    ng serve
## To open
    http://localhost:4200
## Add tailwind
    yarn add -D tailwindcss postcss autoprefixer
    npx tailwindcss init
   ## tw.config
	content: ["./src/**/*.{html,ts}"],
   ## in style.scss
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

## Create component
    ng g component views/pages/compName
    ng g component views/shared/header
	
	ng g service services/servName
    
## TO START APP
    cd ./ang-start
    ng serve

## Router
<router-outlet></router-outlet>
routerLink="/register" 
[routerLinkActive]="['active']"

// Deploy
ng build --configuration production --base-href "https://4svEXE.github.io/okeyPostAngular/"

angular-cli-ghpages --dir=dist/okey-post
