import { useState } from 'react';
import { genTicket} from './helper.js';
import Ticket from './Ticket.jsx';
import Button from './Button.jsx';

export default function Lottery({ n = 3, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    let buyTicket = () => {
        setTicket(genTicket(3));
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <Button action={buyTicket}/>
            <hr />
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}