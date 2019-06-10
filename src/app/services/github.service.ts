import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";


@Injectable({
  providedIn: "root" 
})
export class GithubService {
  
  user: User;

  
  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "", "", 0, 0, 0);
    
  }
  getProfileInfo(username) {
    interface ApiResponse {
    
      login: string;
      avatar_url: string;
      email: string;
      location: string;
      public_repos: number;
      html_url: string;
      followers: number;
      following: number;
    }
    const promise = new Promise((resolve) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            username +
            "?access_token=0ff610d62888f906dbf5c067b0c783b468b7462f"
        )
        .toPromise()
        .then(profile => {
        
          this.user.login = profile.login;
          this.user.avatar_url = profile.avatar_url;
          this.user.email = profile.email;
          this.user.location = profile.location;
          this.user.public_repos = profile.public_repos;
          this.user.html_url = profile.html_url;
          this.user.followers = profile.followers;
          this.user.following = profile.following;
          

          console.log(profile);
          resolve();
        });
    });
    return promise;
  }
  
}
