import { Pipe, PipeTransform } from '@angular/core';
@Pipe({  name: 'arrange' })
export class ArrangeByPipe implements PipeTransform {

    transform(projects: Array<any>, args?: any): any {
        return projects.sort(function(a, b){
            if(a[args.property] < b[args.property]){
                return -1 * args.direction;
            }
            else if( a[args.property] > b[args.property]){
                return 1 * args.direction;
            }
            else{
                return 0;
            }
        });
    };
}