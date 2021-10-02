# Maven + Spring-Boot + Vue.js Template

Simple maven project with two modules:

1. `frontend` - Contains a vue.js HelloWorld app with a simple server REST call.
2. `server` - Contains a simple Spring-Boot application with one REST controller to handle the vue.js calls.

## Getting started

1. Checkout this repo
2. Enter the project root
3. Build Project with `mvn clean install` or `./mvnw clean install`
4. Change dir to `server` and run spring boot application with `mvn spring-boot:run`
5. Open your browser at `http://localhost:8090`

## Versions

- Java 11
- Spring-Boot 2.5.5
- Node.js v15.9.0
- vue.js 2.6.11