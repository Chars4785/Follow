
import _ from 'lodash';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx'

class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
    @observable user = 1;
    @observable checkLogin = false;

    getCheckLogin = () => this.checkLogin;

    @action
    setChekcLogin =(_checkLogin) => this.checkLogin = _checkLogin;
}

export default UserStore;