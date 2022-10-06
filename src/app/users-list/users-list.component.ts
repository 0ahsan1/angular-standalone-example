import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import {Observable} from 'rxjs'
import { User } from '../user';
import { UsersCardComponent } from '../users-card/users-card.component';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UsersCardComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private apiService: ApiService) { }
      $Users!: Observable<User[]>;

  ngOnInit(): void {
    this.$Users =this.apiService.getAllUsers()
  }

}
