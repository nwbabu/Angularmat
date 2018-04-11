import { NgModule } from '@angular/core';
import {  MatMenuModule, MatButtonModule, MatIconModule, MatCardModule,MatFormFieldModule,MatSelectModule,
    MatInputModule,MatProgressSpinnerModule,MAT_DIALOG_DATA,MatDatepickerModule,MatNativeDateModule} 
from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule(
{
    imports:[MatMenuModule, MatIconModule, MatCardModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatProgressSpinnerModule,
        MatSnackBarModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule],
      exports:[MatMenuModule, MatIconModule, MatCardModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatProgressSpinnerModule,
        MatSnackBarModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule],
})

export class Meterials
{
}
