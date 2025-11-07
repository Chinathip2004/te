import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProcess, Process } from "../models/process";

@Injectable({ providedIn: 'root'})
export class ProcessService {
    private apiUrl = "https://localhost:7089/api/Process";
    constructor(private http: HttpClient) {}

    getAll(): Observable<Process[]> {
        return this.http.get<Process[]>(this.apiUrl+'/GetAll');
    }
    
    saveProcess(processes: IProcess[]){
        return this.http.put<IProcess[]>(this.apiUrl +"/" +"Edit", processes)
    }
}