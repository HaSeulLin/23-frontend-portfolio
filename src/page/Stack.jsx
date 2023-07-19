import React from 'react'
import stack from '../scss/stack.module.scss'

export default function Stack() {
  return (
    <div className={stack['stack-wrap']}>
      <div className={stack['stack-content']}>
        <div className={`${stack['section']}`}>
          <div>
            <h1>SKILL</h1>
            <div>
                <img src="" alt="html5" />
                <img src="" alt="html5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
