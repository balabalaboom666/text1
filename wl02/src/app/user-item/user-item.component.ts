import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name2:string;  //加上input注释

  constructor() { 
    //this.name = 'Felippe'; //输出的内容
  }


  ngOnInit(): void {
  }

}
