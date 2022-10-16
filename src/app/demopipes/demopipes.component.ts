import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Riya"
  today=Date();
  user={
    id:101,name:"Riya",DOB:'09-03-2001',salary:25000
  }
}
