# SaludOsFrontEndReact
Api de Listados de precios Farmacéuticos (aqui se detalla el front end).


## **Links**
Aqui se lista la pagina de acceso a la web con domino en Azure(en construccion).
* https://polite-mud-07d81800f.2.azurestaticapps.net/auth/login

## **Especificación de la Arquitectura**
 Se crea una conexion estable entre la WebApi y Azure Static Web.

### **Especificaciones tecnicas**
El apartado Front-End (Web static) se carga automaticamente a AzureDevOps por medio del use de CI/CD

### **Seguridad**
Se utilizan los cookies propios de Azure que permiten evitar el ataque XSS y Ademas se utiliza Bearer Token JWT para evitar los Ataques CSRF.


### **Back-end Route**
El Back-end esta controlado por una Api .NETCORE y su aplicacion esta enlazada por medio de endpoints Con Peticiones HTTP.


## **Especificación de GIT**

* se incluyen por ramas independientes entre si las features.
* El título del pull request Contiene la historia relacionada.
* Los commits llevan la historia relacionada o una breve descripcion.
* El pull request solo contiene los cambios de las features incluidas o quitadas.

