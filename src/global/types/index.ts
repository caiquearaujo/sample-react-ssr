import {
	AnyAction,
	CombinedState,
	Dispatch,
	ThunkDispatch,
	ThunkMiddleware,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export interface UserObject {
	id: number;
	name: string;
}

export interface UsersState {
	data: UserObject[];
}

export type RootState = CombinedState<{
	users: UsersState;
}>;

export type Store = ToolkitStore<
	RootState,
	AnyAction,
	[ThunkMiddleware<RootState, AnyAction, undefined>]
>;

export type StoreDispatch = ThunkDispatch<
	RootState,
	undefined,
	AnyAction
> &
	Dispatch<AnyAction>;
