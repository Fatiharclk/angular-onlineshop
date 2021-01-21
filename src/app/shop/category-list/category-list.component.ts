import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public selectedCategory: Category = null;
  @Output() selectCategory = new EventEmitter<Category>();

  constructor( private categoryRepository: CategoryRepository ) { }

  ngOnInit(): void {
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
}

changeCategory(newCategory?: Category) {
  this.selectedCategory = newCategory;
  this.selectCategory.emit(newCategory);
}

}
