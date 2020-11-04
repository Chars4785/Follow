
import _ from 'lodash';
import { observer } from 'mobx-react';
import { observable } from 'mobx'

class SceneStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
    @observable checkLogin = 1;

}

export default SceneStore;