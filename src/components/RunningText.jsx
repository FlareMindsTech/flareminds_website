import React from 'react'

export default function RunningText({ text, duration = 25 }) {
  const repeated = `${text} • ${text}`

  return (
    <div className="running-text" style={{ ['--duration']: `${duration}s` }}>
      <div className="running-text-inner">
        <span>{repeated}</span>
      </div>
    </div>
  )
}
