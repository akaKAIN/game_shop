import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ModalImageData} from '../../../models/base';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
  providers: [{provide: MatDialogRef, useValue: {}}]
})
export class ModalImageComponent implements OnInit {
  @Input() title: string;
  @Input() srcImage: string;
  @Input() altImage: string;
  @Input() srcModalImage: string;

  constructor(public dialog: MatDialog) {
  }

  getDataModal(): ModalImageData {
    return {
      title: this.title,
      src: this.srcModalImage,
      alt: this.altImage
    };
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {data: this.getDataModal()});
  }

  ngOnInit(): void {
  }

}
