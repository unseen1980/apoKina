import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ApokinaAppComponent } from '../app/apokina.component';

beforeEachProviders(() => [ApokinaAppComponent]);

describe('App: Apokina', () => {
  it('should create the app',
      inject([ApokinaAppComponent], (app: ApokinaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'apokina works!\'',
      inject([ApokinaAppComponent], (app: ApokinaAppComponent) => {
    expect(app.title).toEqual('apokina works!');
  }));
});
