import listsServices from '../../../modules/lists/services';

export default function (req, res, next) {
  return listsServices
    .createOne(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
