import express from 'express';
import dbRoutes from './routes/databaseAccess.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

mongoose.connect(process.env.MONGODB_URI);

const app = express();

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
