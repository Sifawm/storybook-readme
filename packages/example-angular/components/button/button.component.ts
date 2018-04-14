import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label = '';

  @Input() alert = false;
  @Input() success = false;

  @Output() click = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit() {
  }
}
