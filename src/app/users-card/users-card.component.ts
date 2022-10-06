import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from 'rxjs'
import { User } from '../user';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-users-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent implements OnInit {
  @Input() User!:User;
  @Input() index!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
