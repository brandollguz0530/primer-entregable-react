import React from 'react'
import ButoonFunctionality from './ButoonFunctionality'
import  './styles/ContainerInfo.css'

const ContainerInfo = ({quote, handleNewQuote}) => {
  return (
    <section className='containerinfo' >
      <h1 className='containerInfo-title' >Facts you might not know about the galaxy</h1>
          
          <article className='containerInfo-phrase' >
            <p>
              {quote.phrase}
            </p>
          </article>

          <ButoonFunctionality  handleNewQuote={handleNewQuote}/> 
          <article className='containerInfo-author' >
            <h4>
              Fountain: {quote.author}
            </h4>
          </article>

    </section>
  )
}

export default ContainerInfo
