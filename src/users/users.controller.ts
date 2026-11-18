import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto.js';

@Controller('auth')
export class UsersController {

    @Post('/signup')
    Create(@Body() body: CreateUserDto){
        console.log(body);
        
    }   
}
