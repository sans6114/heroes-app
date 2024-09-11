import { Heading } from '../../ui/components/Heading';
import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {
  const heading = 'Marvel Comics'
  const subtitle = 'These are the main heroes from Marvel Comics. You can explore each hero’s dedicated page by clicking on their respective card.';



  return (
    <>
    {/* // heading  */}
    <Heading heading={heading} textSubtitle={subtitle} />
    {/* // heroes */}
    <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}
