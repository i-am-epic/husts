import React from 'react';
import './Cards.scss'; // Style your card as needed
import Segment from '../Segment/Segment';

const Card = ({ title, segments }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="card-content">
                {segments.map((segment, index) => (
                    <Segment key={index} title={segment.title} content={segment.content} />
                ))}
            </div>
        </div>
    );
};

export default Card;
