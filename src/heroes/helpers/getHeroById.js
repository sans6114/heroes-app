import { heroes } from '../data/dataHeroes';

export const getHeroById = (id) => {

return heroes.find(hero => hero.id === id)
}