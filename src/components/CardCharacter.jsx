import React from 'react';

export default function CardCharacter({character}) {
    return (
        <div className="w-full rounded-2xl shadow-2xl overflow-hidden group hover:cursor-pointer">
            {character.images && character.images.length > 0 && (
                <>
                    {
                        character.images[0] === "https://static.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.png"
                            ? <img className="w-full h-52" src="https://static.wikia.nocookie.net/naruto-sempai/images/1/11/146551-188655-jiraiya.jpg/revision/latest/scale-to-width-down/340?cb=20121128021951&path-prefix=es" alt={character.name} />
                            : <img className="w-full h-52" src={character.images[0]} alt={character.name}/>
                    }
                </>
            )}
            <div className="py-2">
                <p className="text-center font-bold group-hover:text-yellow-500 transition-all">{character.name}</p>
            </div>
        </div>
    );
};
