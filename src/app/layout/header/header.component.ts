import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedEmitter = new EventEmitter<string>();
  activeSelector:string = 'recipe';
  constructor() { }

  ngOnInit(): void {
  }

  onSelectData(selected: string) {
    this.selectedEmitter.emit(selected);
    this.activeSelector = selected
  }

}
