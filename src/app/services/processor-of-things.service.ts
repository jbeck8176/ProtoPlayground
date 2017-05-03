import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable()
export class ProcessorOfThingsService {
	private currentQueue: string[] = [];
	private running: boolean;

	private runningStatusSbj$: Subject<boolean> = new Subject<boolean>();
	private queueStatusSbj$: Subject<string> = new Subject<string>();

	runningStatus$: Observable<boolean> = this.runningStatusSbj$;
	queueStatus$: Observable<string> = this.queueStatusSbj$;

	constructor() {

	}

	addToQueue(item: string): void {
		this.currentQueue.push(item);
		if (!this.running) {
			this.startProcess();
		}
	}

	private startProcess(): void {
		// let obs = Observable.create((observer: Observer<boolean>) => {
		this.running = true;
		this.runningStatusSbj$.next(this.running);


		//breaking out if the event loop to do this "async"
		setTimeout(() => {

			while (this.currentQueue.length > 0) {
				let itemToWorkOn = this.currentQueue.shift();
				console.log('sleeping');
				this.sleep(500);
				this.queueStatusSbj$.next(itemToWorkOn);
			}
			this.running = false;
			this.runningStatusSbj$.next(this.running);
		}, 1);
	}

	private sleep(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds) {
				break;
			}
		}
	}

}
