import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


// export class SerializeInterceptor implements NestInterceptor{
//     intercept(context: ExecutionContext, handler: CallHandler<any>){
        
//     }

// }
