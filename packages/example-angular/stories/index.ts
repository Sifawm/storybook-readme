import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/angular';
import { withReadme, withDocs, doc } from 'storybook-readme';

import { ButtonComponent } from '../components/button/button.component';

const CommonFooterDocs = require('../components/COMMON_FOOTER.md');
const ButtonReadme = require('../components/button/README.md');
const ButtonDocs = require('../components/button/DOCS.md');

// withDocs.addFooterDocs(CommonFooterDocs);

// const withDocsCustom = withDocs({
//   PreviewComponent: ({ children }) => (
//     <div
//       style={{
//         textAlign: 'center',
//         padding: '25px',
//         margin: '25px 0',
//         boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       {children}
//     </div>
//   ),
//   FooterComponent: ({ children }) => (
//     <div
//       style={{
//         padding: '25px',
//         background: 'rgba(246, 255, 0, 0.23)',
//         borderTop: '2px solid rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       {children}
//     </div>
//   ),
// });

storiesOf('Custom Preview and Footer', module)
  .addDecorator(withKnobs)
  // .addDecorator(withDocsCustom(ButtonDocs))
  .add('Button', () => ({
    component: ButtonComponent,
    props: {
      click: action('clicked'),
      alert: boolean('alert', false),
      success: boolean('success', false),
      label: text('label', 'Hello Im Button')
    }
  }));

storiesOf('With Docs and Readme', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonDocs))
  .addDecorator(withReadme(ButtonReadme))
  .add('Button', () => ({
    component: ButtonComponent,
    props: {
      click: action('clicked'),
      alert: boolean('alert', false),
      success: boolean('success', false),
      label: text('label', 'Hello Im Button')
    }
  }));

// withReadme and withDocs
storiesOf('withDocs and withReadme', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonDocs))
  .addDecorator(withReadme(ButtonReadme))
  .add('Button', () => ({
    component: ButtonComponent,
    props: {
      click: action('clicked'),
      alert: boolean('alert', false),
      success: boolean('success', false),
      label: text('label', 'Hello Im Button')
    }
  }));

// withDocs
storiesOf('withReadme/ As Decorator', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ButtonReadme))
  .add('Button', () => ({
    component: ButtonComponent,
    props: {
      click: action('clicked'),
      alert: boolean('alert', false),
      success: boolean('success', false),
      label: text('label', 'Hello Im Button')
    }
  }));

storiesOf('withReadme/As HOC', module)
  .addDecorator(withKnobs)
  .add('Button', withReadme(ButtonReadme, () => ({
    component: ButtonComponent,
    props: {
      click: action('clicked'),
      alert: boolean('alert', false),
      success: boolean('success', false),
      label: text('label', 'Hello Im Button')
    }
  })));

// with docs
storiesOf('withDocs/As Decorator', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonReadme))
  .add('Button', () => ({
    component: ButtonComponent,
    props: {
      click: action('clicked'),
      alert: boolean('alert', false),
      success: boolean('success', false),
      label: text('label', 'Hello Im Button')
    }
  }));

storiesOf('withDocs/As HOC', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withDocs(ButtonReadme, () => ({
      component: ButtonComponent,
      props: {
        click: action('clicked'),
        alert: boolean('alert', false),
        success: boolean('success', false),
        label: text('label', 'Hello Im Button')
      }
    }))
  );

// storiesOf('Doc', module).add('Common', doc(ButtonReadme));
