import { DesignerToolbarSettings } from '../../../../interfaces';
import { IWizardStepProps } from './models';
import { EXPOSED_VARIABLES } from './utils';

export const getSettings = (_data?: IWizardStepProps) =>
  new DesignerToolbarSettings()
    .addPropertyAutocomplete({
      id: '14817287-cfa6-4f8f-a998-4eb6cc7cb818',
      name: 'name',
      label: 'Name',
      labelAlign: 'right',
      parentId: 'root',
    })
    .addTextField({
      id: '02deeaa2-1dc7-439f-8f1a-1f8bec6e8425',
      name: 'title',
      label: 'Title',
      labelAlign: 'right',
      parentId: 'root',
    })
    .addTextField({
      id: 'e618b14f-1820-4564-8f19-23abfee8dc87',
      name: 'subTitle',
      label: 'Sub Title',
      labelAlign: 'right',
      parentId: 'root',
    })
    .addTextArea({
      id: '4dca96b4-095d-4d92-aad8-2135e07c04a6',
      name: 'description',
      label: 'Description',
      labelAlign: 'right',
      parentId: 'root',
    })
    .addTextField({
      id: '4bb6cdc7-0657-4e41-8c50-effe14d0dc96',
      name: 'key',
      label: 'Key',
      labelAlign: 'right',
      parentId: 'root',
    })
    .addDropdown({
      id: '840aee56-42d2-40ed-a2c6-57abb255fb95',
      name: 'status',
      label: 'Status',
      labelAlign: 'right',
      parentId: 'root',
      hidden: true,
      customVisibility: null,
      dataSourceType: 'values',
      values: [
        { id: '8400a8ec-577d-4468-9347-5601f952b44c', label: 'wait', value: 'wait' },
        { id: 'cc268f50-47ca-4e4e-966f-7f2abfec902f', label: 'process', value: 'process' },
        { id: 'b4117249-8c2f-4991-a96c-9ea434293120', label: 'finish', value: 'finish' },
        { id: 'b4117249-8c2f-4991-a96c-9ea434293121', label: 'error', value: 'error' },
      ],
      validate: { required: true },
    })
    .addTextField({
      id: '29be3a6a-129a-4004-a627-2b257ecb78b4',
      name: 'className',
      label: 'Class Name',
      labelAlign: 'right',
      parentId: 'root',
    })
    .addIconPicker({
      id: '4595a895-5078-4986-934b-c5013bf315ad',
      name: 'icon',
      label: 'Icon',
      labelAlign: 'right',
      parentId: 'root',
      hidden: false,
      settingsValidationErrors: [],
    })
    .addCheckbox({
      id: 'd1e06550-826c-4db9-9b9f-ce05e565f64f',
      name: 'disabled',
      label: 'Disabled',
      labelAlign: 'right',
      parentId: 'root',
      hidden: false,
      customVisibility: null,
      validate: {},
    })
    .addCheckbox({
      id: 'ba280e2b-a604-4e3e-acab-cfde391d99e0',
      name: 'allowCancel',
      label: 'Allow Cancel',
      labelAlign: 'right',
      parentId: 'root',
      hidden: false,
      defaultValue: false,
      customVisibility: null,
      validate: {},
    })
    .addCheckbox({
      id: '7146e31e-056d-4870-a7d3-898afe88f6c9',
      name: 'canSkipTo',
      label: 'Can Skip To',
      labelAlign: 'right',
      parentId: 'root',
      hidden: false,
      defaultValue: false,
      customVisibility: null,
      validate: {},
    })

    .addSectionSeparator({
      id: '4d2ca388-22ef-4e24-924b-2c2e3a7e0161',
      name: 'nextButtonSeparatorVisibility',
      parentId: 'root',
      label: 'Next Button',
    })
    .addTextField({
      id: '737ae9b8-61d2-4ecd-9891-feaaec244a3a',
      name: 'nextButtonText',
      label: 'Text',
      labelAlign: 'right',
      parentId: 'root',
    })
    .addCodeEditor({
      id: 'f39e604f-b2c9-4e6a-9101-fc12d32b7b3a',
      name: 'nextButtonCustomEnabled',
      label: 'Custom Enabled',
      description: 'Write the code that returns whether this button is enabled',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: [
        {
          id: '7651de1d-d1eb-490b-9349-46c55bca8322',
          name: 'globalState',
          description: 'The Global state',
          type: 'object',
        },
        {
          id: '65b0260e-a9a5-4c31-a0a1-beb76c2633c4',
          name: 'data',
          description: 'Selected form values',
          type: 'object',
        },
      ],
    })
    .addCodeEditor({
      id: '70fdea84-c8fd-46d7-9558-f6bbe99a1c83',
      name: 'onBeforeNext',
      label: 'On Before Next',
      description: 'Enter functionality that will get triggered before next action.',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: EXPOSED_VARIABLES,
    })
    .addCodeEditor({
      id: '1d0091ab-875b-496d-9add-67c2d2f5212c',
      name: 'onAfterNext',
      label: 'On After Next',
      description: 'Enter functionality that will get triggered after next action.',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: EXPOSED_VARIABLES,
    })
    .addConfigurableActionConfigurator({
      id: 'F3B46A95-703F-4465-96CA-A58496A5F78C',
      name: 'nextButtonActionConfiguration',
      label: 'Action configuration',
      hidden: false,
      customVisibility: '',
      validate: {},
      settingsValidationErrors: [],
    })
    .addSectionSeparator({
      id: '4beaa8dc-300f-4742-8e1f-d4cf76be942c',
      name: 'backButtonSeparatorVisibility',
      parentId: 'root',
      label: 'Back Button',
    })

    .addTextField({
      id: 'ed059dec-4f1b-408b-8739-05f0242d662a',
      name: 'backButtonText',
      label: 'Text',
      labelAlign: 'right',
      parentId: 'root',
    })

    .addCodeEditor({
      id: 'fbc47133-caf4-45c7-bebf-ddc54159bfeb',
      name: 'backButtonCustomEnabled',
      description: 'Write the code that returns whether this button is enabled',
      label: 'Custom Enabled',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: [
        {
          id: '31e69153-4b96-4532-89e9-2ace8d400f37',
          name: 'globalState',
          description: 'The Global state',
          type: 'object',
        },
        {
          id: 'fa3e68a4-3f35-46e4-bfe1-2c77c7918fd5',
          name: 'data',
          description: 'Selected form values',
          type: 'object',
        },
      ],
    })
    .addCodeEditor({
      id: '39a6c902-2d58-4e92-a139-20b6c85f5cbb',
      name: 'onBeforeBack',
      label: 'On Before Back',
      description: 'Enter functionality that will get triggered before back action.',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: EXPOSED_VARIABLES,
    })
    .addCodeEditor({
      id: 'cd362420-f884-470e-80bc-d72315fc3f8e',
      name: 'onAfterBack',
      label: 'On After Back',
      description: 'Enter functionality that will get triggered after back action.',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: EXPOSED_VARIABLES,
    })
    .addConfigurableActionConfigurator({
      id: '8CC6A43F-54EE-4756-9B87-6E9204F5AEFB',
      name: 'backButtonActionConfiguration',
      label: 'Action configuration',
      hidden: false,
      customVisibility: '',
      validate: {},
      settingsValidationErrors: [],
    })
    .addSectionSeparator({
      id: 'b20d139e-0869-482a-8171-ffa1b09b4113',
      name: 'doneButtonSeparatorVisibility',
      parentId: 'root',
      label: 'Done Button',
    })
    .addTextField({
      id: '20ea7d88-2e09-4d2e-9e4a-caa23b1e3502',
      name: 'doneButtonText',
      label: 'Text',
      labelAlign: 'right',
      parentId: 'root',
    })
    .addCodeEditor({
      id: 'fc29b440-9f26-4546-826f-900b058a36f6',
      name: 'doneButtonCustomEnabled',
      label: 'Custom Enabled',
      description: 'Write the code that returns whether this button is enabled',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: [
        {
          id: 'f30ac175-9d29-4e15-931e-4a9680f18881',
          name: 'globalState',
          description: 'The Global state',
          type: 'object',
        },
        {
          id: '0d293f96-b668-4d4a-a76f-03596b569d53',
          name: 'data',
          description: 'Selected form values',
          type: 'object',
        },
      ],
    })
    .addConfigurableActionConfigurator({
      id: 'D5133335-4349-459A-8E9E-4371C814CE1A',
      name: 'doneButtonActionConfiguration',
      label: 'Action configuration',
      hidden: false,
      customVisibility: '',
      validate: {},
      settingsValidationErrors: [],
    })
    .addSectionSeparator({
      id: '83304267-84ad-4489-8800-0f7aeb5bb7ce',
      name: 'cancelButtonSeparatorVisibility',
      parentId: 'root',
      label: 'Cancel Button',
    })
    .addTextField({
      id: 'bbdd219c-8b72-48bb-ba66-ebbae69edce2',
      name: 'cancelButtonText',
      label: 'Text',
      labelAlign: 'right',
      parentId: 'root',
    })
    .addCodeEditor({
      id: '4a2af13f-2f16-4b05-b66f-b0d236988e5e',
      name: 'cancelButtonCustomEnabled',
      label: 'Custom Enabled',
      description: 'Write the code that returns whether this button is enabled',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: [
        {
          id: 'd9898e43-1945-4aea-85c3-4c8829cdadea',
          name: 'globalState',
          description: 'The Global state',
          type: 'object',
        },
        {
          id: 'bbb57dd2-4c07-46e6-84c6-ab559c681837',
          name: 'data',
          description: 'Selected form values',
          type: 'object',
        },
      ],
    })
    .addCodeEditor({
      id: '3a50c750-a5ec-4152-8a50-2fdefef4d37c',
      name: 'onBeforeCancel',
      label: 'On Before Cancel',
      description: 'Enter functionality that will get triggered before cancel action.',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: EXPOSED_VARIABLES,
    })
    .addCodeEditor({
      id: '417fa50e-6b37-4cbf-826a-c8b9d5117cdd',
      name: 'onAfterCancel',
      label: 'On After Cancel',
      description: 'Enter functionality that will get triggered after cancel action.',
      labelAlign: 'right',
      parentId: 'root',
      exposedVariables: EXPOSED_VARIABLES,
    })
    .addConfigurableActionConfigurator({
      id: 'F940D7A0-AA6D-4368-A745-E130F8627472',
      name: 'cancelButtonActionConfiguration',
      label: 'Action configuration',
      hidden: false,
      customVisibility: '',
      validate: {},
      settingsValidationErrors: [],
    })
    .addSectionSeparator({
      id: 'e576bbdf-8d92-4285-acae-dff5fcfb4ea4',
      name: 'onBeforeRenderSeparatorVisibility',
      parentId: 'root',
      label: 'On Before Render',
    })
    .addConfigurableActionConfigurator({
      id: 'ca210f0c-ac55-4b33-a7f5-be17cb3eeda5',
      name: 'onBeforeRenderActionConfiguration',
      label: 'Action configuration',
      hidden: false,
      customVisibility: '',
      validate: {},
      settingsValidationErrors: [],
    })
    .addSectionSeparator({
      id: 'ae7ae12f-afb8-44a7-a8cb-805550415aeb',
      name: 'otherSeparatorVisibility',
      parentId: 'root',
      label: 'Other',
    })
    .addCodeEditor({
      id: 'd2f01684-31e5-41a3-b32a-c23abc20e700',
      name: 'style',
      label: 'Style',
      parentId: 'root',
      validate: {},
      settingsValidationErrors: [],
      description: 'A script that returns the style of the element as an object. This should conform to CSSProperties',
      exposedVariables: [{ id: '', name: 'data', description: 'Form values', type: 'object' }],
      mode: 'dialog',
    })
    .addCodeEditor({
      id: '78f2f5ee-9826-4567-a938-d7bc03ba90ac',
      name: 'customVisibility',
      label: 'Custom Visibility',
      labelAlign: 'right',
      parentId: 'root',
      hidden: false,
      customVisibility: null,
      description:
        'Enter custom visibility code.  You must return true to show the component. ' +
        'The global variable data is provided, and allows you to access the data of any form component, by using its API key.',
      validate: {},
      settingsValidationErrors: [],
      exposedVariables: [
        {
          id: '0d7cb4a3-1229-4362-8c47-9e036d4bcb9a',
          name: 'globalState',
          description: 'The Global state',
          type: 'object',
        },
        {
          id: 'd27f84c8-2489-493d-bc4c-5ec6ee33c233',
          name: 'data',
          description: 'Selected form values',
          type: 'object',
        },
      ],
    })
    .addCodeEditor({
      id: '377bbbee-d7f6-42bf-8f08-fc9303424518',
      name: 'customEnabled',
      label: 'Custom Enabled',
      labelAlign: 'right',
      parentId: 'root',
      hidden: false,
      customEnabled: null,
      description:
        'Enter custom enabled code.  You must return true to enable the component. ' +
        'The global variable data is provided, and allows you to access the data of any form component, by using its API key.',
      validate: {},
      settingsValidationErrors: [],
      exposedVariables: [
        {
          id: 'b466ad1e-a329-4fd1-a40d-10aec4324001',
          name: 'globalState',
          description: 'The Global state',
          type: 'object',
        },
        {
          id: '4f1bde14-7446-41ea-9702-f31bfefc66fe',
          name: 'data',
          description: 'Selected form values',
          type: 'object',
        },
      ],
    })
    .addEditableTagGroupProps({
      id: '3d24cc31-a797-40b8-b178-1e77eabb69c4',
      name: 'permissions',
      label: 'Permissions',
      labelAlign: 'right',
      parentId: 'root',
      hidden: false,
      customVisibility: null,
      validate: {},
    })
    .toJson();
