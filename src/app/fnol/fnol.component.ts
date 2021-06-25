import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpService } from './service/http.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  SingleSpaProps,
  singleSpaPropsSubject,
} from 'src/single-spa/single-spa-props';

@Component({
  selector: 'dcp-sub-fnol-report',
  templateUrl: './fnol.component.html',
  styleUrls: ['./fnol.component.scss'],
})
export class FnolComponent implements OnInit {
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  props$ = singleSpaPropsSubject.asObservable();
  token: string;

  fnolData: any;
  fnolForm: FormGroup;
  panelOpenState = false;

  testData: any = {
    policyholderName: 'Taro',
    policyNumber: '9999',
    product: '1',
    insuredName: 'Taro Father',
    relation: '2',
    email: 'sample@gmail.com',
    phoneNo: '666-777-888',
    communication: '1',
    locationOfAccident: 'Osaka',
    dateOfAccident: '2020/4/1',
    categoryOfHospital: '222',
  };

  constructor(private readonly httpService: HttpService) {
    this.initForm();
  }

  ngOnInit() {
    this.subscription = singleSpaPropsSubject.subscribe((props) => {
      this.singleSpaProps = props;
      console.log(
        '----- [MyPage.ngOnInit()] - [props] >>>',
        this.singleSpaProps
      );
      console.log('@@@[MyPage].["token"]:', this.singleSpaProps['token']);
      this.token = this.singleSpaProps['token'];
      console.log(
        '----localStorage in mypage:',
        localStorage.getItem('mainAppLocalToken')
      );
      this.token = localStorage.getItem('mainAppLocalToken');
    });

    this.fnolForm.setValue(this.testData);
  }

  submitFnolData() {
    this.httpService.postFnolData(this.fnolForm.value);
  }

  initForm(): void {
    this.fnolForm = new FormGroup({
      policyholderName: new FormControl('', [Validators.required]),
      policyNumber: new FormControl('', [Validators.required]),
      product: new FormControl('', [Validators.required]),
      insuredName: new FormControl('', [Validators.required]),
      relation: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.email, // e-mailフォーマットチェック
      ]),
      phoneNo: new FormControl('', [Validators.required]),
      communication: new FormControl('', [Validators.required]),
      locationOfAccident: new FormControl('', [Validators.required]),
      dateOfAccident: new FormControl('', [Validators.required]),
      categoryOfHospital: new FormControl('', [Validators.required]),
    });
  }
}
