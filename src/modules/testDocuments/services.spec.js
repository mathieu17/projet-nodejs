import sinon from 'sinon';
import { expect } from 'chai';
import services from './services';
import clients from '../../clients';

describe('services', () => {
  let mongodbSpy;
  const db = {
    collection: sinon.spy(() => db),
    insert: sinon.spy(() => ({
      ops: [
        {
          todo: true,
        },
      ],
    })),
  };


  beforeEach(() => {
    mongodbSpy = sinon.stub(clients, 'mongodb').resolves(db);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should works', () => {
    const data = {
      firstName: 'Sarah',
      lastName: 'B',
    };
    return services.createOne(data).then((result) => {
      expect(result.todo).to.equal(true);

      expect(db.collection.callCount).to.equal(1);
      expect(db.insert.callCount).to.equal(1);
      expect(mongodbSpy.callCount).to.equal(1);
    });
  });
});
