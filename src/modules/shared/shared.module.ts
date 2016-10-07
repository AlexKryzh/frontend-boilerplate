import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';
import { ImageFallbackDirective } from './image.fallback.directive';

@NgModule({
    imports: [ CommonModule, TranslateModule ],
    declarations: [ ImageFallbackDirective ],
    exports: [ CommonModule, TranslateModule, ImageFallbackDirective ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: SharedModule,
          providers: [ TranslateModule ]
        };
    }
}