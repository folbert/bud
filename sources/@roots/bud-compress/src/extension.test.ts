import {describe, expect, it, test} from '@jest/globals'

import Extension from './index'

describe(`@roots/bud-compress`, () => {
  it(`should be constructable`, () => {
    expect(Extension).toBeInstanceOf(Function)
  })

  test.todo(`improve this spec`)
})