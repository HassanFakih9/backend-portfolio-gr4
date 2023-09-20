const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors()); // Allow all origins for development; adjust for production


const skillsRoutes = require('./routes/skills');
const educationRoutes = require('./routes/educations');
const experienceRoutes = require('./routes/experiences');
const projectsRoutes = require('./routes/projects');

app.use('/api/skills', skillsRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectsRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Update the MongoDB connection URI for the remote database
const uri = "mongodb+srv://hassanfakih80:kJgq7ZRsZRBgj0jX@cluster0.adyejpk.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Add CORS middleware to handle cross-origin requests (if needed)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
