import { ApplicationCommandType, EntryPointCommandHandlerType } from '@discordjs/core';
import createApplicationCommand from '../../../helpers/command.js';

// basic primary entry point command example

createApplicationCommand({
  type: ApplicationCommandType.PrimaryEntryPoint,
  name: 'primaryEntryPointExample',
  handler: EntryPointCommandHandlerType.DiscordLaunchActivity,
  async run(interaction, api) {},
});
