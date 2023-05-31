import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const JWTStrategy_base: new (...args: any[]) => Strategy;
export declare class JWTStrategy extends JWTStrategy_base {
    constructor(config: ConfigService);
    validate(payload: any): any;
}
export {};
