import React, { useState } from 'react'
import Card from './card';
import { useChannel } from '../effects/ably';
import NameForm from './nameform';

const VOTE = "vote";
const RESET_VOTE = "reset_vote";
const CARDS = [
    {code: '0.5', color:'#C2F9BB'},
    {code: '1', color:'#9AD1D4'},
    {code: '2', color:'#7ECAA2'},
    {code: '3', color:'#62c370'},
    {code: '5', color:'#977b6a'},
    {code: '8', color:'#b25767'},
    {code: '13', color:'#bf4565'},
    {code: '21', color:'#cc3363'},
    {code: '∞', color:'#20063b'},
    {code: '?', color:'#761d4f'},
    {code: '☕', color:'#0a0213'},
];

const Board = ({room}) => {
    const [selectedCard, selectCard] = useState(null);
    const [votes, setVotes] = useState({});
    const [name, setName] = useState(null);

    const [channel, ably] = useChannel(`estimate-${room}`, (message) => {
        if (message.name === VOTE) {
            const newVotes = {...votes};
            newVotes[`${message.data.card}`] = votes[`${message.data.card}`] ? [...votes[`${message.data.card}`], message.data.name] : [message.data.name];
            setVotes(newVotes);
        }

        if (message.name === RESET_VOTE) {
            selectCard(null);
            setVotes([]);
        }
    });

    const onCardClick = (card) => {
        if (selectedCard === null) {
            selectCard(card);
            channel.publish({ name: VOTE, data: { name, card } });
        }
    }

    const onNameSubmit = (name) => {
        setName(name);
    }

    if (name === null) {
        return (<NameForm onSetName={onNameSubmit} />);
    }

    const resetVotes = () => {
        channel.publish({ name: RESET_VOTE, data: { name } });
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div clasNames="mx-auto space-y-8 ">
                <div className="mb-5 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-12">
                    {CARDS.map((card, idx) => (
                        <Card key={`key-card-${idx}`} number={card.code} color={card.color} voters={votes[card.code]} onClick={onCardClick} />
                    ))}
                    <button onClick={resetVotes} className="flex flex-col justify-center items-center w-full py-2 px-4 border border-transparent text-sm font-xl rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reset Votes</button>
                </div>
            </div>
        </div>
    )
}

export default Board
