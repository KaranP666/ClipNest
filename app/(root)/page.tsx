import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <main className='wrapper page'>
    <Header title='All Videos' subHeader='Public Library' />
    <h1>Welcome to ClipNest</h1>
     <section className="video-grid">
         {dummyCards.map((card) => (
        <VideoCard key={card.id} {...card} />
      ))}
      </section>
   </main>
  )
}

export default page