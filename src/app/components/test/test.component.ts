import { Component, OnInit } from '@angular/core';
import { CustomSnackbarService } from 'src/app/services/custom-snackbar.service';
import { ModalTestComponent } from '../modal-test/modal-test.component';
import { ToRenderComponent } from '../to-render/to-render.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private customSnackbarService: CustomSnackbarService) { }

  ngOnInit(): void {
  }

  open() {
    const config = { action: 'No action needed', buildings: [1,2,3], message: { title: 'Hello' }, component: ModalTestComponent};
    this.customSnackbarService.showComponentFromService(ToRenderComponent,config);
  }

}
