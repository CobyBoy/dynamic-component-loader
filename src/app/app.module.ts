import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
import { TestComponent } from './components/test/test.component';
import { ToRenderComponent } from './components/to-render/to-render.component';
import { ModalTestComponent } from './components/modal-test/modal-test.component';
import { DynamicHostDirective } from './directives/dynamic-host.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CustomSnackbarComponent,
    TestComponent,
    ToRenderComponent,
    ModalTestComponent,
    DynamicHostDirective,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
