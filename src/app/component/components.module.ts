import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlazofijoComponent } from "./plazofijo/plazofijo.component";

@NgModule({
    declarations: [
        PlazofijoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PlazofijoComponent
    ]
        
})
export class ComponentsModule{}