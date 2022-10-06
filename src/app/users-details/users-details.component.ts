import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
    User!:User;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    route.params.subscribe((x:any)=>{
      apiService.getUserById(x.index).subscribe(user=>{
        this.User = user
      });
    })
   }

  ngOnInit(): void {
  }

}
