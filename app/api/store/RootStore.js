import _ from 'lodash';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import UserStore from './UserStore';
import SceneStore from './SceneStore';

class RootStore {
    constructor() {
        this.userStore = new UserStore(this),
        this.sceneStore = new SceneStore(this)
    }
}
const rootStore = new RootStore();
export default rootStore;