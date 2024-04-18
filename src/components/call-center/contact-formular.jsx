import React from 'react';

function ContactFormular() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <input
                type="text"
                placeholder="Nume complet"
                className="bg-white text-black w-full py-2 px-4 rounded-md border border-gray-300"
                required
            />
            <input
                type="text"
                placeholder="Numar de telefon"
                className="bg-white text-black w-full py-2 px-4 rounded-md border border-gray-300"
                required
            />
            <input
                type="email"
                placeholder="Email"
                className="bg-white text-black w-full py-2 px-4 rounded-md border border-gray-300"
                required
            />
            <textarea
                placeholder="Mesaj"
                className="bg-white text-black w-full py-2 px-4 rounded-md border border-gray-300"
                rows={4}
                required
            ></textarea>
            <button type="submit" className="flex w-1/2  justify-center self-center bg-white text-primary py-2 px-4 rounded-md font-semibold hover:bg-secondary hover:text-white transition-colors duration-300">
                Trimite mesaj
            </button>
        </form>
    );
}

export default ContactFormular;
