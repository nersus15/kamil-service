import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService, Provider } from "./auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly authService: AuthService) {
        super({
            clientID: '535326091018-h5idr7sjsdnkrikb8eikg2o83sd3u6b5.apps.googleusercontent.com',
            clientSecret: '3eSugMviYfcm7OgzkE8sKmxJ',
            callbackURL: 'http://localhost:3000/auth/google/callback',
            passReqToCallback: true,
            scope: ['profile', 'email']
        })
    }
    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function) {
        try {
            console.log(profile);
            const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
            const user = {
                jwt
            }
            done(null, user);
        } catch (err) {
            done(err, false);
        }
    }
}