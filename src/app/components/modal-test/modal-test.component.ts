import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss'],
})
export class ModalTestComponent implements OnInit {
  config: any;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.config);
  }

  closeModal() {
    this.activeModal.close()
  }
}
