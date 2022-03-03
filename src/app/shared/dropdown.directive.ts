import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen = false; //binds to the class property of the element and adds open to it is isOpen is true

  @HostListener("click") toggleOpen() {
    //listens to the host element the directive is used on
    this.isOpen = !this.isOpen;
  }
}
