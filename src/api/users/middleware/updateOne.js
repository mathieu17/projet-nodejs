import usersServices from '../../../modules/lists/services';

export default function (req, res, next) {
  usersServices
    .updateOne(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
