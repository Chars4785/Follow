
import _ from 'lodash';
import { observer } from 'mobx-react';
import { observable } from 'mobx'

class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
    @observable user = 1;

}

export default UserStore;