import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalImageData} from '../../../models/base';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  srcImage: string;
  altImage: string;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalImageData) {
  }

  closeModal(): void {
    console.log('closing modal window');
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.title = this.data.title;
    this.srcImage = this.data.src;
    this.altImage = this.data.alt;
  }
}
