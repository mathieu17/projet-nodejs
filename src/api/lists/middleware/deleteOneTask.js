import tasksServices from '../../../modules/tasks/services';

export default function (req, res, next) {
  tasksServices
    .deleteOne(req.params.listId, req.params.taskId)
    .then(response => res.send(response))
    .catch(err => next(err));
}
