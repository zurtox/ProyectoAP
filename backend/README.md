# Proyecto AP

Todo esto solo considera back-end

## Usuarios 

OmarZuni
correo: "omarzunigpi@gmail.com" 
pass: "password"

## Revisar 

`deleteContent(id)` en backend/modules/Content.js 
- Revisar que borre todas las referencias que usan content id como fk
- Revisar que funcione en todos los casos 

En teoria ya estan todos los modulos revisados.

## Que falta

En la parte 4.d:
- Campos de auditoria para la última actualización de un registro.

Implementar la parte de `jobs` 4.h

## Preguntas

En la parte 4.a. para el registro de persona a que se refiere con "comunidad a la que pertenecen"

## Anotaciones

En el punto 4.f.k. el trailer es un `text`

En el usuario se determina administrador con un booleano `administrator`

Un usuario solo puede hacer un review a contenido que haya visto 4.l.

En el punto 4.m.l el listado de peliculas se puede ver en la tabla de `MovieParticipant` que tiene el id de la pelicula `content`, el id del participante `person`, y el rol que tiene en la pelicula `role`

En el punto 4.e para inactivar contenido, se puede hacer con un booleano `active` en la tabla de `Content`

### Módulo de Consultas

Completo, en teoria ya esta todo implementado.
