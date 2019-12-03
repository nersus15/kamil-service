import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    @Get('google')
    @UseGuards(AuthGuard('google'))
    googleLogin() {
        // initiates the Google OAuth2 login flow
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req, @Res() res) {
        // handles the Google OAuth2 callback
        const jwt: string = req.user.jwt;
        let response;
        if (jwt) {
            response = {
                message: "Login Success",
                token: jwt
            };
        }

        else {
            response = {
                message: "Login Failed",
                token: null
            };
        }
        res.send(response);

    }
    @Get('protected')
    @UseGuards(AuthGuard('jwt'))
    protectedResource() {
        return 'JWT is working!';
    }
}
