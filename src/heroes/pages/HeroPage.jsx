import { useMemo } from 'react';

import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import { Btn } from '../../ui/components/Btn';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
    
    const navigate = useNavigate()
    const { id } = useParams()
    const hero =  useMemo(() => getHeroById(id), [id]); 

    const urlImage = `/public/heroes/${id}.jpg`
    const handleComeBack = () => {
    navigate(-1)
    }


    return (
        !hero ? (<span>Hero with id: {id} not found</span>)
            :
            (
                <section className='max-w-6xl mx-auto'>
                    <h1 className='text-7xl font-extrabold text-center'>{hero.superhero}</h1>
                    <div className='w-full flex flex-col md:flex-row md:gap-x-16 px-10 mt-[100px]'>
                        <div className='w-1/2 animate-fade-right animate-duration-[4000ms]'>
                            <img className='rounded-3xl shadow-2xl h-[400px]' src={urlImage} alt={`image of hero: ${hero.superhero}`} />
                        </div>
                        <div className='w-1/2 flex flex-col gap-y-10 text-gray-900 dark:text-white animate-fade-right animate-duration-[1500ms]'>
                            <h2 className="text-4xl font-bold tracking-tight ">
                                ID: {id}
                            </h2>
                            <h3 className='font-medium'>Public by: <span className='font-bold'>{hero.publisher}</span></h3>
                            <h3>
                                character: <span className='font-bold'>{hero.characters}</span>
                            </h3>
                            {(hero.characters !== hero.alter_ego) && (<h3>Alter ego: <span className='font-bold'>{hero.alter_ego}</span></h3>)}
                            <Btn className={'w-18 self-start'} btnText={'regresar'} handleFunction={handleComeBack} />
                        </div>
                    </div>
                </section>
            )
    )
}
