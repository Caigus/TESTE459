import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluguel } from '../models/Aluguel';
import { MatSliderModule } from '@angular/material/slider';
import { dashboard } from '../models/Dash';

@Component({
  selector: 'app-Aluguel',
  templateUrl: './Aluguel.component.html',
  styleUrls: ['./Aluguel.component.css']
})
export class AluguelComponent implements OnInit {

  titulo = 'Imovéis Registrados';
  public aluSelecionado : Aluguel | any;
  public textSimple!: string ;
  public aluForm!: FormGroup;
  
  public Dash = [
    {id:1, nome:'Rua Professor Moraes, Savassi', valor:'R$ 2.200'}, 
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm(){
    this.aluForm = this.fb.group({
      id:['', Validators.required],
      nome:['', Validators.required],
      valor:['', Validators.required]
    });
  }

  aluSubmit(){
    console.log(this.aluForm.value);
  }

  aluSelect(alu: any){
    this.aluSelecionado = alu;
    this.aluForm.patchValue(alu);
  }

  voltar(){
    this.aluSelecionado=null;
  }
}