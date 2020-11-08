import {Component, OnInit} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit {
  email: string;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent);
  }
  ngOnInit(): void {
  }

}
