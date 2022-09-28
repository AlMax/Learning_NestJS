import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    public signin() {
        return {
            status: 1,
            message: 'signed'
        };
    }

    public signup() {
        return {
            status: 1,
            message: 'signup completed'
        };
    }
}
