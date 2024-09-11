import PropTypes from 'prop-types';

export const Heading = ({heading, textSubtitle}) => {
  return (
    <div className="flex flex-col gap-y-2 text-center justify-center items-center">
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                {heading}
            </h1>
            {
                textSubtitle && (<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-30 dark:text-gray-400">
                    {textSubtitle}
                </p>)
            }
        </div>
  )
}
Heading.propTypes = {
    heading: PropTypes.string.isRequired, // El título es obligatorio y debe ser un string
    textSubtitle: PropTypes.string, // El subtítulo es opcional y debe ser un string
  };