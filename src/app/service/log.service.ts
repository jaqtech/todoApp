import { Injectable } from "@angular/core";

@Injectable()
export class LogService{
    logInfo(msg:string){
        console.log(msg);
    }

    logError(){
        console.error();
    }
}