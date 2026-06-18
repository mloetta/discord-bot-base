import { GatewayDispatchEvents } from '@discordjs/core';
import createGatewayEvent from '../../helpers/event.js';

// basic event example

createGatewayEvent({
  name: GatewayDispatchEvents.Ready,
  async run(args, api) {
    console.log('Ready event example!');
  },
});
