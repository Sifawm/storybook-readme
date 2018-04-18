import { Component } from "@angular/core";

const template = `
    <div [ngStyle]="{
      position: 'relative',
      boxSizing: 'border-box',
      margin: '16px 0 16px 0',
      padding: '50px 35px',
      border: '1px dashed #e5e5e5',
      backgroundColor: '#ffffff',
      transition: 'background-color 0.2s',
      textAlign: 'center'
    }">
      <ng-content></ng-content>
    </div>
`

function StoryPreviewComponent () {

}

StoryPreviewComponent.annotations = [
  new Component({
    selector: "story-readme-preview",
    template: template
  })
]

export { StoryPreviewComponent };