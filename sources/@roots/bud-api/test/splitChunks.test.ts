/* eslint-disable n/callback-return */
import {factory} from '@repo/test-kit'
import {splitChunks as splitChunksFn} from '@roots/bud-api/methods/splitChunks'
import {beforeEach, describe, expect, it, vi} from 'vitest'

describe(`bud.splitChunks`, async () => {
  let bud
  let splitChunks: splitChunksFn

  beforeEach(async () => {
    vi.clearAllMocks()
    bud = await factory({mode: `development`})
    splitChunks = splitChunksFn.bind(bud)
  })

  it(`should call bud.hooks.on with false when called with false`, async () => {
    const onSpy = vi.spyOn(bud.hooks, `on`)

    await splitChunks(false)

    expect(onSpy).toHaveBeenCalledWith(
      `build.optimization.splitChunks`,
      false,
    )
  })

  it(`should call bud.hooks.on with default chunk group when called with no options`, async () => {
    const onSpy = vi.spyOn(bud.hooks, `on`)

    await splitChunks()

    expect(onSpy).toHaveBeenCalledWith(
      `build.optimization.splitChunks`,
      expect.any(Function),
    )
  })

  it(`should call bud.hooks.on with default chunk group when called with true`, async () => {
    const onSpy = vi.spyOn(bud.hooks, `on`)

    await splitChunks(true)

    expect(onSpy).toHaveBeenCalledWith(
      `build.optimization.splitChunks`,
      expect.any(Function),
    )
  })

  it(`should call bud.hooks.on with custom chunk`, async () => {
    const onSpy = vi.spyOn(bud.hooks, `on`)

    await splitChunks({
      automaticNameDelimiter: `/`,
      cacheGroups: {
        MOCK: {
          filename: `js/bundle/vendor.js`,
          idHint: `mock`,
          priority: -20,
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: `all`,
      minSize: 0,
    })

    expect(onSpy).toHaveBeenCalledWith(`build.optimization.splitChunks`, {
      automaticNameDelimiter: `/`,
      cacheGroups: {
        MOCK: {
          filename: `js/bundle/vendor.js`,
          idHint: `mock`,
          priority: -20,
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: `all`,
      minSize: 0,
    })
  })

  it(`should return bud`, async () => {
    expect(await splitChunks()).toEqual(bud)
  })
})
