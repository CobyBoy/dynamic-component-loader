import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicHostDirective } from 'src/app/directives/dynamic-host.directive';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss'],
})
export class CustomSnackbarComponent implements OnInit {
  hideSnackBarComponent: boolean = false;
  @ViewChild(DynamicHostDirective) dynamicHost!: DynamicHostDirective;
  constructor() {}

  ngOnInit(): void {}

  show(componentToRender: any, configWithModalComponent: any) {
    this.hideSnackBarComponent = true;
    this.setContainer(componentToRender, configWithModalComponent);
  }

  setContainer(componentToRender: any, configWithModalComponent: any) {
    this.dynamicHost.viewContainerRef.clear();
    const componentToRenderRef =
      this.dynamicHost.viewContainerRef.createComponent(componentToRender);
    console.log(componentToRenderRef, configWithModalComponent);
    Object.assign(componentToRenderRef.instance as any, configWithModalComponent);
  }
}
