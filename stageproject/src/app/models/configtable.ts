export class ConfigTable {
    column_name!:string;
    type!: string;
    taille!:number;


    constructor(column_name:string,type:string,taille:number) {
            this.column_name=column_name;
            this.type=type;
            this.taille=taille;
    };
    }