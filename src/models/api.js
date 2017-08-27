/**
 * @providesModule Api
 */

import { AsyncStorage } from 'react-native';
import queryString from 'query-string';

class API {

  poses: null;

  constructor(host) {
    this.host = host
  }

  async fetchPoses() {
    if(this.poses){
      return this.poses;
    }

    try {
      let response = await fetch(`${this.host}/poses`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      this.poses = await response.json();

      AsyncStorage.setItem(
        `@YogaSanskrit:poses`,
        JSON.stringify(this.poses['poses'])
      );
      return this.poses['poses'];

    } catch(e) {
      console.error(e);
    }
  }
}

const api = new API('https://ancient-coast-76087.herokuapp.com');

export default api
