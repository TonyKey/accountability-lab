'use client'

import Image from 'next/image'
import { useState } from 'react'

export function HeroSequence() {
  const [state, setState] = useState<'proposed' | 'paused'>('proposed')

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__topline">
          <span>Accountability Lab · Independent research</span>
          <span className="hero__index">Experiment 001 · Approval patterns</span>
        </div>
        <div className="hero__grid">
          <div>
            <p className="eyebrow">The moment before action</p>
            <h1 className="hero__title" id="hero-title">
              Just before AI <em>acts.</em>
            </h1>
            <div className="hero__copy">
              <p>
                A human click does not automatically create human control. This exhibit explores
                what people need to see, decide and leave on the record before an AI action counts.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#origin">Enter the investigation</a>
                <a className="button button--secondary" href="#patterns">Browse the premise</a>
              </div>
            </div>
          </div>
          <div className="hero__stage" aria-live="polite">
            <Image
              className="hero__image"
              src="/images/accountability-funnel.png"
              alt="A crude drawing of a large machine funnelling many decisions toward a tired person with only one enormous approve button."
              width={1792}
              height={936}
              priority
            />
            <div className="hero__status" data-state={state}>
              <span className="hero__status-dot" aria-hidden="true" />
              {state === 'proposed' ? 'Action proposed · awaiting one click' : 'Action paused · context required'}
            </div>
            {state === 'proposed' ? (
              <button className="hero__advance" type="button" onClick={() => setState('paused')}>
                Pause the action →
              </button>
            ) : (
              <div className="hero__lesson">
                <strong>A button is not accountability.</strong>
                <span>Meaningful approval needs evidence, authority, alternatives and a recoverable record.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
