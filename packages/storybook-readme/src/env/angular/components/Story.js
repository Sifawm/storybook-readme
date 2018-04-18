import { Component, ViewChild } from "@angular/core";

// import { getFooterDocsComponent } from "./FooterDocs";
import { getStoryPreviewComponent } from "./StoryPreview";

import highlight from '../../../services/highlite';

const template = (content) => `
    <div #highlight style="padding: 10px">
        <div *ngFor="let doc of storyReadme.docs.docsBeforePreview"
            class="markdown-body"
            [innerHTML]="doc">
        </div>

        <story-readme-preview>
            ${ content }
        </story-readme-preview>

        <div *ngFor="let doc of storyReadme.docs.docsAfterPreview"
            class="markdown-body"
            [innerHTML]="doc">
        </div>

        <story-readme-footer *ngIf="storyReadme.config.docsAtFooter">
            holas
        </story-readme-footer>
    </div>
`

export function getStoryComponent ({ docs, config }) {
    const PreviewComponent = config.PreviewComponent || getStoryPreviewComponent;
    // const FooterComponent = config.FooterComponent || FooterDocs;

    return ({ componentMeta, component, params }) => {
        componentMeta.template = template(componentMeta.template);
        componentMeta.queries = Object.assign({}, componentMeta.queries, { elementRef: new ViewChild("highlight") });

        const StoryComponent = function StoryComponent(cd, ...args) {
            component.call(this, ...args);
            this.cd = cd;

            this.storyReadme = {
                docs: docs || { docsBeforePreview: [], docsAfterPreview: [] },
                config
            }
        };

        StoryComponent.prototype = Object.create(component.prototype);
        StoryComponent.annotations = [new Component(componentMeta)];
        StoryComponent.parameters = [...params];

        StoryComponent.prototype.constructor = StoryComponent;

        StoryComponent.prototype.ngOnChanges = function onChanges(changes) {
            if (component.prototype.ngOnChanges) {
                component.prototype.ngOnChanges.call(this, changes);
            }

            highlight(this.elementRef.nativeElement);
        };

        StoryComponent.prototype.ngAfterViewInit = function onAfterViewInit() {
            if (component.prototype.ngAfterViewInit) {
                component.prototype.ngAfterViewInit.call(this, changes);
            }

            highlight(this.elementRef.nativeElement);
        }

        return StoryComponent;
    }
};