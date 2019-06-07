import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserDetailsEntity} from '../shared/entity/user-details.entity';
import {UserService} from '../shared/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserDetailsEntity;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.initFromRoute();

  }

  initFromRoute() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.getUser(id);
  }

  getUser(userId: number) {
    this.userService.fetchUserById(userId)
      .subscribe(data => {
        this.user = data;
        console.log(data);
      });
  }
}
