import firebaseApp from 'firebase/app';
import 'firebase/auth';

import config from '../constants/firebase';

let instants;

export default () => {
  if (!instants) {
    instants = firebaseApp.initializeApp(config);
  }

  return instants;
};


const auth = firebaseApp.auth();
console.log({auth});
