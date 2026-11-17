import {TestBed} from '@angular/core/testing';
import {UserCard} from './user-card';

describe('UserCard', () => {

  it('should emit user ID when favorite button is clicked', async () => {
    await TestBed.configureTestingModule({
      imports: [UserCard]
    }).compileComponents();

    const fixture = TestBed.createComponent(UserCard);

    fixture.componentRef.setInput('user', {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      address: { city: 'Gwenborough' }
    });

    fixture.detectChanges();

    let selectedId = 0;

    fixture.componentInstance.favoriteToggled.subscribe(id => {
      selectedId = id;
    });

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(selectedId).toBe(1);
  });

});