import { visualStories } from '../data/content'

export function ExperienceStorySection() {
  return (
    <section className="section experience-section" aria-label="Visual storytelling">
      <div className="container experience-stack">
        {visualStories.map((story, index) => (
          <article
            className={`experience-block ${story.align === 'right' ? 'experience-block-reverse' : ''} experience-block-${index + 1}`}
            key={story.title}
          >
            <div className="experience-visual">
              <img src={story.image} alt={story.title} />
              <div className="experience-gradient" />
            </div>
            <div className="experience-copy">
              <span className="eyebrow">{story.eyebrow}</span>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
