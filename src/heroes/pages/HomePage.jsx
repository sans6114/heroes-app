import { Heading } from '../../ui/components/Heading';

export const HomePage = () => {
  //info for heading
  const heading = (
    <>
      My{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-blue-600 to-green-600">
        Heroes
      </span>{' '}
      App
    </>
  );

  const subtitle = 'This is an educational app featuring Marvel and DC heroes to learn React Router, route protection, and continue exploring hooks and other React concepts.';


  return (
    <section className="relative py-32 lg:py-36 bg-white">
      <div className="mx-auto lg:max-w-8xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">

        {/* Elementos decorativos absolutos */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>

        {/* Elemento decorativo superior izquierdo */}
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>

        {/* Contenido del lado izquierdo */}
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <Heading heading={heading} textSubtitle={subtitle} />
        </div>

        {/* Imagen del lado derecho */}
        <div className="flex flex-1 lg:w-1/2 lg:h-[500px] relative lg:max-w-none lg:mx-0 mx-auto">
          <img
            src="/public/heroes.jpeg"
            alt="Hero image"
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
