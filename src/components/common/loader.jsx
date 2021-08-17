import React from 'react'

const Loader = (props) => (
  <div className='loader-box'>
    <svg
      className="tea"
      width={37}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.082 17H3.025a1.964 1.964 0 00-1.976 2.02C1.157 22.518 1.496 29.737 2.5 34c1.571 6.678 4.686 10.887 5.949 12.385.342.405.849.615 1.38.615h10.193c.617 0 1.197-.284 1.544-.795C22.676 44.57 25.23 40.428 27.5 34c1.476-4.181 1.584-11.596 1.544-15.084A1.945 1.945 0 0027.082 17z"
        stroke="var(--secondary)"
        strokeWidth={2}
      />
      <path
        id="teabag"
        d="M29 23.5s5.5-3 6.5 2c.599 2.993-1.297 6.038-3.5 7.371C29.456 34.411 28 34 28 34"
        stroke="var(--secondary)"
        strokeWidth={2}
      />
      <path
        id="steamL"
        fill="var(--secondary)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 25v-8h-2v8h-2a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3v-6a3 3 0 00-3-3h-2zm-5 3a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6z"
      />
      <path
        id="steamR"
        d="M17 1s0 3.5-3 5.5-3 5.5-3 5.5M21 6s0 2.227-2 3.5c-2 1.273-2 3.5-2 3.5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="var(--secondary)"
      />
    </svg>
  </div>
)


export default Loader
