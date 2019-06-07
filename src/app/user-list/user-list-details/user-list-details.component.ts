import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserEntity} from '../../shared/entity/user.entity';

@Component({
  selector: 'app-user-list-details',
  templateUrl: './user-list-details.component.html',
  styleUrls: ['./user-list-details.component.css']
})
export class UserListDetailsComponent implements OnInit {

  // @Input() userList: UserEntity[];

  @Input() dataSource: UserEntity[];
  @Input() displayedColumns: string[];

  @Input() pageIndex: number;
  @Input() pageSize: number;
  @Input() length: number;

  @Output() paginateEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  paginateEmit(event: any) {
    this.paginateEmitter.emit(event);
  }
}
