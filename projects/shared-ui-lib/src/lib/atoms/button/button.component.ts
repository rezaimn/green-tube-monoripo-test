import { Component, OnInit } from '@angular/core';
import {SharedUiTranslatorService} from "../../utils/shared-ui-translator.service";

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(public translator: SharedUiTranslatorService) { }

  ngOnInit(): void {
  }

}
