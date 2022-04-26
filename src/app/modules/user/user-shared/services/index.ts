import { UserSharedCreateAccountService } from './user-shared-create-account.service';
import { UserSharedFetchAccountService } from './user-shared-fetch-account.service';

export const userSharedServices = [
    UserSharedCreateAccountService,
    UserSharedFetchAccountService,

]

export * from './user-shared-create-account.service';
export * from './user-shared-fetch-account.service';
