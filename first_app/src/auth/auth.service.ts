import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) {
    }

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
