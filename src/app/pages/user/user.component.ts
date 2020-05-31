import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user:any = null;
  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private api:ApiService,
  ) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id){
      this.loadUser(this.rutaActiva.snapshot.params.id);
    }else{
      this.router.navigate(['list-user']);
    }
  }

  async loadUser(id){
    const data = await this.api.loadUser(id);
    if(!data.error){
      //console.log(data);
      this.user = data;
      return;
    }
    this.router.navigate(['list-user']);
  }
}
