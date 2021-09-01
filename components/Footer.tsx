import React from 'react'

export const Footer = () => {
  return (
    <div className={'px-5 text-[#919191]'}>
      <hr className={'border-[#919191]'} />
      <div className={'flex justify-between px-5 pt-3'}>
        <a href='https://mouch.io' className={'underline'}>
          Check out the developer!
        </a>
        <div>
          <p>
            Word sourcing was automated.
          </p>
          <p>
            Feel free to email me regarding new additions or potential removals.
          </p>
          <p>
            Any and all application feedback is welcome!
          </p>
        </div>
      </div>
    </div>
  )
}
