import createComponent from '../../../helpers/component.js';
import { InteractableComponentType } from '../../../types/types.js';

// basic button component example

createComponent({
  type: InteractableComponentType.Button,
  custom_id: 'button-example',
  async run(interaction, api) {},
});
