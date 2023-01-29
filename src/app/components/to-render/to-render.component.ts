import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-to-render',
  templateUrl: './to-render.component.html',
  styleUrls: ['./to-render.component.scss'],
})
/**
 * assign remove manager detail SNACKBAR
 */
export class ToRenderComponent implements OnInit {
  @Input() component!: any;
  message: any;
  action: any;
  buildings!: any[];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    console.log('to-render component', this.action);
  }

  openModalThatCameAsComponent() {
    console.log(
      'here pass this component to a modal service to open it WITH THE config received',
      this.component
    );
    const config = {
      message: this.message,
      action: this.action,
      buildings: this.buildings
    }
    const modal = this.modalService.open(this.component)
    modal.componentInstance.config = config
  }
}
