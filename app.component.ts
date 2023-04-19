import { ItemComponent } from './item/item.component';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActiveDescendantKeyManager } from "@angular/cdk/a11y"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'testListItem';

  list = [
    { id: 1, name: "Vinh1" },
    { id: 2, name: "Vinh2" },
    { id: 3, name: "Vinh3" },
  ]

  @ViewChildren(ItemComponent) li!: QueryList<ItemComponent>;

  private keyManager!: ActiveDescendantKeyManager<ItemComponent>

  ngAfterViewInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.li).withWrap();
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.key == "Enter") {
      alert(this.keyManager.activeItem?.items.name)
    } else {
      this.keyManager.onKeydown(e);
    }
  }
}
