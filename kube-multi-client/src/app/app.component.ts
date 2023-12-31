import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	data: any

	title: string = 'kube-multi-client';
	url: string = 'http://192.168.49.2:31112/data';

	constructor(private http: HttpClient) {
		this.getData();
	}

	getData() {
		this.http.get<any[]>(this.url).subscribe(data => {
			this.data = data;
		},
			error => {
				console.log('Error: ', error);
			}
		);
	}
}
