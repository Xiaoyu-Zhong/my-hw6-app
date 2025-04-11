import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Typography } from '@mui/material';

function Projects() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Project Name 1',
            users: ['Alice', 'Bob', 'Charlie'],
            joined: false,
            hwSets: [
                { hwName: 'HWSet1', current: 50, total: 100 },
                { hwName: 'HWSet2', current: 0, total: 50 }
            ]
        },
        {
            id: 2,
            name: 'Project Name 2',
            users: ['David', 'Eve', 'Frank'],
            joined: true,
            hwSets: [
                { hwName: 'HWSet1', current: 30, total: 100 },
                { hwName: 'HWSet2', current: 10, total: 50 }
            ]
        },
        {
            id: 3,
            name: 'Project Name 3',
            users: ['Grace', 'Heidi'],
            joined: false,
            hwSets: [
                { hwName: 'HWSet1', current: 20, total: 100 },
                { hwName: 'HWSet2', current: 20, total: 50 }
            ]
        }
    ]);

    const handleToggleJoin = (projectId) => {
        setProjects(prevProjects =>
            prevProjects.map(p =>
                p.id === projectId ? { ...p, joined: !p.joined } : p
            )
        );
    };

    return (
        <div>
            {/* Demonstrate usage of Material UI Typography */}
            <Typography variant="h5" gutterBottom>
                List of Projects
            </Typography>

            {/* Pass 'projects' and 'handleToggleJoin' as props to ProjectCard */}
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    onToggleJoin={handleToggleJoin}
                />
            ))}
        </div>
    );
}

export default Projects;