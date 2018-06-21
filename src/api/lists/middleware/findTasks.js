import tasksServices from '../../../modules/tasks/services';

export default function (req, res, next) {
  const {
    first,
    offset,
    term,
  } = req.query;

  tasksServices
    .find(req.params.listId, parseInt(first, 10), parseInt(offset, 10), term)
    .then(response => res.send(response))
    .catch(err => next(err));
}
