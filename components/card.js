import React from 'react'

const Card = ({ number, voters, color, onClick }) => {
    return (
        <div className={`flex flex-col justify-center items-center w-36 h-52 rounded-lg border-8`} style={{ borderColor: color }} onClick={() => { onClick(number) }}>
            <div className="text-5xl">{number}</div>
            <div>
                {voters && voters.map((voter, idx) => (
                    <span key={`card-voter-${idx}`}className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">{voter}</span>
                ))}
            </div>
        </div>
    )
}

export default Card
