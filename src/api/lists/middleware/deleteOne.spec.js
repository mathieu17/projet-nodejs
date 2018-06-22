import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import listsServices from '../../../modules/lists/services';
import deleteOne from './deleteOne';

chai.use(sinonChai);

describe('api > lists > middleware > deleteOne', () => {
  let listsServicesDeleteOneStub;

  afterEach(() => {
    sinon.restore();
  });

  beforeEach(() => {
    listsServicesDeleteOneStub = sinon.stub(listsServices, 'deleteOne');
  });

  it('should be a function', () => {
    expect(deleteOne).to.be.a('function');
  });

  it('should call deleteOne service with req.params.id and call res.send', () => {
    const response = {
      data: true,
    };
    const req = {
      params: {
        id: '12345',
      },
    };
    const res = {
      send: sinon.spy(),
    };
    const next = sinon.spy();

    listsServicesDeleteOneStub.resolves(response);

    return deleteOne(req, res, next).then(() => {
      expect(res.send).to.have.been.called;
      expect(next).not.to.have.been.called;
      expect(listsServicesDeleteOneStub).to.have.been.called;
    });
  });

  it('should call deleteOne service with req.params.id and call next if error', () => {
    const req = {
      params: {
        id: '12345',
      },
    };
    const res = {
      send: sinon.spy(),
    };
    const next = sinon.spy();
    listsServicesDeleteOneStub.rejects();

    return deleteOne(req, res, next).then(() => {
      expect(res.send).not.to.have.been.called;
      expect(next).to.have.been.called;
      expect(listsServicesDeleteOneStub).to.have.been.called;
    });
  });
});
