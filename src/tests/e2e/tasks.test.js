import app from '../../app';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

chai.use(chaiHttp);
describe('POST API /api/v1/tasks', () => {
    before(() => {
        mongoose.connection.dropCollection('tasks');
    })
    const task = {
        name: "Coding 1",
        startDate: "11:00",
        endDate: "12:00"
    }
    // should successfully create a task
    it('it should successfully create task and return 201', (done) => {
        chai.request(app)
            .post('/api/v1/tasks')
            .send(task)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.status).to.be.equal(201);
                expect(res.body).to.haveOwnProperty('success');
                expect(res.body).to.haveOwnProperty('data')
                return done();
            })
    });

    //should return 400 if task name aready exists
    it('it should fail and return 400 if task exists', (done) => {
        chai.request(app)
            .post('/api/v1/tasks')
            .send(task)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.status).to.be.equal(400);
                return done();
            })
    });
});

describe('GET API /api/v1/tasks', () => {
    before(() => {
        mongoose.connection.dropCollection('tasks');
    })
    const task = {
        name: "Coding 1",
        startDate: "11:00",
        endDate: "12:00"
    }
    // should get list of tasks
    it('Should get the list of tasks', (done) => {
        chai.request(app)
            .post('/api/v1/tasks')
            .send(task)
            .end((err, res) => {
                if (err) return done(err)
                chai.request(app).get('/api/v1/tasks')
                    .end((err, res) => {
                        if (err) return done(err);
                        expect(res.status).to.be.eql(200)
                        return done();
                    })
            })
    });
});

describe('GET API /api/v1/tasks/:id', () => {
    before(() => {
        mongoose.connection.dropCollection('tasks');
    })
    const task = {
        name: "Coding 1",
        startDate: "11:00",
        endDate: "12:00"
    }
    let taskId;
    // should successfully get task by id
    it('Should get task by id', (done) => {
        chai.request(app)
            .post('/api/v1/tasks')
            .send(task)
            .end((err, res) => {
                if (err) return done(err)
                taskId = res.body.data._id;
                chai.request(app).get('/api/v1/tasks/' + taskId)
                    .end((err, res) => {
                        if (err) return done(err);
                        expect(res.status).to.be.eql(200)
                        return done();
                    })
            })
    });

    it('Should return 404 when task does not exists', (done) => {
        const fakeId = '1229b52ca50601182da72457';
        chai.request(app).get('/api/v1/tasks/' + fakeId)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.status).to.be.eql(404)
                return done();
            })
    });

});