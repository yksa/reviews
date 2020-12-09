import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const size = people.length;
    const nextPerson = () => {
        setIndex((index) => {
            if (index + 1 < size) index += 1;
            else index = 0;
            return index;
        });
    };
    const prevPerson = () => {
        setIndex(index => {
            if (index === 0) index = 3;
            else index -= 1;
            return index;
        });
    };
    const suprise = () => {
        setIndex(index => getRandomInt(4));
    };
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
                <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>
                <div>
                    <button className="random-btn" onClick={suprise}>suprise me</button>
                </div>
            </div>
        </article>
    )
}

export default Review
