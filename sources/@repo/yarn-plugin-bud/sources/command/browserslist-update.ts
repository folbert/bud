import {CommandClass} from 'clipanion'

import {Command} from './base.command'

export class BrowserslistUpdate extends Command {
  public static paths: CommandClass['paths'] = [
    [`@bud`, `browserslist`, `update`],
    [`@bud`, `browserslist`, `upgrade`],
  ]

  public static usage: CommandClass['usage'] = {
    category: `@bud`,
    description: `update browserslist`,
    examples: [
      [`update browserslist db`, `yarn @bud browserslist update`],
    ],
  }

  public async execute() {
    await this.cli.run([`update-browserslist-db`])
  }
}