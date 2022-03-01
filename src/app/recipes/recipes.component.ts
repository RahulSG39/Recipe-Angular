import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  @Input() passedRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  passingData(recipe: Recipe) {
    this.passedRecipe = recipe;
  }
}
