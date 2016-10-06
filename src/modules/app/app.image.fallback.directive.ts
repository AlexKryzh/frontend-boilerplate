import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[src-fallback]'
})
export class ImageFallbackDirective {
    @Input('src-fallback') imgSrc: string;
    private el: HTMLElement;
    private isApplied: boolean = false;
    private EVENT_TYPE: string = 'error';

    constructor(el: ElementRef) {
        console.log('fallback');
        this.el = el.nativeElement;
        this.el.addEventListener(this.EVENT_TYPE, this.onError.bind(this))
    }

    private onError() {
        this.removeEvents();

        if (!this.isApplied) {
          this.isApplied = true;
          this.el.setAttribute('src', this.imgSrc);
        }
    }

    private removeEvents() {
        this.el.removeEventListener(this.EVENT_TYPE, this.onError);
    }

    ngOnDestroy() {
        this.removeEvents();
    }
    // @Input('src-fallback') fallbackSrc: string;
    // @Input() src: string;
    // constructor(el: ElementRef, renderer: Renderer) {
    //    //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    // }

    // @HostListener('error') onError() {
    //     console.log('replace1');
    //     if (this.url !== this.fallbackUrl) {
    //         this.replaceSrc();
    //     }
    // }

    // updateSrc(){
    //     console.log('replace2');
    //     this.src = this.fallbackSrc;
    // }

}

//     link(scope: any, element: any, attrs: any){
//         element.bind('error', function() {
//             if (attrs.src !== attrs.defaultImage) {
//                 attrs.$set('src', attrs.defaultImage);
//                 scope.src = attrs.defaultImage;
//             }
//         });
//     }
// }