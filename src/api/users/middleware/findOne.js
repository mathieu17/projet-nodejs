import usersServices from '../../../modules/lists/services';

export default function (req, res, next) {
  usersServices
    .findOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
