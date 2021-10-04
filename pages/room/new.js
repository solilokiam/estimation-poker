import React from 'react';
import randomWords from 'random-words';

const New = () => {
    return (
        <div>
            <h1>Should not be displayed</h1>
        </div>
    )
}

export function getServerSideProps(context) {
    const roomId = randomWords(3).join('-');

    return {
        redirect: {
            destination: `/room/${roomId}`,
            permanent: false,
        },
    };
  }


export default New
