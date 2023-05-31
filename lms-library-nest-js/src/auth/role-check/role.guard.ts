import { SetMetadata } from '@nestjs/common';
import { Role } from '../../user/entity';

export const ROLE_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLE_KEY, roles);
