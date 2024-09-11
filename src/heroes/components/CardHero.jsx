import React from 'react';

import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { Btn } from '../../ui/components/Btn';

export const CardHero = ({
    id,
    superhero,
    publisher,
    alter_ego,
    characters
}) => {
    const navigate = useNavigate()
    const urlHero = `/public/heroes/${id}.jpg`
    const handleForNavigate = () => {
        navigate(`/hero/${id}`)
    }

    return (
        <Card className="max-w-sm md:max-w-xl" imgSrc={urlHero} imgAlt={`image of hero: ${superhero}`} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {superhero}
            </h5>
            <h3 className='font-medium'>Public by: <span className='font-bold'>{publisher}</span></h3>
            <h3>
                character: <span>{characters}</span>
            </h3>
            {(characters !== alter_ego) && (<h3>Alter ego: <span className='font-bold'>{alter_ego}</span></h3>)}
            <Btn btnText={'More about...'} handleFunction={handleForNavigate} />
        </Card>
    )
}
