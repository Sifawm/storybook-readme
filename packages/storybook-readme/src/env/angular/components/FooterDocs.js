import { Component } from "@angular/core";

const template = `
  <div
    [ngStyle]="{
      borderTop: '1px dashed #e5e5e5',
      paddingTop: '16px'
    }">

    <ng-content></ng-content>

  </div>
`

function FooterDocsComponent() {

}

FooterDocsComponent.annotations = [
  new Component({
    selector: 'story-readme-footer',
    template: template
  })
];

export { FooterDocsComponent };