import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {UserDetailsEntity} from '../entity/user-details.entity';
import {UserPageEntity} from '../entity/user-page.entity';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  fetchUserPage(page: number) {
    return this.http.get<UserPageEntity>(environment.fetchUserPage.concat(`?page=${page}`));
  }

  fetchUserById(id: number) {
    return this.http.get<UserDetailsEntity>(environment.fetchUserPage.concat(`/${id}`));
  }
}
