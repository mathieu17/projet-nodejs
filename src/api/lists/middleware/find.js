import listsServices from '../../../modules/lists/services';

export default function getLists(req, res, next) {
  const {
    first,
    offset,
    term,
  } = req.query;

  return listsServices
    .find(parseInt(first, 10), parseInt(offset, 10), term)
    .then(response => res.send(response))
    .catch(err => next(err));
}
