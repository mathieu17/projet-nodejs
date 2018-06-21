import listsServices from '../../../modules/lists/services';

export default function (req, res, next) {
  listsServices
    .deleteOne(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err));
}
