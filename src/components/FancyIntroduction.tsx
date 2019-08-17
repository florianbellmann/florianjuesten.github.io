import * as React from 'react'
import './FancyIntroduction.css'
import Typist from 'react-typist'

export const FancyIntroduction: React.FC = (props) => {
  return (
    <div className="introduction">
      <h1><span className="firstName">Florian</span>JÜSTEN</h1>
      <Typist
        startDelay={500}
        avgTypingDelay={40}
        cursor={{ hideWhenDone: false, show: true, blink: true }}>
        Fullstack developer based in cologne.
      </Typist>
      <a aria-label="Contact me" href="mailto:flojuesten@gmail.com">Contact me</a>
    </div>
  )
}
