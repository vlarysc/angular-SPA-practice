import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
  telefone: string;
  opcoes: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Manoel Francisco',
    email: 'manoel@gmail.com',
    telefone: '(00) 0 0000-0000',
    opcoes: 'oi',
  },
  {
    id: 2,
    name: 'Renata Ribeiros',
    email: 'renata@gmail.com',
    telefone: '(00) 0 0000-0000',
    opcoes: 'oi',
  },
  {
    id: 3,
    name: 'André Rodrigues',
    email: 'andre@gmail.com',
    telefone: '(00) 0 0000-0000',
    opcoes: 'oi',
  },
  {
    id: 4,
    name: 'Arthur Silva',
    email: 'arthur@gmail.com',
    telefone: '(00) 0 0000-0000',
    opcoes: 'oi',
  },
  {
    id: 5,
    name: 'Diego Borinato',
    email: 'diego@gmail.com',
    telefone: '(00) 0 0000-0000',
    opcoes: 'oi',
  },
  {
    id: 6,
    name: 'Regina Dantas',
    email: 'regina@gmail.com',
    telefone: '(00) 0 0000-0000',
    opcoes: 'oi',
  },
  {
    id: 7,
    name: 'Charles Baroldo',
    email: 'charles@gmail.com',
    telefone: '(00) 0 0000-0000',
    opcoes: 'oi',
  },
  {
    id: 8,
    name: 'Felipe Atilas',
    email: 'felipe@gmail.com',
    telefone: '(00) 0 0000-0000',
    opcoes: 'oi',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'telefone', 'opcoes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() {}

  ngOnInit(): void {}
}
