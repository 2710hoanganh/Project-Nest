import { Role } from '../../user/entity';
export declare const ROLE_KEY = "roles";
export declare const Roles: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
