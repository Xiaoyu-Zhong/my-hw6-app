import React from 'react';
import HardwareSet from './HardwareSet';

function ProjectCard({ project, onToggleJoin }) {
    const handleJoin = () => {
        fetch(`/join/${project.id}`)
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                onToggleJoin(project.id);
            })
            .catch(err => console.error(err));
    };

    const handleLeave = () => {
        fetch(`/leave/${project.id}`)
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                onToggleJoin(project.id);
            })
            .catch(err => console.error(err));
    };

    return (
        <div style={{ border: '1px solid #ccc', margin: 10 }}>
            <h2>{project.name}</h2>
            <p>Authorized Users: {project.users.join(', ')}</p>
            {project.joined
                ? <button onClick={handleLeave}>Leave</button>
                : <button onClick={handleJoin}>Join</button>
            }

            {project.hwSets.map((hw, idx) => (
                <HardwareSet
                    key={idx}
                    hwName={hw.hwName}
                    current={hw.current}
                    total={hw.total}
                    projectId={project.id}
                />
            ))}
        </div>
    );
}

export default ProjectCard;