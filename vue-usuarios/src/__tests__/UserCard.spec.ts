import {describe, it, expect} from 'vitest';
import { mount } from '@vue/test-utils';
import UserCard from '../components/UserCard.vue';

describe('UserCard', () => {

  it('should display user data and emit favorite event', async () => {

    const user ={
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      address: {
        city: 'Gwenborough'
      }
    };

    const wrapper = mount(UserCard,{
      props: {
        user: user,
        isFavorite: false
      }
    });

    //verificamos datos del user
    expect(wrapper.text()).toContain('Leanne Graham');
    expect(wrapper.text()).toContain('Gwenborough');

    //simular clic en fav
    await wrapper.get('button').trigger('click');

    //verificamos si el id es el correcto
    expect(wrapper.emitted('toggle')?.[0]).toEqual([1]);

  });

});
