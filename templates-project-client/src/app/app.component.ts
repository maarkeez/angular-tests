import { Component } from '@angular/core'
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
        
    // MARK: - Local Variables
    private this._data = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    private this._header = ["First", "Second", "Third"];
    private this._showAllColumns = true;
    private this._selectedRow=[];
    public showColum = [true,true,true];
    
    // MARK: - IBActions
    set showAllColumns(isShown : boolean) {
        this._showAllColumns = isShown;
    }
    
    set selectedRow(object: any) {
        this._selectedRow = object;
    }
    
    // MARK: - LIFE VC
    get data() {
        return this._data;
    }

    get header(): string[] {
        return this._header;
    }
    
    get showAllColumns() : boolean {
        return this._showAllColumns;
    }
    
    get selectedRow() {
        return this._selectedRow;
    }
    
   
    
    // MARK: - Utils
}
