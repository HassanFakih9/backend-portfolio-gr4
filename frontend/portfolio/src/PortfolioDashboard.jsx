import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PortfolioDashboard = () => {
 
    // State variables to hold form input values
    const [skill, setSkill] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [project, setProject] = useState('');

    // State variables to store lists of data
    const [skills, setSkills] = useState([]);
    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [projects, setProjects] = useState([]);

    // Fetch data from the server when the component mounts
    useEffect(() => {
        // Fetch skills data
        axios.get('http://localhost:5000/api/skills').then((response) => {
            setSkills(response.data);
        });

        // Fetch education data
        axios.get('http://localhost:5000/api/education').then((response) => {
            setEducations(response.data);
        });

        // Fetch experience data
        axios.get('http://localhost:5000/api/experience').then((response) => {
            setExperiences(response.data);
        });

        // Fetch project data
        axios.get('http://localhost:5000/api/projects').then((response) => {
            setProjects(response.data);
        });
    }, []);

    // Handle form submissions to create new data
    const handleSkillSubmit = () => {
        axios.post('http://localhost:5000/api/skills', { skill}).then(() => {
            // Refresh the skills list
            axios.get('http://localhost:5000/api/skills').then((response) => {
                setSkills(response.data);
            });
            setSkill(''); // Clear the input field
        });
    };

    const handleEducationSubmit = () => {
        axios.post('http://localhost:5000/api/education', { education }).then(() => {
            // Refresh the education list
            axios.get('http://localhost:5000/api/education').then((response) => {
                setEducations(response.data);
            });
            setEducation(''); // Clear the input field
        });
    };

    const handleExperienceSubmit = () => {
        axios.post('http://localhost:5000/api/experience', { experience }).then(() => {
            // Refresh the experience list
            axios.get('http://localhost:5000/api/experience').then((response) => {
                setExperiences(response.data);
            });
            setExperience(''); // Clear the input field
        });
    };

    const handleProjectSubmit = () => {
        axios.post('http://localhost:5000/api/projects', { project }).then(() => {
            // Refresh the projects list
            axios.get('http://localhost:5000/api/projects').then((response) => {
                setProjects(response.data);
            });
            setProject(''); // Clear the input field
        });
    };

    return (
        <div>
            {/* Skills Form */}
            <div>
                <input
                    type="text"
                    placeholder="Enter a skill"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                />
                <button onClick={handleSkillSubmit}>Add Skill</button>
            </div>
            {/* Skills List */}
            <ul>
                {skills.map((s) => (
                    <li key={s._id}>{s.skill}</li>
                ))}
            </ul>

            {/* Education Form */}
            <div>
                <input
                    type="text"
                    placeholder="Enter an education"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                />
                <button onClick={handleEducationSubmit}>Add Education</button>
            </div>
            {/* Education List */}
            <ul>
                {educations.map((e) => (
                    <li key={e._id}>{e.education}</li>
                ))}
            </ul>

            {/* Experience Form */}
            <div>
                <input
                    type="text"
                    placeholder="Enter an experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                <button onClick={handleExperienceSubmit}>Add Experience</button>
            </div>
            {/* Experience List */}
            <ul>
                {experiences.map((e) => (
                    <li key={e._id}>{e.experience}</li>
                ))}
            </ul>
            {/* Project Form */}
            <div>
                <input
                    type="text"
                    placeholder="Enter an project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                />
               <button onClick={handleProjectSubmit}>Add Project</button>

            </div>
            {/* Project List */}
            <ul>
                {projects.map((e) => (
                    <li key={e._id}>{e.project}</li>
                ))}
            </ul>


        </div>
    );
};

export default PortfolioDashboard;
