export interface IProcess{
    id: number;
    headerId: number | null;
    name: string;
    weight: number;
    isDelete: boolean;
    inverseHeader: IProcess[]
}
export class Process implements IProcess{
    headerId: number | null = null;
    name: string = '';
    weight: number = 0;
    isDelete: boolean =false;
    inverseHeader: IProcess[] = [];
    id: number = 0;
}
