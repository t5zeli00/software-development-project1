import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DataService]
})
export class DashboardComponent implements OnInit {
  shoppingItemList: Item[]=[];
  selectedItem: Item;
  toggleForm: boolean = false;

  getItems(){
    this.dataService.getShoppingItems()
      .subscribe( items => {
        this.shoppingItemList = items;
        //console.log('data from dataservice: ' + this.shoppingItemList[0]);
      });
  }

  addItem(form){
    //console.log(form.value);
    let newItem: Item = {
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemBought: false
    }
    this.dataService.addShoppingItem(newItem)
      .subscribe(item => {
        console.log(item);
        this.getItems();
      });
  }

  deleteItem(id){
    this.dataService.deleteShoppingItem(id)
      .subscribe(data => {
        console.log(data);
        if(data.n == 1){
          for(var i=0; i< this.shoppingItemList.length; i++){
            if(id == this.shoppingItemList[i]._id){
              this.shoppingItemList.splice(i, 1);
            }
          }
        }
      });
  }

  editItem(form){
    let newItem: Item = {
      _id: this.selectedItem._id,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemBought: false //form.selectedItem.itemBought
    }

    this.dataService.updateShoppingItem(newItem)
      .subscribe( result => {
        console.log('Original Item to be updated with old values:' + result.itemQuantity);
        this.getItems();
      });

      this.toggleForm = !this.toggleForm;
  }

  showEditForm(item){
    this.selectedItem = item;
    this.toggleForm = !this.toggleForm;
  }

  updateItemCheckbox(item){
    item.itemBought = !item.itemBought;
    this.dataService.updateShoppingItem(item)
      .subscribe( result => {
        console.log('Original checkbox values:' + result.itemBought );
        this.getItems();
      });
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getItems();
  }

}
