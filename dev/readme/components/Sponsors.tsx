import * as React from 'react'

const Grid = ({project}) =>
  project.sponsors.map((sponsor, id) => (
    <span
      key={
        id
      }>{`<a href="${sponsor.url}"><img src="${sponsor.image}" alt="${sponsor.title}" width="200" height="150"/></a>`}</span>
  ))

export const Sponsors = ({project}) => (
  <>
    <h2>Sponsors</h2>

    <p>
      Help support our open-source development efforts by
      [becoming a patron](https://www.patreon.com/rootsdev).
    </p>

    <Grid project={project} />
  </>
)