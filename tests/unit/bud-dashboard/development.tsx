import {Components} from '@roots/bud-dashboard'
import {React} from '@roots/bud-support'
import {join} from 'path'

import {Framework, setupBud, teardownBud} from '../../util'
import * as Ink from '../../util/ink'

process.env.BUD_KEEP_ALIVE = null

jest.setTimeout(10000)

describe('@roots/bud-dashboard', function () {
  let bud: Framework
  let dashboard: any

  beforeAll(() => {
    bud = setupBud('development')
    bud.setPath(
      'project',
      join(process.cwd(), 'examples', 'basic'),
    )

    bud.compiler.compile().run(bud.compiler.callback)
    dashboard = Ink.render(<Components.Dashboard bud={bud} />)
  })

  afterAll(() => {
    bud = teardownBud(bud)
    dashboard.unmount()
  })

  it('displays `Press Q to exit`', done => {
    setTimeout(() => {
      expect(
        dashboard.lastFrame().includes('Press Q to exit'),
      ).toBe(true)

      done()
    }, 2000)
  })

  it('displays stats', done => {
    setTimeout(() => {
      expect(dashboard.lastFrame().includes(' - main.js')).toBe(
        true,
      )

      expect(dashboard.lastFrame().includes('Compiled in')).toBe(
        true,
      )

      done()
    }, 3000)
  })
})