import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-test-output',
  templateUrl: './test-output.component.html',
  styleUrls: ['./test-output.component.css']
})
export class TestOutputComponent implements OnInit {

  @Output() public myOutput = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  buttonClick() {
    this.myOutput.emit('Hello');
  }

}
