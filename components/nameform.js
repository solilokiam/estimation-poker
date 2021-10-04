import React, { useState } from 'react'
import Image from 'next/image';

const NameForm = ({ onSetName }) => {
    const [name, setName] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onSetName(name);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <Image src="/poker.svg" width={200} height={200} />
                </div>
                <div>
                    <h2 className ="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Let&apos;s Estimate Some Tickets
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Name</label>
                            <input id="email-address" value={name} onChange={onNameChange} name="email" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Name" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Let&apos;s Go
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NameForm
