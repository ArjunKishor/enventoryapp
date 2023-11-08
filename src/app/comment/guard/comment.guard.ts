import { CanActivateFn, Resolve } from '@angular/router';
import { CommentsDto } from '../comments-dto';

export const commentGuard: CanActivateFn = (route, state) => {
  return true;
};

//  