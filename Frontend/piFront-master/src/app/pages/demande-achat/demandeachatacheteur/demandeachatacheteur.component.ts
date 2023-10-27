import { Component, OnInit } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { ToastrService } from 'ngx-toastr';
import { UpdateDemandeComponent } from 'src/app/components/demande-achat/update-demande/update-demande.component';
import { DemandeAchat } from 'src/app/core/Model/demande-achat';
import { DemandeachatServiceService } from 'src/app/services/demandeachat-service.service';
import { Article } from 'src/app/utils/interfaces/article.interface';

@Component({
  selector: 'app-demandeachatacheteur',
  templateUrl: './demandeachatacheteur.component.html',
  styleUrls: ['./demandeachatacheteur.component.scss']
})
export class DemandeachatacheteurComponent implements OnInit {

  demandes: any[] = [];
  localStorageActiveTabKey = "activeTab";
  active: number = 1;
  selectedArticle: Article | null = null;

  constructor(
    private demandeService: DemandeachatServiceService,
    private dialog: DialogService,
    public toast: ToastrService
  ) {
    this.active =
      JSON.parse(localStorage.getItem(this.localStorageActiveTabKey)) || 1;
  }

  toggleComments(article: Article): void {
    if (this.selectedArticle === article) {
      // If the selected article is already open, close it
      this.selectedArticle = null;
    } else {
      this.selectedArticle = article;
    }
  }

  setActiveTab(index: number) {
    this.active = index;
    localStorage.setItem(this.localStorageActiveTabKey, index.toString());
  }

  updateDemande(demande: DemandeAchat) {
    const dialogRef = this.dialog.open(UpdateDemandeComponent, {
      size: "lg",
      data: demande,
    });

    dialogRef.afterClosed$.subscribe({
      next: (res: any) => {
        res && this.getAllMyDemandes();
      },
    });
  }

  deleteDemande(id: number) {
    if (window.confirm("Êtes-vous sûr ?")) {
      this.demandeService.deleteDemande(id).subscribe({
        complete: () => {
          this.toast.success("demande a été supprimée");
          this.getAllMyDemandes();
        },
      });
    }
  }
/*
  getAllDemandes() {
    this.demandeService.getAllDemandes().subscribe({
      next: (res: any) => {
        this.demandes = res;
      },
    });
  }
*/
  getAllMyDemandes() {
    this.demandeService.getDemandeAchatByAcheteurCurrent( localStorage.getItem("idUser")).subscribe({
      next: (res: any) => {
        this.demandes = res;
      },
    });
  }

  ngOnInit(): void {
    this.getAllMyDemandes();
  }
}
