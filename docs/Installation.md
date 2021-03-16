## 💻 Getting started

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run?label=Vialaser%20todo&uri=https%3A%2F%2Fgithub.com%2FPierreBosch%2Ftodo-list-test%2Fblob%2Fmaster%2Fvialaser-todo-insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/PierreBosch/todo-vialaser-api && cd todo-vialaser-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name todo-vialaser -e POSTGRES_USER=docker \
              -e POSTGRES_DB=tasks-manager -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Once the services are running, run the migrations on project folder
$ yarn sequelize db:migrate

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```
