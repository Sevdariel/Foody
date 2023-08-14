import { AccountService } from 'src/app/shared/account/account.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegisterDto } from 'src/app/shared/account/account-dto.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Output()
  public cancelRegisterEvent = new EventEmitter();

  public formGroup: FormGroup;

  private destroyed$ = new Subject();

  constructor(
    private accountService: AccountService,
    formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }

  public register() {
    this.accountService.register(this.prepareDto())
      .pipe(
        takeUntil(this.destroyed$))
      .subscribe(() => this.cancelRegister());
  }

  public cancelRegister() {
    this.cancelRegisterEvent.emit();
  }

  private prepareDto(): IRegisterDto {
    const registerDto: IRegisterDto = {
      password: this.formGroup.get('password')?.value,
      username: this.formGroup.get('username')?.value,
    };

    return registerDto;
  }
}
