import {
  useEffect,
  useState,
} from 'react';

import {
  Alert,
  Button,
} from 'flowbite-react';
import queryString from 'query-string';
import { HiInformationCircle } from 'react-icons/hi';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { Heading } from '../../ui/components/Heading';
import { CardHero } from '../components/CardHero';
import { getHeroByName } from '../helpers/getHeroesByName';
import { useForm } from '../hooks/useForm';

export const SearchPage = () => {
    const [heroes, setHeroes] = useState([]);
    const [showSpan, setShowSpan] = useState(false)
    const [showError, setShowError] = useState(false)


    //navegacion
    const navigate = useNavigate()
    //location
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    // const showSpan = (q.length === 0) 
    // const showError = (q.length > 0 && heroes.length === 0)

    const { searchText, onInputChange } = useForm({
        searchText: q
    })


    useEffect(() => {

        if (q.trim().length === 0) {
            setHeroes([])
            setShowSpan(true) //mensaje de caja vacia
            setShowError(false)
        }

        const fetchHeroes = getHeroByName(q)
        setHeroes(fetchHeroes)
        setShowSpan(false)
        setShowError(heroes.length === 0)
        console.log(heroes.length === 0 )
    }, [q])


    //funcion
    const onHandleSubmit = (e) => {
        e.preventDefault()
        if (searchText.trim().length <= 1) return

        navigate(`?q=${searchText}`)
    }
    return (
        <>
            <Heading heading='Search your hero' />
            {/* my search input */}
            {/* <SearchInput placeholder={'search'} btnText={'search'} onInputChange={onInputChange} searchText={searchText} onSubmit={handleSearchSubmit} /> */}
            <form onSubmit={onHandleSubmit} className="flex w-full px-8 md:px-0 md:w-2/4 md:mx-auto items-center gap-x-5">
                <input
                    type="text"
                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search a hero"
                    name='searchText'
                    onChange={onInputChange}
                    value={searchText}
                    required
                />
                <Button type='submit'>Search</Button>
            </form>
            {/* results */}
            <div className="p-10 w-full flex flex-col items-center justify-center">
                <h2 className='text-xl font-extrabold'>
                    Results:
                </h2>
                <div className='border border-black my-4 w-2/4 mx-auto'></div>
                {showSpan && (<Alert color="success" onDismiss={() => alert('Alert dismissed!')}><span className="font-medium">Search!</span> You can found every hero, only put the name in the input.</Alert>)}
                {showError && (<Alert color="failure" icon={HiInformationCircle}> <span className="font-medium">Error!</span> No Hero with {q}.</Alert>)}
                {
                    heroes.map(hero => (

                        <CardHero key={hero.id} {...hero} />
                    ))
                }

            </div>

        </>
    )
}
