import React from 'react';

import { getHeroByPublicher } from '../helpers/getByPublisher';
import { CardHero } from './CardHero';

export const HeroList = ({publisher}) => {

const heroes = getHeroByPublicher(publisher)

  return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

        {
            heroes.map(hero =>  (
            <CardHero key={hero.id} {...hero}/>
        ))
        }
        </div>
  )
}
