# express-react-mysql-crud
This a task management demo project to crud using react, express and mysql.
### Here are some API endpoint for backend
**Get task list**
`GET` [http://localhost:4000/api/tasks](http://localhost:4000/api/tasks)

**Respose**
```javascript
{
    "type": "ok",
    "status": 200,
    "total": 18,
    "pagination": {
        "per_page": 10,
        "current_page": 1,
        "last_page": 2,
        "first_page_url": "http://localhost:4000/api/tasks?page=1",
        "last_page_url": "http://localhost:4000/api/tasks?page=2",
        "next_page_url": "http://localhost:4000/api/tasks?page=2",
        "prev_page_url": null,
        "path": "http://localhost:4000/api/tasks",
        "from": 1,
        "to": 10
    },
    "task": [
        {
            "id": 5,
            "title": "This is a task 3 for you",
            "description": "This is task 3 descriptions",
            "type": "task type",
            "status": "Active",
            "due_date": "2020-10-10",
            "createdAt": "2020-06-01T18:24:42.000Z",
            "updatedAt": "2020-06-01T18:24:42.000Z"
        },
        {....}
   ]
}
```
**Get single task**
`GET` [http://localhost:4000/api/tasks/:id](http://localhost:4000/api/tasks/:id)

**Response**
```javascript
{
    "type": "ok",
    "status": 200,
    "task": {
        "id": 5,
        "title": "This is a task 3 for you",
        "description": "This is task 3 descriptions",
        "type": "task type",
        "status": "Active",
        "due_date": "2020-10-10",
        "createdAt": "2020-06-01T18:24:42.000Z",
        "updatedAt": "2020-06-01T18:24:42.000Z"
    }
}
```


** Update task **
`PUT` [http://localhost:4000/api/tasks/:id](http://localhost:4000/api/tasks/:id)

**Response**
```javascript
{
    "type": "ok",
    "status": 201,
    "message": "Task updated.",
    "updated": 1,
    "task": {
        "id": 5,
        "title": "This title has updated!",
        "description": "This is task 3 descriptions",
        "type": "task type",
        "status": "Active",
        "due_date": "2020-10-10",
        "createdAt": "2020-06-01T18:24:42.000Z",
        "updatedAt": "2020-06-03T17:33:50.000Z"
    }
}
```
**Delete task**
`DELETE` [http://localhost:4000/api/tasks/:id](http://localhost:4000/api/tasks/:id)

**Response**
```javascript
{
    "type": "ok",
    "status": 200,
    "deleted": 1
}
```
