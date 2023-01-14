import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Output() hideFooterFromChild = new EventEmitter();
  @Input()  footerHide=false;
  hideFooter:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  hideFooterComponent (){
    this.hideFooterFromChild.emit(
   false
    );
  }

}
