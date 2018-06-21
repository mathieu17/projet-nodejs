import tasksServices from '../../../modules/tasks/services';

export default function (req, res, next) {
  return tasksServices
    .updateOne(req.params.listId, req.params.taskId, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
