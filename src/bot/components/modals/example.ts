import createComponent from '../../../helpers/component.js';
import { InteractableComponentType } from '../../../types/types.js';

// basic modal component example

createComponent({
  type: InteractableComponentType.Modal,
  custom_id: 'modal-example',
  async run(interaction, api) {},
});
