import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  irCarrinho(){
    this.router.navigate(["carrinho"]);
  }

  irProdutos(){
    this.router.navigate(["produtos"]);
  }

  irContatos(){
    this.router.navigate(["contato"]);
  }
}
