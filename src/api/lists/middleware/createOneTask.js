import tasksServices from '../../../modules/tasks/services';

export default function (req, res, next) {
  tasksServices
    .createOne(req.params.listId, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
