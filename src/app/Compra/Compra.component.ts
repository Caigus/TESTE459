import { Component, OnInit } from '@angular/core';
import { Compra } from '../models/Compra';

@Component({
  selector: 'app-Compra',
  templateUrl: './Compra.component.html',
  styleUrls: ['./Compra.component.css']
})
export class CompraComponent implements OnInit {
 
  titulo = 'Compras';
  public CompraSelecionado: Compra | any;

  public Compras = [
    {id: 1, nome:'Rua Professor Moraes, Savassi', valor: 'R$ 300.000'}, 
  ];

  constructor() { }

  ngOnInit() {
  }
  ComSelecionado(Compra:any) {
    this.CompraSelecionado=Compra
  } 

}
