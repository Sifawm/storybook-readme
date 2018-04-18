import React from 'react';
import ReactDOM from 'react-dom';
import StoryPreview from './components/StoryPreview';
import FooterDocs from './components/FooterDocs';

import { prepareComponent } from "./helper";
import { getStoryComponent } from "./components/Story.js";

import commonHandler from '../common';
import highlight from '../../services/highlite';

function withDocsCallAsHoc({ docs, config, storyFn }) {
  return ({ kind, story }) =>
    prepareComponent(storyFn, { kind, story }, getStoryComponent({ docs, config }));
}

function withDocsCallAsDecorator({ docs, config }) {
  return (storyFn, { kind, story }) =>
    prepareComponent(storyFn, { kind, story }, getStoryComponent({ docs, config }));
}

function doc({ docs, config }) {
  return ({ kind, story }) =>
    React.createElement(Story, {
      docs: {},
      config: {
        ...config,
        PreviewComponent: ({ children }) => <div>{children}</div>,
      },
      storyFn: () =>
        docs.map((doc, index) => (
          <div
            key={index}
            className={'markdown-body'}
            dangerouslySetInnerHTML={{ __html: doc }}
          />
        )),
      kind,
      story,
    });
}

export default {
  doc,
  withReadme: commonHandler.withReadme,
  withDocs: {
    callAsDecorator: withDocsCallAsDecorator,
    callAsHoc: withDocsCallAsHoc,
  },
};
