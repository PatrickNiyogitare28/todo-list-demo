# todo-list-demo
The code servers to train ATLP elite team with how to build a rest API with nodejs, express, mongoose, babel &amp;  Docker


## Getting started

To get started with service. Make sure the bellow tools are installed on your development environment

- [X] [Nodejs](https://nodejs.org/en/) installed 
- [X] [Mongodb](https://www.mongodb.com/) installed 
- [X] APi testing tool. [Postman](https://www.postman.com/) recommended

## Running the app

- clone the [repo](https://github.com/PatrickNiyogitare28/todo-list-demo.git)
- navigate into the project directory
```sh
$ cd todo-list-demo
```

- install modules you can use either `yarn` or `npm`
```sh
$ yarn install
```

### starting the dev server
```
$ yarn start:dev
```

### building the app
```
$ yarn build
```

### testing

```sh
$ yarn test
  # npm run test
```

## Docker

Application public image **patrickniyo/todo-list-demo**

The application uses docker to run the application in production containers.

The application needs to be built first before building a docker image.

### Building the docker image


```sh
$ docker build . -t <docker-username>/app-name
# docker build . -t patrickniyo/todo-list-demo
```


### Running the docker container out our app image


```sh
$ docker run -p <local-port>:<app-port> <image-name/image-id>
# docker run -p 5000:5000 patrickniyo/todo-list-demo
```

### Push the docker image to docker hub registry

```sh
$ docker push <image-name/image-id>
# docker publish patrickniyo/todo-list-demo
```
> Note that you need to be logged in with your docker account. The bellow command allows to login 
> ```sh
>  $ docker login
> ```

## Author
patrickniyogitare28@gmail.com
