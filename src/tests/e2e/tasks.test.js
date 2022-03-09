import app from '../../app';
import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

chai.use(chaiHttp);

describe("Task API ", () => {
 
    const event = {
        name: "Coding",
        startDate: "11:00",
        endDate: "12:00"
    }
    it("Should create a task", () => {
     chai.request(app).post('/api/v1/tasks').send(JSON.stringify(event))
     .end((err, response) => {
         expect(response.status).to.eql(201);
         done()
     })
    })
})
