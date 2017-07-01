import express from 'express';
const router = express.Router();
import TodoItem from '../models/TodoItem'

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    taskText: req.body.item,
    completed: false
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

router.post('/toggle', (req, res) => {
  TodoItem.find({taskText: req.body.item.taskText}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const toSave = data[0];
      toSave.completed = !toSave.completed;
      toSave.save()
        .then(response => {
          res.send(response);
        })
        .catch(error => {
          res.send(error);
        })
      }
   })
});

router.get('/all', (req, res) => {
  TodoItem.find((err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
});

router.post('/delete', (req, res) => {
  console.log(req.body)
  TodoItem.find({taskText: req.body.item.taskText}, (err, data) => {
    console.log(data)
    if (err) {
      console.log(err);
    } else {
      data[0].remove()
        .then(response => {
          res.send(response);
        })
        .catch(error => {
          res.send(error);
        })
      }
   })
});

// find then remove

export default router;
