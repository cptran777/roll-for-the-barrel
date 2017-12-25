import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  socketIOService = service('socket-io') as any;
  
  model(this: IndexRoute): any | Promise<any> {
    const socket = this.get('socketIOService').socketFor('http://localhost:3000/');
    
    console.log('running model');
    
    socket.on('connect', this.onConnect, this);
  }
  
  onConnect(this: IndexRoute): void {
    const socket = this.get('socketIOService').socketFor('http://localhost:3000/');
    
    console.log('socket connected from client');
    
    socket.send('Hello world');
  }
}
