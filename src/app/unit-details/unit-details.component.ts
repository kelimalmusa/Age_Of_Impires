import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { units } from '../ageOfEmpires';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss']
})
export class UnitDetailsComponent implements OnInit, OnDestroy {
  unitId!: number;
  unit!: IUnit;
  $subscription!: Subscription;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.$subscription = this.route.params.subscribe(param => {
      this.unitId = +param["id"];
    });
    this.unit = units.find(el => el?.id === this.unitId) as unknown as IUnit;
  }

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }


}

export interface IUnit {
  id: number;
  name: string;
  description: string;
  age: string;
  cost: ICost;
  build_time: number;
  reload_time: number;
  hit_points: number;
  attack: number;
  accuracy: string;
}

export interface ICost {
  Wood?: number;
  Food?: number;
  Gold?: number;
}
