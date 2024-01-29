# NESTJS REST API

Creamos el nuevo proyecto usando el comando de NESTJS, a traves de *yarn*.

## Modulos

Cada aplicación contiene al menos un modulo, el *modulo raiz* o *root module*.

Podemos crearlos manualmente, o también esta la opción de utilizar el CLI de NESTJS.

```bash
nest g module user
```
Creamos el modulo, en este caso lo llamamos *user*, la *g* hace referencia a *generate*.

Una vez creados los modulos, podremos observar que se importaron automaticamente al archivo *app.module.ts*.

## Controllers & Providers

**Controllers**

En *NestJs*, los *Controllers* es donde separamos la logica. *Ver documentacion oficial*.

Se puede crear manulamente:

```ts
import { Controller } from "@nestjs/common";

@Controller
class AuthController{}
```

**Providers**

*Ver documentación oficial*

```ts
import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {}
```

Una vez que hayamos creado los archivos manualmente, tenemos que agregarlos a su respectivo módulo, en este caso *auth.mdoule.ts*.

```ts
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
   controllers: [AuthController],
   providers: [AuthService]

})
```

Cuando hacemos una petición, esta se envia al *controller*, este llama a una función de *services* y devuelve el resultado al *controller*, un *login* de usuario por ejemplo.

```ts
import { AuthService } from "./auth.service";

@Controller({})
export class AuthController{
    constructor(private authService: AuthService){
        this.authService.test()
    }
}
```
Aca **instanciamos** la clase *AuthService* en el controlador, y de esta forma podemos utilizar alguna función que alli se encuentre, por ejemplo, creamos la función *test()*.

En este caso vamos a crear dos funciones dentro de *auth.services.ts*:

```ts
export class AuthService {
    login() {

    }

    signup() {
        
    }
}
```

Luego de esto procedemos a los *ENDPOINTS* para ambas funciones, eso lo hacemos en el *controller* con la ayuda de los *decorators*, y asi obtendremos las rutas.
```ts
 @Post('signup')
    signup(){}
 @Post('signin')
    signin(){}
```

Tanto para el *signup* como para el *signin* esperamos **POST REQUESTS**. Para el caso del *Auth Controller* lo mas recomendado es poner una RUTA PREFIJO, que en este caso será *auth*.

```ts
@Controller('auth')
```
Entonces, cuando hagamos un POST, las rutas serían: */auth/signup* y */auth/signin*.


## Arranque en modo desarrollo

Con siguiente comando podemos iniciar la aplicación en modo desarrollo, el puerto por defecto es el *3000*, pero podemos modificarlo por alguno q nos sea conveniente.

```bash
yarn start:dev
```
Podemos encontrar otros comando en el *package.json*, seccion *scripts*. Con el *start:dev*, obtenemos el *--watch* por algun cambio que hagamos en nuestra aplicación. Esto nos ayuda a verificar que todo funcione correctamente mientras seguimos desarrollando la apliación.

