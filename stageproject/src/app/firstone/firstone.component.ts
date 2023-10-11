import { Component, OnInit } from '@angular/core';
import { ConfigTable } from '../models/configtable';
import { ConfigTableServiceService } from '../services/config-table-service.service';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-firstone',
  templateUrl: './firstone.component.html',
  styleUrls: ['./firstone.component.css']
})
export class FirstoneComponent implements OnInit {
  columnsToDisplay: { [key: string]: boolean } = {};
  listconfig !: ConfigTable[];
  public textInputTableName !: string;
  public showTableNotFoundError: boolean = false;
  public showEmptyInputMessage: boolean = false; // New variable to track empty input state

  listDonnees !:any;
  
  constructor(private configService : ConfigTableServiceService,public modalService: NgbModal) { }

  ngOnInit(): void {}

  getConfigTable() {
    this.showTableNotFoundError = false;
    this.showEmptyInputMessage = false; // Reset empty input state on each click
    if (this.textInputTableName != null) {
      this.configService.getConfigTable(this.textInputTableName).subscribe(
        data => {
          this.listconfig = data;
          console.log(this.listconfig);
          if (this.listconfig.length === 0) {
            this.showTableNotFoundError = true;
          }
        },
        error => {
          console.log('Erreur de récupération configs!', error);
          this.showTableNotFoundError = true;
        }
      );
    } else {
      this.showEmptyInputMessage = true; // Show empty input message if input is empty
    }
  }



  showValues() {
  
  }


  openModal(content:any) {
    this.modalService.open(content, { centered: true });
        // Récupérer les noms de colonnes à afficher en filtrant les colonnes activées par le switch.
        const columnsToShow = Object.keys(this.columnsToDisplay).filter(key => this.columnsToDisplay[key])

    this.configService.getAllDynamique(this.textInputTableName).subscribe(
      data => {
        this.listDonnees = data.map((row: any) => {
          // Filtrer les colonnes pour chaque ligne de données en utilisant la liste des colonnes à afficher.
          const newRow: any = {};
          for (const column of columnsToShow) {
            newRow[column] = row[column];
          }
          return newRow;
        });
      },
      error => {
        alert("error recuperation data of this table");
      }
    );
  }
  
}
