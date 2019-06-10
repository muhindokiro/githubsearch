import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { GithubService } from "../services/github.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  providers: [GithubService]
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private githubService: GithubService,
    
  ) {
    this.user = this.githubService.user;
  }
  ngOnInit() {
    this.user = this.githubService.user;
  }
}
