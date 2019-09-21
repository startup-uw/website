import app from 'firebase/app';
import 'firebase/firestore';
import Config from '../../secrets.json';

// NOTE: Remember to add in the secrets.json file seperately prior
// to deployment
const config = {
  apiKey: Config.API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  databaseURL: Config.DATABASE_URL,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDER_ID,
  appId: Config.APP_ID,
};

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config);
    }
    this.firestore = app.firestore();
  }

  getTeamMembers = () =>
    this.firestore
      .collection('current')
      .orderBy('order', 'asc')
      .get();

  getEvents = () => this.firestore.collection('events').get();
}

export default Firebase;
