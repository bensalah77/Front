import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
article? :Article [];
content?: any;
  constructor(private articleservice: ArticleService, private router: Router) { }

  ngOnInit(): void {
    /*
    this.article =[{
      idArticle: 1,
      content: 'barcha klem fel feragh',
      date: '2020-05-05'
    },
    {
      idArticle: 2,
      content: 'kipembre',
      date: '2005-06-11'
    },
    {
      idArticle: 3,
      content: 'nched nzayen bik slata',
      date: '2022-07-19'
    },    
  ]
  */
 this.getallArticles();
  }


  getallArticles(){
    this.articleservice.getallArticles().subscribe(data=>
      {this.article= data;}
      )
  }

  updateArticleX(idArticle? : number){
    console.log("id = ", idArticle);
    this.router.navigate(['upd-article']);
  this.articleservice.getid(idArticle);
  }
  AddArtX(){
    this.router.navigate(['add-article']);
  } 
  deleteArticleX(id?: number){
    this.articleservice.deletearticleById(id).subscribe();
    this.router.navigate(['article']);
    window.location.reload();
  }
  
  Search(){
    if(this.content == ""){
      this.ngOnInit();
    }else{
      this.article = this.article?.filter(res =>{
        return res.content?.toLocaleLowerCase().match(this.content.toLocaleLowerCase())
      })
    }
  }


}
