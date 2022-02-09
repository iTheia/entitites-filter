# Entitites filter

Proyecto que llama la API de soyyo para filtar su data de entidades

## Pre-requisitos

Es necesario contar con las siguientes herramientas instaladas en tu equipo, antes de intentar correr el proyecto.

- NodeJS >= 12
- Docker
- Docker Compose

## Getting Started

​ Clona el proyecto con `git clone https://github.com/iTheia/entitites-filter.git`

- ### Variables de Ambiente

  En la raíz directorio del proyecto, crea un archivo con nombre `.env` copiando las variables de entorno dentro de `.env.example`

- ### Inital Setup

  En la raíz directorio del proyecto, ejecuta en tu línea de comandos:

  - `npm i`
  - `docker-compose build`
  - `docker-compose up -d`

- ### Endpoints
  una vez disponible el servidor los endpoints disponibles son
  - GET /api-docs
  - POST /api/v1/entities/filter
  - GET /version
  - GET /
