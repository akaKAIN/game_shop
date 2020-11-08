import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit {
  @Input() srcImage: string;
  @Input() altImage: string;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent);
  }
  ngOnInit(): void {
  }

}
