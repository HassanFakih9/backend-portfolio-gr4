const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  level: String,
  description:String,

  
});

module.exports = mongoose.model('Skill', skillSchema);

// {
//     "name": "JavaScript",
//     "level": "expert",
//     "years_of_experience": 5,
//     "projects_used_in": [
//       "Project A",
//       "Project B",
//       "Project C"
//     ],
//     "certifications": [
//       "JavaScript Certified Professional"
//     ]
//   }
