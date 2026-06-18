import createComponent from '../../../helpers/component.js';
import { InteractableComponentType } from '../../../types/types.js';

// basic select menu component example

createComponent({
  type: InteractableComponentType.SelectMenu,
  custom_id: 'select-menu-example',
  async run(interaction, api) {},
});
