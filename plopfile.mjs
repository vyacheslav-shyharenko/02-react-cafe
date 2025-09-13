export default function (plop) {
  // 👇 обовʼязково
  plop.setHelper('eq', (a, b) => String(a) === String(b));

  plop.setGenerator('component', {
    description: 'React component with SCSS Module or CSS (TypeScript)',
    prompts: [
      { type: 'input', name: 'name', message: 'Component name?' },
      {
        type: 'list',
        name: 'style',
        message: 'Which style type?',
        choices: [
          { name: 'SCSS Module', value: 'scss' },
          { name: 'Plain CSS', value: 'css' },
        ],
        default: 'scss',
      },
    ],
    actions(answers) {
      const base = 'src/App/components/{{pascalCase name}}';
      const isScss = answers.style === 'scss';

      return [
        {
          type: 'add',
          path: `${base}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/component-tsx.hbs',
        },
        {
          type: 'add',
          path: isScss
            ? `${base}/{{pascalCase name}}.module.scss`
            : `${base}/{{pascalCase name}}.css`,
          templateFile: isScss ? 'plop-templates/style-scss.hbs' : 'plop-templates/style-css.hbs',
        },
      ];
    },
  });
}
