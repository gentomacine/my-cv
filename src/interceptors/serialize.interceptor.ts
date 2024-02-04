import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";



export class SerializeInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>{
        // Run something before a request is handled
        // By the request handler
        console.log(" Im running before the handler",context);
        return handler.handle().pipe(
            map(( data: any)=>{
                // Run something before the response is sent out
                console.log('Im running before response is sent out',data);
            })
        )
    }

}
