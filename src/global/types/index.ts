import { APIResponse } from '@global/api/types';
import {
	AnyAction,
	CombinedState,
	Dispatch,
	MiddlewareArray,
	ThunkDispatch,
	ThunkMiddleware,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { RouteObject } from 'react-router-dom';

export interface UserObject {
	id: number;
	name: string;
}

export type UsersState = APIResponse<UserObject[]>;

export type PreloadFn = (store: Store) => Promise<any>;

export type PreloadedRouteObject = RouteObject & {
	preload?: PreloadFn;
};

export type RootState = CombinedState<{
	users: UsersState;
}>;

export type Store = ToolkitStore<
	RootState,
	AnyAction,
	MiddlewareArray<[ThunkMiddleware<RootState, AnyAction, AxiosInstance>]>
>;

export type StoreDispatch = ThunkDispatch<
	RootState,
	AxiosInstance,
	AnyAction
> &
	Dispatch<AnyAction>;

declare global {
	interface Window {
		__PRELOADED_STATE__: object;
	}
}
