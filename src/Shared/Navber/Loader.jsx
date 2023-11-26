import MoonLoader from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[80vh]
      flex 
      flex-col 
      justify-center 
      items-center '>
      <MoonLoader size={100} color='red' />
    </div>
  )
}

export default Loader
