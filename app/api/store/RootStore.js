import _ from 'lodash';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import UserStore from './UserStore';

class RootStore {
    constructor() {
        this.stores = {
            userStore: new UserStore(this)
        };
    }
}
const rootStore = new RootStore();
export default rootStore;