# Rest API

## Introduction

This project use Node JS Server with Express. If you want to run locally, you can see how to do that in [Installation](./Installation.md) session. Else, you can use the production server available on heroku.

<b>Base URL</b><br />
https://todo-vialaser-api.herokuapp.com/api/v1

<b>Standard HTTP response codes</b><br />

<table>
  <thead>
    <th>Status Code</th>
    <th>Status Message</th>
  </thead>
  <tbody>
    <tr>
      <td>200</td>
      <td>Service OK</td>
    </tr>
    <tr>
      <td>400</td>
      <td>Bad Request</td>
    </tr>
    <tr>
      <td>404</td>
      <td>Not Found</td>
    </tr>
    <tr>
      <td>500, 502, 503, 504	</td>
      <td>Server Error</td>
    </tr>
  </tbody>
</table>

## Endpoints

### Add new task `POST /tasks`

<b>Body</b><br />

```json
  {
    "description": "Criar design de interface teste vialaser",
    "topic": "UI Design",
    "author": "PierreBosch",
    "avatar_url": "https://avatars.githubusercontent.com/u/23238751?v=4",
  }
```

<b>Return</b><br />

```json
[
  {
    "id": 1,
    "topic": "UIDesign",
    "author": "PierreBosch",
    "avatar_url": "https://avatars.githubusercontent.com/u/23238751?v=4",
    "description": "Criar design de interface teste vialaser",
    "done": false,
    "createdAt": "2021-03-16T18:22:47.837Z",
    "updatedAt": "2021-03-16T18:22:47.837Z"
  }
]
```

### Get User Tasks `GET /tasks?author=:author_name`

<b>Return</b><br />

```json
[
  {
    "id": 1,
    "topic": "UIDesign",
    "author": "PierreBosch",
    "avatar_url": "https://avatars.githubusercontent.com/u/23238751?v=4",
    "description": "Criar design de interface",
    "done": false,
    "createdAt": "2021-03-16T18:22:47.837Z",
    "updatedAt": "2021-03-16T18:22:47.837Z"
  }
]
```

### Edit Task of User `PUT /tasks/:task_id`

<b>Body</b><br />

```json
{
	"description": "Criar design de interface da tela x",
	"topic":"UI",
	"done": true
}
```

<b>Return</b><br />

```json
{
  "task": {
    "id": 35,
    "topic": "UI",
    "author": "PierreBosch",
    "avatar_url": "https://avatars.githubusercontent.com/u/23238751?v=4",
    "description": "Criar design de interface da tela x",
    "done": true,
    "createdAt": "2021-03-16T18:22:47.837Z",
    "updatedAt": "2021-03-16T18:42:06.015Z"
  }
}
```

### Filter tasks `GET /tasks?done=:done&author=:author_name`

<b>Return</b><br />

```json
[
  "tasks": [
    {
      "id": 35,
      "topic": "UI",
      "author": "PierreBosch",
      "avatar_url": "https://avatars.githubusercontent.com/u/23238751?v=4",
      "description": "Criar design de interface da tela x",
      "done": true,
      "createdAt": "2021-03-16T18:22:47.837Z",
      "updatedAt": "2021-03-16T18:22:47.837Z"
    }
  ]
]
```

### Toggle task status `PUT /tasks/:task_id/toggle-status`

<b>Return</b><br />

```json
{
  "task": {
    "id": 35,
    "topic": "UI",
    "author": "PierreBosch",
    "avatar_url": "https://avatars.githubusercontent.com/u/23238751?v=4",
    "description": "teste",
    "done": false,
    "createdAt": "2021-03-16T18:22:47.837Z",
    "updatedAt": "2021-03-16T18:46:17.575Z"
  }
}
```

### Delete task `DELETE /tasks/:task_id`

<b>Return</b><br />

```json
{
  "message": "Removida com sucesso!"
}
```
