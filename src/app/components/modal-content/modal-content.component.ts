import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  @Input() name;
  @Input() item;
  @Input() img;
  @Input() header;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.img)
  }

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
