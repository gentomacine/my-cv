import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
constructor(private usersservice:UsersService){

}

    @Post('/signup')
    createUser(@Body() body:CreateUserDto){
        this.usersservice.create(body.email, body.password)
        
    }
}
