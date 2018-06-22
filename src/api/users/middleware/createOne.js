import sha1 from 'sha1';
import usersServices from '../../../modules/users/services';

export default function (req, res, next) {
  req.body.password = sha1(req.body.password);
  return usersServices
    .createOne(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
}
