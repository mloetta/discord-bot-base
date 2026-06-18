import { ApplicationCommandType } from '@discordjs/core';
import createApplicationCommand from '../../../helpers/command.js';

// basic message context command example

createApplicationCommand({
  type: ApplicationCommandType.Message,
  name: 'messageContextExample',
  async run(interaction, api) {},
});
