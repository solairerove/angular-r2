import {UserEntity} from './user.entity';

export interface UserPageEntity {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserEntity[];
}
