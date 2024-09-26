import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {PanierService} from "../../../../core/services/panier.service";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {CustomValidators} from "../../../../core/validators/custom.validators";
import {FormErrorComponent} from "../../../../shared/components/form-error/form-error.component";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {Button} from "primeng/button";

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent,
    CardModule,
    InputTextModule,
    FloatLabelModule,
    Button,
  ],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.scss'
})
export class ArticleEditComponent {

  id: string;
  form: FormGroup;
  categorieGroup: FormGroup;
  tagsArray : FormArray

  constructor(
    private readonly route: ActivatedRoute,
    private readonly panierService: PanierService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {
    const article = route.snapshot.data['article'];
    this.id = route.snapshot.params['id'];

    this.categorieGroup = formBuilder.group({
      nom: [null, [Validators.required]],
      description: [null]
    })
    this.tagsArray = formBuilder.array([], { validators: [Validators.minLength(2)] })
    this.form = formBuilder.group({
      nom: [null, [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(/[a-z]+/i)
        ], []
      ],
      nutriscore: [null, [CustomValidators.in(['a', 'b', 'c', 'd', 'e'])]],
      prix: [null, [Validators.min(0), Validators.max(99)]],
      categorie: this.categorieGroup,
      tags: this.tagsArray,
      quantite: [null],
      estImportant: [false]
    })

    this.form.patchValue(article);
  }

  save() {
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.form.valid);
    this.panierService.update(this.id, this.form.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/exercices', 'articles']);
        }
      })
  }
}
/*
{
  nom: 'pommes', // control
  quantite: 42, // control
  prix: 5.5, // control
  tags: ['sante', 'nature'], Array<Control>
  categorie: { // group<Control>
    nom: '', // control
    description: '' // control
  },
  nutriscore: 'a' //control
} // group
*/
