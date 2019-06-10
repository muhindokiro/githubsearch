import { Component, OnInit } from "@angular/core";
import { GithubService } from "../services/github.service";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"]
})
export class SearchFormComponent implements OnInit {
  submitSearch(name) {
    this.githubService.getProfileInfo(name.target.value);
  
  }
  constructor(
    private githubService: GithubService,
  ) {}
  ngOnInit() {}
}
