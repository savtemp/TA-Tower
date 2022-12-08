import mongoose from 'mongoose';
import { AccountSchema } from '../models/Account'
import { CommentSchema } from '../models/Comment.js';
import { TowerEventSchema } from '../models/TowerEvent.js';
import { TicketSchema } from '../models/Ticket.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Event = mongoose.model('Event', TowerEventSchema);

  Comment = mongoose.model('Comment', CommentSchema);

  Ticket = mongoose.model('Ticket', TicketSchema);
}

export const dbContext = new DbContext()
