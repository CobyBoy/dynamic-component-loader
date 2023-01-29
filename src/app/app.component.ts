import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
import { CustomSnackbarService } from './services/custom-snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(CustomSnackbarComponent) customSnackbar!: CustomSnackbarComponent;
  title = 'modal-with-button';

  constructor(private snackbarService: CustomSnackbarService) {}

  ngAfterViewInit(): void {
    this.snackbarService.setSnackbar(this.customSnackbar);
  }
}
