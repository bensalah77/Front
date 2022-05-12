import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit {
  article : Article = new Article;
  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArtById();
  }
  updateArticle(id?: number ){
    console.log(this.article);
    this.articleService.updatearticleById(this.article).subscribe();
    this.router.navigate(['article']);
  }
  getArtById(){
    this.articleService.getArticleById().subscribe(data=>{
      this.article = data;
    });
  }
}
