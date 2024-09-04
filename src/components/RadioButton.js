import React, {useState} from 'react'

const RadioButton = () => {
    const options = ['cricket', 'football', 'hockey', 'tennis'];
    const days = ['weekdays', 'weekends'];
    const [game, setGame] = useState('');
    const [roju, setRoju] = useState('');
    return (
        <div>
            <h1>Which Game?</h1>
            <h2>you will pay</h2>
            <span>Which Game Will You Play?</span><br />
            {options.map((option) => (
                <>
                    <input type='radio' id={option} name='options' value={option} onChange={(e) => setGame(e.target.value)} />
                    <label htmlFor={option}>{option}</label>
                    <br />
                </>
            ))}
            <span>Which Day Will you be interested to play?</span><br />
            {days.map((day) => (
                <>  
                    <input type='radio' id={day} name='days' value={day} onChange={(e) => setRoju(e.target.value)} />
                    <label htmlFor={day}>{day}</label>
                    <br />
                </>
            ))}
            <p>{game} on {roju}</p>
        </div>
    )
}

export default RadioButton;