import {Framework} from '../../../'

export const config = async (app: Framework, flags) => {
  /**
   * Handle --dist flag
   */
  if (typeof flags['location.project'] !== 'undefined') {
    app.setPath('project', flags['location.project'])
    app.children.every((_name, child) =>
      child.setPath('project', flags['location.project']),
    )
  }

  /**
   * Handle --src flag
   */
  if (typeof flags['location.src'] !== 'undefined') {
    app.setPath('src', flags['location.src'])
    app.children.every((_name, child) =>
      child.setPath('src', flags['location.src']),
    )
  }

  /**
   * Handle --dist flag
   */
  if (typeof flags['location.dist'] !== 'undefined') {
    app.setPath('dist', flags['location.dist'])
    app.children.every((_name, child) =>
      child.setPath('dist', flags['location.dist']),
    )
  }

  /**
   * Handle --publicPath flag
   */
  if (typeof flags['location.publicPath'] !== 'undefined') {
    app.setPublicPath(flags['location.publicPath'])
    app.children.every((_name, child) =>
      child.setPublicPath(flags['location.publicPath']),
    )
  }

  /**
   * Handle --cache flag
   */
  if (
    typeof flags.cache === 'boolean' ||
    typeof flags['cache.type'] === 'string'
  ) {
    const value =
      typeof flags['cache.type'] !== 'undefined'
        ? flags['cache.type']
        : flags.cache

    app.api.call('persist', value)
    app.children
      .getValues()
      .map(child => child.api.call('persist', value))
  }

  /**
   * Handle --devtool flag
   */
  if (typeof flags.devtool !== 'undefined') {
    app.api.call('devtool', flags.devtool)
    app.children.every((_name, child) =>
      child.api.call('devtool', flags.devtool),
    )
  }

  /**
   * Handle --devtool flag
   */
  if (typeof flags.hash !== 'undefined') {
    app.api.call('hash', flags.hash)
    app.children.every((_name, child) =>
      child.api.call('hash', flags.hash),
    )
  }

  /**
   * Handle --devtool flag
   */
  if (typeof flags.html !== 'undefined') {
    app.api.call('html', flags.html)
    app.children.every((_name, child) =>
      child.api.call('html', flags.html),
    )
  }

  /**
   * Handle --runtime flag
   */
  if (typeof flags.runtime !== 'undefined') {
    app.api.call('runtime', flags.runtime)
    app.children.every((_name, child) =>
      child.api.call('runtime', flags.runtime),
    )
  }

  /**
   * Handle --manifest flag
   */
  if (typeof flags.manifest !== 'undefined') {
    app.store.set('features.manifest', flags.manifest)
    app.children.every((_name, child) =>
      child.store.set('features.manifest', flags.manifest),
    )
  }

  /**
   * Handle --minimize flag
   */
  if (typeof flags.minimize !== 'undefined') {
    app.api.call('minimize', flags.minimize)
    app.children.every((_name, child) => {
      child.api.call('minimize', flags.minimize)
    })
  }

  /**
   * Handle --minimize flag
   */
  if (typeof flags.vendor !== 'undefined') {
    app.api.call('splitChunks', flags.vendor)
    app.children.every((_name, child) => {
      child.api.call('splitChunks', flags.vendor)
    })
  }

  /**
   * Handle --target flag
   *
   * @example `$ bud build --target plugin`
   */
  if (flags.target?.length) {
    /**
     * Handle parent if applicable
     */
    !flags?.target?.includes('bud') &&
      app.hooks.on('build.entry', false)

    /**
     * And children if applicable
     */
    app.children.getKeys().forEach(name => {
      !flags?.target?.includes(name) && app.children.remove(name)
    })
  }
}