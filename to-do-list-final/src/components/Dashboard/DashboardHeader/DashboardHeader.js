import React from 'react'
import "./DashboardHeader.css"

function DashboardHeader() {
  return (
    <header className="app__header">
        <div className="app__header-controls">
          <div className="app__header-controls-container">
            <div className="app__header-controls-container-wrap">
              <button className="controls" type="button">
                <span className="sync__btn">
                  <span className="sync">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M17.166 4.583v4h-4M2.5 15.25v-4h4"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M3.466 7.666a.75.75 0 101.414.5l-1.414-.5zm10.607-1.99l-.53.53a.928.928 0 00.017.017l.513-.546zm2.58 3.454a.75.75 0 001.027-1.093L16.653 9.13zm-13.64 1.573a.75.75 0 00-1.027 1.094l1.028-1.094zm2.58 3.454l.53-.53a.705.705 0 00-.016-.017l-.514.547zm10.607-1.99a.75.75 0 00-1.414-.5l1.414.5zm-11.32-4a5.25 5.25 0 013.79-3.37l-.33-1.462a6.75 6.75 0 00-4.874 4.331l1.414.5zm3.79-3.37a5.25 5.25 0 014.873 1.41l1.06-1.06A6.75 6.75 0 008.34 3.333l.33 1.464zm4.89 1.426l3.093 2.907 1.027-1.093-3.093-2.907-1.027 1.093zM1.986 11.797l3.094 2.906 1.027-1.093-3.093-2.907-1.028 1.094zm3.077 2.89a6.75 6.75 0 006.264 1.812l-.331-1.463a5.25 5.25 0 01-4.872-1.41l-1.061 1.06zm6.264 1.812a6.75 6.75 0 004.873-4.332l-1.414-.5a5.25 5.25 0 01-3.79 3.369l.33 1.463z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </button>
              <button className="controls" type="button">
                <span className="search__btn">
                  <span className="search">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.6"
                      >
                        <circle cx="11.4" cy="11.4" r="6.4"></circle>
                        <path d="M19.4 19.4l-3.48-3.48"></path>
                      </g>
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default DashboardHeader