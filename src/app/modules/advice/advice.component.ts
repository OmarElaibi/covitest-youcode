import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('CoviTest | Conseils');
  }

  ngOnInit(): void {
  }

}
