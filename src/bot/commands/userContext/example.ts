import { ApplicationCommandType } from '@discordjs/core';
import createApplicationCommand from '../../../helpers/command.js';

// basic user context command example

createApplicationCommand({
  type: ApplicationCommandType.User,
  name: 'userContextExample',
  async run(interaction, api) {},
});
