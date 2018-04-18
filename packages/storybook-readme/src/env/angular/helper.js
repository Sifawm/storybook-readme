/* eslint no-underscore-dangle: 0 */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Component, SimpleChange, ChangeDetectorRef } from '@angular/core';
import { getParameters, getAnnotations } from './utils';

import { StoryPreviewComponent } from "./components/StoryPreview";
import { FooterDocsComponent } from "./components/FooterDocs";

const getComponentMetadata = ({ component, props = {}, moduleMetadata = {} }) => {
  if (!component || typeof component !== 'function') throw new Error('No valid component provided');

  const componentMeta = getAnnotations(component)[0] || {};
  const paramsMetadata = getParameters(component);

  return {
    component,
    props,
    componentMeta,
    moduleMetadata,
    params: paramsMetadata,
  };
};

const createComponentFromTemplate = (template, styles) => {
  const componentClass = class DynamicComponent {};

  return Component({
    template,
    styles,
  })(componentClass);
};

export function prepareComponent(storyFn, context, getAnnotatedComponent) {
  const story = storyFn(context);
  let { component } = story;
  const { template, styles } = story;

  if (!component) {
    component = createComponentFromTemplate(template, styles);
  }

  const { componentMeta, props, params, moduleMetadata } = getComponentMetadata({
    ...story,
    component,
  });

  moduleMetadata.declarations = [
    ...(moduleMetadata.declarations || []),
    FooterDocsComponent,
    StoryPreviewComponent
  ];

  if (!componentMeta && component) throw new Error('No component metadata available');

  const AnnotatedComponent = getAnnotatedComponent({
    componentMeta,
    component,
    params
  });

  return {
    component: AnnotatedComponent,
    props,
    moduleMetadata,
  };
}