# Proyecto AP

## Usuarios 

OmarZuni
correo: "omarzunigpi@gmail.com" 
pass: "password"

## Revisar 

`deleteContent(id)` en backend/modules/Content.js 
- Revisar que borre todas las referencias que usan content id como fk
- Revisar que funcione en todos los casos 

VOY POR EPISODE

## Que falta

En la parte 4.d:
- Campos de auditoria para la última actualización de un registro.

Implementar la parte de `jobs` 4.h

Tener el nombre y logo personalizado 5.12.

## Preguntas

En la parte 4.a. para el registro de persona a que se refiere con "comunidad a la que pertenecen"

## Anotaciones

En el punto 4.f.k. el trailer es un `text`

En el usuario se determina administrador con un booleano `administrator`

Un usuario solo puede hacer un review a contenido que haya visto 4.l.

En el punto 4.m.l el listado de peliculas se puede ver en la tabla de `MovieParticipant` que tiene el id de la pelicula `content`, el id del participante `person`, y el rol que tiene en la pelicula `role`

En el punto 4.e para inactivar contenido, se puede hacer con un booleano `active` en la tabla de `Content`

### Módulo de Consultas

Consultas para administradores:

- punto a. Se puede hacer buscando en la tabla de Purchase

Para usuarios:

- punto a: Se puede hacer buscando en la tabla de `Movie`, `Serie`, y `Documental`
- punto b: Se puede hacer con `Purchase` y `Purchase Content`
- punto c: Se puede hacer con `RecentlyViewed`
- punto d: como medimos la popularidad? con la cantidad de reviews? con la cantidad de compras? con la cantidad de vistas?
