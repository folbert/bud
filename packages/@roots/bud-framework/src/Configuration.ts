/**
 * @module @roots/bud-framework
 */

import type * as Webpack from 'webpack'

import type {Framework, Server} from '.'

/**
 * Framework configuration
 */
interface Configuration {
  /**
   * Application name
   */
  name: string

  /**
   * Shared regular expressions for pattern matching.
   *
   * @example
   * ```js
   * app.patterns.get('js')
   * ```
   */
  patterns: {[key: string]: RegExp}

  /**
   * Location
   */
  location: Framework.Locations

  /**
   * Feature: CI mode
   *
   * @default false
   */
  ci: boolean

  /**
   * Feature: Clean dist before compilation
   *
   * When enabled stale assets will be removed from
   * the `location/dist` directory prior to the next
   * compilation.
   *
   * @default true
   */
  clean: boolean

  /**
   * Feature: produce webpack.debug.js artifact
   *
   * When enabled a `webpack.debug.js` artifact will be
   * emitted to the `location/storage` directory.
   *
   * @default false
   */
  debug: boolean

  /**
   * Discover: automatically register locatable extensions
   *
   * When enabled, any discovered extensions will be automatically
   * initialized.
   *
   * @default false
   */
  discover: boolean

  /**
   * Feature: enable filename hashing
   * @default false
   */
  hash: boolean

  /**
   * Feature: emit html template
   * @default true
   */
  html: boolean

  /**
   * Feature: automatically install extension dependencies
   * @default false
   */
  install: boolean

  /**
   * Feature: log to console
   * @default false
   */
  log: boolean

  /**
   * Feature: produce asset manifest
   * @default true
   */
  manifest: boolean

  /**
   * Feature: minimize enabled
   * @default true
   */
  minimize: boolean

  /**
   * File format
   *
   * @note do not include extension
   * @default '[name]'
   */
  fileFormat: string

  /**
   * File format (when hashing is enabled)
   *
   * @note do not include extension
   * @default '[name].[contenthash:6]'
   */
  hashFormat: string

  /**
   * Seed values for webpack config
   */
  build: Webpack.Configuration

  /**
   * Seed values for extension options
   */
  extension: {
    [key: string]: any
  }

  /**
   * Server config
   */
  server: Server['config']['repository']

  /**
   * Theme configuration
   */
  theme: {
    spacing: number // number of chars to use for gutters, spacers, etc.
    colors: {
      foreground: Configuration.TermColor // text color
      faded: Configuration.TermColor // 'grayed out' color
      primary: Configuration.TermColor // primary color
      primaryAlt: Configuration.TermColor // variant of primary color (for gradients, etc.)
      error: Configuration.TermColor // error color
      errorAlt: Configuration.TermColor // variant of error color (for gradients, etc.)
      warning: Configuration.TermColor // warning color
      success: Configuration.TermColor // success color
      accent: Configuration.TermColor // accent color
      flavor: Configuration.TermColor // flavor color
    }
    screens: [
      [number, number], // sm
      [number, number], // md
      [number, number], // lg
      [number, number], // xl
    ]
    columns: number // col system to use
    maxWidth: number // max width of terminal output
    maxHeight: number // max height of terminal output
  }
}

namespace Configuration {
  /**
   * Can be either ansi-color or hex
   */
  export type TermColor =
    | `#${string}`
    | `black`
    | `red`
    | `green`
    | `yellow`
    | `blue`
    | `magenta`
    | `cyan`
    | `white`
    | `gray`
    | `grey`
    | `blackBright`
    | `redBright`
    | `greenBright`
    | `yellowBright`
    | `blueBright`
    | `magentaBright`
    | `cyanBright`
    | `whiteBright`
}

export {Configuration}