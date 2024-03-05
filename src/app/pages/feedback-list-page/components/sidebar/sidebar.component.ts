import { Component, effect, signal } from '@angular/core';
import { Tag } from '../../model/tag.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public tag = signal<Tag[]>([
    { id: 1, name: 'All', active: true },
    { id: 2, name: 'UI', active: false },
    { id: 3, name: 'UX', active: false },
    { id: 4, name: 'Enhancement', active: false },
    { id: 5, name: 'Bug', active: false },
    { id: 6, name: 'Feature', active: false },
  ]);

  setActive(id: number) {
    this.tag.update((tags) => {
      tags.forEach((tag) => {
        tag.active = tag.id === id;
        return tag;
      });
      return tags;
    });
  }

  constructor() {
    effect(() => {
      this.tag()
        .filter((tag) => tag.active)
        .forEach((tag) => console.log(tag.name + 'this is active'));
    });
  }
}
