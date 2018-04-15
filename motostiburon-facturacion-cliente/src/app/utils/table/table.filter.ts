import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'tablefilter',
    pure: false
})
export class TableFilter implements PipeTransform {

    transform(items: any[], filters: string[], identifiers: string[]): any[] {
        console.log("Filtering");
        console.log(items);
        console.log(filters);
        console.log(identifiers);

        if (!items) return [];

        if (!filters) return items;

        return items.filter(it => {
            return this.hasToBeReturned(it,filters,identifiers);
        });
    }
    
    private hasToBeReturned(item: any,  filters: string[], identifiers: string[] ) : boolean {
        for(let i = 0; i < identifiers.length; i++){
            let fieldStr = item[identifiers[i]] + "";
            let filter = ( filters[i] )? filters[i].toLowerCase() : "";
            if(!fieldStr.toLowerCase().includes(filter)){
                return false;
            }
        }
        
        return true;
    }
}