import { UserSharedDataUserService } from './user-shared-data-user.service';
import { UserSharedDataUserAccountService } from './user-shared-data-user-account.service';

export const userSharedServices = [
    UserSharedDataUserService,
    UserSharedDataUserAccountService
]

export * from './user-shared-data-user-account.service';
export * from './user-shared-data-user.service';
