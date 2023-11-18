import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AdminGuard } from './admin.guard';
import { LoginService } from './login.service';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockLoginService = jasmine.createSpyObj('LoginService', ['isLoggedIn', 'getUserRole']);
    mockRouter = jasmine.createSpyObj('Router', ['createUrlTree']);

    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        { provide: LoginService, useValue: mockLoginService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation for admin user', () => {
    // Set up the mock behavior
    mockLoginService.isLoggedIn.and.returnValue(true);
    mockLoginService.getUserRole.and.returnValue('ADMIN');

    // Call canActivate
    const result = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    // Expect that activation is allowed
    expect(result).toBe(true);
    expect(mockRouter.createUrlTree).not.toHaveBeenCalled(); // Make sure createUrlTree was not called
  });

  it('should redirect to login for non-admin user', () => {
    // Set up the mock behavior
    mockLoginService.isLoggedIn.and.returnValue(true);
    mockLoginService.getUserRole.and.returnValue('USER'); // Non-admin role

    // Set up the mock router behavior
    const mockUrlTree: UrlTree = {} as UrlTree;
    mockRouter.createUrlTree.and.returnValue(mockUrlTree);

    // Call canActivate
    const result = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    // Expect that activation is denied and router.createUrlTree was called
    expect(result).toBe(mockUrlTree);
    expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/login']);
  });

  // Add more tests as needed
});
