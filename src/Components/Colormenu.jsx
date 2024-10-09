import React from 'react'

function Colormenu({bgColor}) {

    // let bgColor = document.getElementById('root').style('background-color: black');

  return (
    <>
    <button
    className="mt-5 mb-3 inline-flex size-16 items-center justify-center">
      <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
        {bgColor}
      </span>
    </button> 
    </>
  )
}

export default Colormenu