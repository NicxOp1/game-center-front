import React from 'react'
import CardGames from '../../Components/CardGames/CardGames'
import { games } from '../../data/games'
import './library.css'

export default function Library() {


  return (
    <div className='content-library'>
        <h1 className='title-library'>Library</h1>
        <div className='content-btn-cards-library'>
            <div className='content-btn-library'>
                <button>
                    mis compras
                </button>
                <button>
                    favoritos
                </button>
            </div>
            <div className='cont-card'>
            {
                games.map(e => <CardGames name={e.name} category={e.category} img={e.photo} price={e.price}/>)
            }
            </div>
        </div>
    </div>
  )
}
