import {Component, OnInit} from '@angular/core';
import {UserPageEntity} from '../shared/entity/user-page.entity';
import {UserEntity} from '../shared/entity/user.entity';
import {UserService} from '../shared/service/user.service';

const FIRST_PAGE = 1;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'details'];

  userPage: UserPageEntity;
  dataSource: UserEntity[];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.getUserPage(FIRST_PAGE);
  }

  getUserPage(page: number) {
    this.userService.fetchUserPage(page)
      .subscribe(data => {
        console.log(data);
        this.userPage = data;
        this.dataSource = data.data;
      });
  }

  handlePagination(event: any) {
    console.log(event);
    let index = 0;
    // TODO: pff lol
    if (event.pageIndex === 0) {
      index = 1;
    } else if (event.pageIndex === 1) {
      index = 2;
    } else {
      index = event.pageIndex + 1;
    }
    this.userService.fetchUserPage(index)
      .subscribe(data => {
        // console.log(data);
        this.userPage = data;
        this.dataSource = data.data;
      });
  }
}
