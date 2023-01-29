import {
	AnyAction,
	CombinedState,
	Dispatch,
	ThunkDispatch,
	ThunkMiddleware,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { RouteObject } from 'react-router-dom';

export interface UserObject {
	id: number;
	name: string;
}

export interface UsersState {
	data: UserObject[];
}

export type PreloadFn = (store: Store) => Promise<void>;

export type PreloadedRouteObject = RouteObject & {
	preload?: PreloadFn;
};

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

declare global {
	interface Window {
		__PRELOADED_STATE__: object;
	}
}
