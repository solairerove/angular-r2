import {Component, Input, OnInit} from '@angular/core';
import {UserEntity} from '../../shared/entity/user.entity';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserEntity;

  constructor() {

  }

  ngOnInit(): void {
  }
}
