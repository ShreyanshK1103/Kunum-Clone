import React from 'react'
import Cards from '../Components/Cards'
import SearchBar from '../Components/SearchBar'

const CardsPage = () => {
  return (
    <div className='bg-[#e44f19] min-h-screen flex flex-col items-center'>
        <SearchBar />
        <Cards />
    </div>
  )
}

export default CardsPage