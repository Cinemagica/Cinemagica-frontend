import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
    const [seats, setSeats] = useState(
        Array(50).fill(false)
    );

    const [name, setName] = useState('');
    const [ticketCount, setTicketCount] = useState(0);

    const toggleSeat = index => {
        const newSeats = [...seats];
        newSeats[index] = !newSeats[index];
        setSeats(newSeats);


        const newTicketCount = newSeats.filter(seat => seat).length;
        setTicketCount(newTicketCount);
    };

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleTicketCountChange = event => {
        setTicketCount(event.target.value);
    };

    return (
        <div className="container">
            <h1>Seat Reservation</h1>
            <div className="screen">Screen</div>
            <div className="seats">
                {seats.map((seat, index) => (
                    <button
                        key={index}
                        className={seat ? 'reserved' : 'unreserved'}
                        onClick={() => toggleSeat(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <label>
                    Total Tickets:
                    <input type="number" value={ticketCount} onChange={handleTicketCountChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Reservation;