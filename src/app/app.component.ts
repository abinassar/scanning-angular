import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scanning-angular-app';

  constructor(private _dataService: DataService){
    this.getData();
  }

  getData(){
    this._dataService.getData().subscribe(
      (data) => console.log("Esta es la data del servidor websocket", data)
    )
  }

}
