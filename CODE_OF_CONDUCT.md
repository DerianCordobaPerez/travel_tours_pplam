# Estructura general del codigo

### Nombre de las carpetas
* <div align="justify">
    Los nombres de las carpetas sera por omision en ingles, debido a la configuracion sobre el despligue de las aplicaciones, con esto seguiremos las normas impuestas por los servicios que usaremos para el montaje, creacion y despligue de la app.
</div><br>

### Nombre de las variables

* <div align="justify">
    Los nombres de las variables sera un uno de los puntos mas importantes que tendremos que respetar en todo momento del codigo, se esta buscando un codigo denominado declarativo, significando que con una ojeada que le demos al codigo sepamos de una manera casi automatica lo que se esta tratando de hacer en dicho fragmento de codigo.
</div>

* <div align="justify">
    No se aceptaran nombres por el caso (n o N significando "numero"), el ser declarativo en el codigo a la larga cuando el codigo de la aplicacion tienda a extenderse de una manera abrumadora.
</div><br>

### Nombre de los metodos
* <div align="justify">
    Del mismo modo que el punto anterior ("Nombre de las variables"), se busca metodos o funciones con nombres lo mas declarativo posibles, con el mismo objetivo.
</div><br>

### Ejemplos de los puntos anteriores
* <div align="justify">
    Suponiendo que tenemos una funcion que hace la funcion de agregar un usuario a nuestra base de datos un ejemplo un poco fuera de contexto seria que el metodo o funcion tuviera la siguiente forma:
</div>

* <div align="justify">
    function Agregar()..., este metodo parecia declarativo pero pasa a tender a ser un nombre demasiado generico, no especificamos lo que se esta buscando, entendemos que la funcionalidad es la de agregar, pero agregar el que? en un codigo con una estructura de carpetas y archivo extensos ese tipo de nombres solo haria retrasarnos, porque tendriamos que leer el codigo o el comentario dejado por el desarrollador para entender que agrega en si dicha funcion.
</div><br>

### Comentarios
* <div align="justify">
    Aunque los comentarios no lo usemos tanto, en este caso sera un caso donde comenzamos a sacarle mucho provecho, los nombres declarativos no ayudara mucho, pero de igual forma los comentarios redactando de manera especifica que realiza dicho trozo de codigo nos ayudara a entender muchos mejor el codigo escrito por la otra persona.
</div>

### Forma de comentar el codigo
* Funciones Simples: funciones que no retornan nada ni reciben ningun parametro
```javascript
/*
* @description sera para la redaccion de la funcionalidad que realiza dicha funcion
*/
```

* FUNCIONES CON PARAMETROS: funciones que retornan algun valor o que reciben algun parametro
```javascript
/*
* @description ...
* @params {Tipo del dato} nombre de la variable descripcion de la variable
* @returns {Tipo de retorno} descripcion del valor retornado
*/
```
* Mas informacion sobre la manera de documentar el codigo visitar la web oficial de [JSDoc](https://jsdoc.app/)