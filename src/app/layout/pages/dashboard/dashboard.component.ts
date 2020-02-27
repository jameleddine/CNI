import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
  users:any = [];
  spinner=false;
  constructor(private crud:CrudService, private route:Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.spinner = true;
    this.crud.getAllUsers().subscribe(res=>{
      this.users = res;
      this.spinner = false;
    })
  }
  delete(user){
    this.spinner = true;
    this.crud.deleteUserById(user.id).subscribe(res=>{
      console.log(res);
      this.getAll();
      this.spinner = false;
    })
  }

  edit(user){
    this.route.navigate(['/gestion',user.id])
  }

}
