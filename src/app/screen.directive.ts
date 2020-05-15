import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[onlyForScreen]'
})
export class AppScreenDirective implements OnInit {

  currentMedia: string;

  @Input('onlyForScreen')
  public useFor: string;

  constructor(private el: ElementRef, private mediaObserver: MediaObserver) { }

  ngOnInit() {
    this.mediaObserver.media$.subscribe(value => {
      value.mqAlias === this.useFor ? this.el.nativeElement.style.display = 'block' : this.el.nativeElement.style.display = 'none';
    });
  }
}
