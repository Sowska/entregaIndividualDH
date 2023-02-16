Desarrollo Web - MercadoLiebre

Requerimientos del proyecto:

Estamos trabajando mobile first.

● Tamaños Tipográficos
    
    Cuerpos de texto: 12px
    Titulares (Basado en tu última visita/Ofertas): 24px
    Precios: 18px
    Descuentos: 16px
    Descripciones: 16px
    

● Implementar los íconos de este sitio:
https://fontawesome.com/icons?d=gallery&m=free

● Trabajar con Media Queries para cada resolucion dada(mobile, tablet, desktop)
    
● El contenido de todos los artículos está centrado.
● Los íconos tienen un tamaño de 2em y un margen inferior de separación de 10
píxeles.

para cada uno de los productos que se muestran en el sitio:
● Debemos centrar la sección main y que ocupe un 90% del ancho de la pantalla.
● Entre cada artículo hay una separación de 10 píxeles.
● Nos piden que manejemos el logo del envío, el precio, el porcentaje de descuento,
y la descripción del artículo como elementos de una caja dentro de la caja general del artículo.
● Nos piden que la misma tenga un borde superior de 1 píxel, línea sólida y color #ebebeb.
● Debe tener separado el contenido de sus bordes en 15 píxeles en cada uno de sus lados.

Importante:
● Solo en el caso mobile la descripción del artículo no se visualizará.
● Agregar box-shadow.
```

 Para la sección del Header debemos:
● Solo para la versión mobile, ocultar el site y el login navbar.
● Para las versiones desktop y tablet mostrar el site y login navbar, pero ocultar la imagen del menú hamburguesa.

 Para cada uno de los artículos debemos:
○ Lograr que el precio y el descuento de los artículos estén en el mismo
renglón, donde el precio ocupa el 30% y el descuento el 70% del total del
renglón.

●   aplicando Flexbox, solo se vea un artículo si estamos en mobile, dos artículos para tablet y cuatro artículos para la versión desktop

●   Formulario de registro:
●  El formulario para ingresar un nuevo usuario a nuestro sistema se mostrará cuando seleccionemos la opción "crea tu cuenta"

Este deberá contar con la siguiente información:

Registro de Usuario (register.html ):
■ Nombre y apellido
■ Nombre de usuari@
■ Fecha de nacimiento
■ Domicilio
■ Perfil del usuario (consultar a l@s usuari@s si quieren comprar o vender)
■ Categorías de interés (puede elegir más de una)
● Electro
● Moda
● Hogar
● Juguetería
● Vida sana
■ Foto de usuario
■ Contraseña
■ Confirmar contraseña
■ Botón de enviar que nos lleve a la página principal
■ Botón de borrar todos los datos del formulario

●  Formulario de log in:

El formulario para ingresar al sitio se mostrará cuando seleccionemos la opción "ingresa".

Login de Usuario (login.html ):

● Nombre de usuari@
● Contraseña
● Botón de enviar que nos lleve a la página principal

●  Es necesario indicarle al usuario, con un mensaje de error, cuando un dato solicitado no cumple con el formato permitido. Por ejemplo, si el usuario ingresa un nombre con un solo carácter deberíamos indicar el error

Visual:

●   Para cada uno de los artículos:
● Nos piden que la descripción del producto esté oculta, a menos que los usuarios
le pasen el mouse por arriba.

● Además, nos piden que cuando los usuarios le pasen el mouse por arriba, se
visualice la sombra de la tarjeta de producto.

● Otro efecto que nos piden es el que podemos ver en las siguientes imágenes, donde el ícono del camión de envío gira 90° hacia arriba suavemente cuando
pasamos el mouse por encima.

●   En nuestro login.html debemos lograr que cuando el mouse esté por encima del botón
de envío del formulario, su color de fondo cambie a #0022AA.
- [x]  debemos modificar el footer para cada vez que se pase el mouse por los íconos, estos deben cambiar de color (seleccionar el color que creas que mejor combina con la paleta de colores del sitio).

 Desafios que tuve durante este desarrollo:

- Que el icon del menu de hamburguesa quede a un tamaño correcto.
- modificar los media queries para que la barra de busqueda se vea diferente en sus versiones mobile, tablet y desktop
- lograr que se vean 1, 2 o 4 elementos segun la resolucion correspondiente-.
- transicion de border-box en articulo para desktop
- que la transicion del icono de camion sea suave
- que quede bien posicionados los elementos del footer
- acomodar el tag del copyright para la version desktop
- hacer que se muestre la descripcion del producto y el shadow-box al mismo tiempo durante el mouse in.
- corregir description para que la transicion afetecte todo el article description
- estilizar login y register
- configurar boton de submit para redireccionar al home.
- ordenar checkbox y radiobutton para que queden bien alineados con su label
- cambiar las propiedades flex del formulario de register para que se vea distinto en resolucion desktop
- agregar un hamburger button interactivo y estetico a la mobile view
