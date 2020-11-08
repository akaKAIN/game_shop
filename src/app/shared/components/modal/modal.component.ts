import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() srcImage: string;
  @Input() altImage: string;

  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
