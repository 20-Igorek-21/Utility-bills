import { UserSharedCreateAccountService } from './user-shared-create-account.service';
import { UserSharedFetchAccountService } from './user-shared-fetch-account.service';
import {UserSharedChangeDataUserService} from './user-shared-change-data-user.service';

export const userSharedServices = [
    UserSharedCreateAccountService,
    UserSharedFetchAccountService,
    UserSharedChangeDataUserService
]

export * from './user-shared-create-account.service';
export * from './user-shared-fetch-account.service';
export * from './user-shared-change-data-user.service';
