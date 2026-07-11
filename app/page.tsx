import { HeroSequence } from '@/src/components/HeroSequence'
import { OriginSection } from '@/src/components/OriginSection'

export default function Home() {
  return (
    <main id="main-content">
      <HeroSequence />
      <OriginSection />
      <section className="section section--paper" id="patterns" aria-labelledby="patterns-title">
        <div className="container">
          <p className="eyebrow">The investigation continues</p>
          <h2 className="display-title" id="patterns-title">
            Not every action deserves the same gate.
          </h2>
          <p className="lead measure">
            This foundation will become a living gallery of approval patterns, decision records,
            failure modes and demonstrable workflows.
          </p>
        </div>
      </section>
    </main>
  )
}
