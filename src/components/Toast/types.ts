export enum ToastType {
	INFO,
	WARNING,
	ERROR,
}
export interface ToastProps {
	type?: ToastType
	message: string
}
