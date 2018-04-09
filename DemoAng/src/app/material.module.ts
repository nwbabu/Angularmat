import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatMenuModule, MatButtonModule, MatIconModule, MatCardModule,MatFormFieldModule,MatSelectModule,
    MatInputModule,MatProgressSpinnerModule} 
from '@angular/material';
import{} from  '@angular/material';

@NgModule(
{
  imports:[MatMenuModule, MatIconModule, MatCardModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatProgressSpinnerModule],
  exports:[MatMenuModule, MatIconModule, MatCardModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatProgressSpinnerModule],
})
export class MaterialModule { } 