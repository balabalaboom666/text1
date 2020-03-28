import { Component } from '@angular/core';   //引入包

@Component({   //@是一个注释，表示下面的类是一个组件
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App启动了';
}
