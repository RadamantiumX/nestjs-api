/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    // Usamos los decoradores "@Post" para crear los ENDPOINT
    @Post('signup')
    signup(){
        return 'I am signed up'
    }
    @Post('signin')
    signin(){
        return 'I am signed in'
    }
}