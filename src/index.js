import "./database";
import express from 'express';
import taskRoutes from './routes/task.route';
import authRoutes from './routes/auth.route';

const server = express();

// default route
server.get('/', (req, res) => {
    res.status(200).json({success: true, message: "You successfully landed on our Todo app API"})
});

server.use(express.json());

server.use('/api/v1/tasks', taskRoutes);
server.use('/api/v1/auth', authRoutes);

const port = 5000;

server.listen(port, () => {console.log("Server listening on port "+port)});