import { heroes } from '../data/dataHeroes';

export const getHeroByPublicher = (publisher) => {

const validPublisher = ['DC Comics', 'Marvel Comics']
// mi punlisher pasado como argumento esta correcto o no?
if(!validPublisher.includes(publisher)){
    throw new Error('publisher incorrecto')
}
// retorno los heroes que contengan mi publicher pasado como argumento
return heroes.filter(hero => hero.publisher === publisher)
}