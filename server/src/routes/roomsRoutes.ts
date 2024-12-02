// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import express from 'express';
import { CommunicationIdentityClient } from '@azure/communication-identity';
import { RoomsClient } from '@azure/communication-rooms';
import { createRoom, getToken } from '../controllers/roomsController';

export const roomsRouter = (identityClient: CommunicationIdentityClient, roomsClient: RoomsClient): express.Router => {
  // Initialize router
  console.log('Initializing roomsRouter...');
  console.log('Beginning roomsRouter function');
  const router = express.Router();
  console.log('Creating room...1234:server');
  router.post('/', createRoom(identityClient, roomsClient));
  router.post('/token', getToken(identityClient, roomsClient));

  return router;
};
