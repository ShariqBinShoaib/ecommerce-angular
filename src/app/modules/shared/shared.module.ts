import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Shared components
import { CardComponent } from 'src/app/components/shared/card/card.component';
import { ButtonComponent } from 'src/app/components/shared/button/button.component';
import { SkeletonComponent } from 'src/app/components/shared/skeleton/skeleton.component';
import { SelectComponent } from 'src/app/components/shared/select/select.component';
import { InputComponent } from 'src/app/components/shared/input/input.component';
import { SvgIconComponent } from 'src/app/components/shared/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    SvgIconComponent,
    SkeletonComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CardComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    SvgIconComponent,
    SkeletonComponent,
  ],
})
export class SharedModule {}
