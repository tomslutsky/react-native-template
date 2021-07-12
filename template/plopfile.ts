import {NodePlopAPI} from 'plop';

module.exports = function (plop: NodePlopAPI) {
  // create your generators here
  plop.setGenerator('screen', {
    description: 'Application Screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter screen name',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'lib/screens/{{name}}.tsx',
        templateFile: 'plop-templates/screen.hbs',
      },
    ], // array of actions
  });
};
