import Express from './app';

const express = new Express();
express.listen();
express.onError();
express.onListening();

export default express.app;