import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
article : Article = new Article;
  constructor(private articleService: ArticleService,private router: Router) { }

  ngOnInit(): void {
  }
  addArticle(){
    console.log(this.article);
    this.articleService.addArticle(this.article).subscribe();
    this.router.navigate(['article']);
  }

}
