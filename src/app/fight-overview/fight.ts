import { Fighter } from '../fighter-overview/fighter';

export type Fight = {
  fighters: readonly [ Fighter, Fighter ];
  result?: 'First_Fighter_Won' | 'Second_Fighter_Won';
}
