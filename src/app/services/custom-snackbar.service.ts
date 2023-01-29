import { Injectable } from '@angular/core';
import { CustomSnackbarComponent } from '../components/custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {
private snackbar!: CustomSnackbarComponent;
  constructor() { }

  setSnackbar(snackbar: CustomSnackbarComponent) {
    this.snackbar = snackbar;
  }

  showComponentFromService(componentToRender: any, configWithModalComponent: any) {
    this.snackbar.show(componentToRender, configWithModalComponent);
  }
}
