import usersServices from '../../../modules/lists/services';

export default function (req, res, next) {
  return usersServices
    .deleteOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
