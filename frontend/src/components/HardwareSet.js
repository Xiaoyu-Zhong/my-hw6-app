import React, { useState } from 'react';

function HardwareSet({ hwName, current, total, projectId }) {
    const [qty, setQty] = useState('');

    const handleCheckIn = () => {
        fetch(`/checkin/${projectId}/${qty}`)
            .then(res => res.json())
            .then(data => {
                alert(data.message);  // e.g. "50 hardware checked in to project 1"
                setQty('');
            })
            .catch(err => console.error(err));
    };

    const handleCheckOut = () => {
        fetch(`/checkout/${projectId}/${qty}`)
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                setQty('');
            })
            .catch(err => console.error(err));
    };

    return (
        <div style={{ margin: '8px 0' }}>
            <p>
                <strong>{hwName}:</strong> {current}/{total}
            </p>
            <input
                type="number"
                placeholder="Enter qty"
                value={qty}
                onChange={e => setQty(e.target.value)}
            />
            <button onClick={handleCheckIn}>Check In</button>
            <button onClick={handleCheckOut}>Check Out</button>
        </div>
    );
}

export default HardwareSet;